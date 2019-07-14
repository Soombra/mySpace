<template>
  <div class="clock">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  import numbers from './numbers'

  const config = {
    colors: ["#33B5E5", "#0099cc", "#aa66cc", "#9933cc", "#99cc00", "#669900", "#ffbb33", "#ff8800", "#ff4444", "#cc0000"],
    width: 230,
    height: 100,
    r: 1.5,
    gap: 1,
    numGap: 2,
    clockColor: 'rgb(0,102,153)',
    vx: 3,
    vy: 2,
    g: 0.5,
    loss: 0.7
  }
  const time = {
    hour: 0,
    minute: 0,
    second: 0
  }
  const {gap, numGap, r} = config
  const coordinates = {
    hour1: 0,
    hour2: 7 * (2 * r + gap) + numGap,
    seperation1: (7 * (2 * r + gap) + numGap) * 2,
    minute1: (7 * (2 * r + gap) + numGap) * 2 + 4 * (2 * r + gap) + numGap,
    minute2: (7 * (2 * r + gap) + numGap) * 3 + 4 * (2 * r + gap) + numGap,
    seperation2: (7 * (2 * r + gap) + numGap) * 4 + 4 * (2 * r + gap) + numGap,
    second1: (7 * (2 * r + gap) + numGap) * 4 + (4 * (2 * r + gap) + numGap) * 2,
    second2: (7 * (2 * r + gap) + numGap) * 5 + (4 * (2 * r + gap) + numGap) * 2
  }
  const colorfulBalls = []
  let timer = 0

  export default {
    data () {
      return {}
    },
    methods: {
      canvasBegin () {
        const canvas = document.getElementById ('canvas')
        const {width, height} = config
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext ('2d')
        context.strokeRect (0, 0, width, height)
        timer = setInterval (() => {
          this.updateData ()
          this.draw (context)
        }, 50)
      },
      draw (ctx) {
        const {width, height} = config
        ctx.clearRect (0, 0, width, height)
        this.drawClock (ctx)
        this.drawColorfulBalls (ctx)
      },
      updateData () {
        const {width, height, loss, g} = config
        for (let i in colorfulBalls) {
          const {x, y, vx, vy} = colorfulBalls[i]
          colorfulBalls[i].x = x + vx
          colorfulBalls[i].y = y + vy
          colorfulBalls[i].vy = vy + g
          if (colorfulBalls[i].y > height) {
            colorfulBalls[i].vy = -1 * loss * vy
          }
          if (colorfulBalls[i].x < 0 || colorfulBalls[i].x > width) {
            colorfulBalls.splice (i, 1)
          }
        }

        this.makeColorfulBalls ()
      },
      makeColorfulBalls () {
        let now = new Date ()
        let currentHour = now.getHours ()
        let currentMinute = now.getMinutes ()
        let currentSecond = now.getSeconds ()
        const {hour, minute, second} = time
        const {hour1, hour2, seperation1, seperation2, minute1, minute2, second1, second2} = coordinates
        if (currentSecond != second) {
          this.addBall (second2, 0, currentSecond % 10)
          if (parseInt (currentSecond / 10) != parseInt (second / 10)) {
            this.addBall (second1, 0, parseInt (currentSecond / 10))
            if (currentMinute != minute) {
              this.addBall (minute2, 0, currentMinute % 10)
              if (parseInt (currentMinute / 10) != parseInt (minute / 10)) {
                this.addBall (minute1, 0, parseInt (currentMinute / 10))
                if (currentHour != hour) {
                  this.addBall (hour2, 0, currentHour % 10)
                  if (parseInt (currentHour / 10) != parseInt (hour / 10)) {
                    this.addBall (hour1, 0, parseInt (currentHour / 10))
                  }
                }
              }
            }
          }
        }
        time.hour = currentHour
        time.minute = currentMinute
        time.second = currentSecond
      },
      addBall (x, y, num) {
        const {r, gap, colors, vx, vy} = config
        for (let i in numbers[num]) {
          for (let j in numbers[num][i]) {
            if (numbers[num][i][j] === 1) {
              let thisBall = {
                x: x + r + (2 * r + gap) * j,
                y: y + r + (2 * r + gap) * i,
                color: colors[Math.round (Math.random () * colors.length)],
                vx: (vx * Math.random () + 0.2) * (Math.ceil (2 * Math.random ()) - 1.5) * 2,
                vy: vy * Math.random () - (vy / 2)
              }
              colorfulBalls.push (thisBall)
            }
          }
        }
      },
      drawClock (ctx) {
        const {hour, minute, second} = time
        const {hour1, hour2, seperation1, seperation2, minute1, minute2, second1, second2} = coordinates
        this.drawNum (hour1, 0, parseInt (hour / 10), ctx)
        this.drawNum (hour2, 0, parseInt (hour % 10), ctx)
        this.drawNum (seperation1, 0, 10, ctx)
        this.drawNum (minute1, 0, parseInt (minute / 10), ctx)
        this.drawNum (minute2, 0, parseInt (minute % 10), ctx)
        this.drawNum (seperation2, 0, 10, ctx)
        this.drawNum (second1, 0, parseInt (second / 10), ctx)
        this.drawNum (second2, 0, parseInt (second % 10), ctx)
      },
      drawNum (x, y, num, ctx) {
        const {r, gap, clockColor} = config
        for (let i in numbers[num]) {
          for (let j in numbers[num][i]) {
            if (numbers[num][i][j] === 1) {
              this.drawBall (x + r + (2 * r + gap) * j, y + r + (2 * r + gap) * i, clockColor, ctx)
            }
          }
        }
      },
      drawColorfulBalls (ctx) {
        for (let i in colorfulBalls) {
          const {x, y, color} = colorfulBalls[i]
          this.drawBall (x, y, color, ctx)
        }
      },
      drawBall (x, y, color, ctx) {
        ctx.fillStyle = color
        ctx.beginPath ()
        ctx.arc (x, y, config.r, 0, 2 * Math.PI)
        ctx.closePath ()
        ctx.fill ()
      }
    },
    mounted () {
      this.canvasBegin ()
    },
    beforeDestroy () {
      clearInterval(timer)
    }
  }
</script>
<style lang="scss" scoped>

</style>
