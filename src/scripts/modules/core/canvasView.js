export default class canvasView {
  constructor(canvas, FPS, loopFPS, animetion) {
    this.canvas = (canvas == null)? document.getElementById('core') : canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = 0
    this.height = 0
    this.GRID_X = 50
    this.GRID_Y = 50
    this.frm = 0
    this.frmLoop = 0
    this.FPS = FPS
    this.loopFPS = loopFPS
    this.bgCanvasImage
    this.is = false

    this.animetion = animetion
  }

  initCanvas(){
    this.canvas.width    = this.width  = window.innerWidth
    this.canvas.height   = this.height = window.innerHeight
    this.ctx.globalAlpha = 1
  }
  addFrmCount(){
    this.frm++
    this.frmLoop++
    this.frmLoop = (this.frmLoop % this.loopFPS)
  }
  drawCanvas(){
    var cw  = this.width
    var ch  = this.height
    var ctx = this.ctx
    var subText = (ch * 0.9)
    function fillText (fnt, txt) {
      ctx.font = fnt
      ctx.fillText(txt)
    }

    this.drawBG()
    ctx.fillStyle = '#241e20'
    ctx.fillRect(0, 0, cw, cw*0.5)

    /////////////////////////
    ///text
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'

    ctx.font = '8px "Menlo"'
    ctx.fillStyle = '#241e20'
    ctx.fillText( yyyymmdd() + ' ' + hhmissms(), cw/2, subText, cw )
    ctx.fillText('FRAM : ' + this.frm, cw/2, subText + 20, cw )

    ctx.font = '160px "Menlo"'

    var words = [
      {
        color: '#0000ff',
        x: 0.5,
        y: 0.16
      },
      {
        color: '#ff0000',
        x: 0.5,
        y: 0.16
      },
      {
        color: '#00ff00',
        x: 0.5,
        y: 0.16
      },
      {
        color: '#fff000',
        x: 0.5,
        y: 0.16
      },
      {
        color: '#ffffff',
        x: 0.5,
        y: 0.16
      },
    ]

    this.animetion.init(this.frm, this.frmLoop, this.FPS)
    var animetion = this.animetion

    _.each(words, function(word, i){
      function write (word, color, x, y) {
        ctx.fillStyle = color
        ctx.fillText(
          word,
          animetion.X(cw*x),
          animetion.Y(ch*y),
          cw)
      }

      function logoWrite (logo) {
        _.each(logo, function(str, idx){
          write(
            str,
            word.color,
            animetion.X(word.x * idx*0.22 + 0.05),
            animetion.Y(word.y),
          )

        })
      }

      logoWrite('graminium')
    })
  }

  drawBG(){
    if(this.bgCanvasImage == null){
      var cw  = this.width
      var ch  = this.height
      var ctx = this.ctx
      this.bgCanvasImage = ctx.getImageData(0, 0, cw, ch)
    }
    this.ctx.putImageData(this.bgCanvasImage, 0, 0)
  }
}

// other
// 1桁の数字を0埋めで2桁にする
function toDoubleDigits (num) {
  num += ""
  if (num.length === 1)num = "0" + num
 return num
}
function toTripleDigits (num) {
  num += ""
  if (num.length === 1)num = "0" + num
  if (num.length === 2)num = "0" + num
 return num
}

// 日付をYYYY/MM/DD HH:DD:MI:SS形式で取得
function yyyymmdd () {
  var date = new Date()
  var yyyy = date.getFullYear()
  var mm = toDoubleDigits(date.getMonth() + 1)
  var dd = toDoubleDigits(date.getDate())
  return yyyy + '.' + mm + '.' + dd
}
function hhmissms () {
  var date = new Date()
  var hh = toDoubleDigits(date.getHours())
  var mi = toDoubleDigits(date.getMinutes())
  var ss = toDoubleDigits(date.getSeconds())
  var ms = toTripleDigits(date.getMilliseconds())
  return hh + ':' + mi + ':' + ss + '.' + ms
}
function getRandOffsetNum () {
  var num = Math.random() * 1800 + 250
  if(Math.random() < 0.6){
    num *= -1
  }
  return num
}
