import CanvasView from './canvasView'
import Glitch from './glitch'
import * as Animetion from './animetion'

export default function () {
  var FPS = 1;
  var loopFPS = 255;
  var animetion = Animetion
  var canvasView = new CanvasView(null, FPS, loopFPS, animetion)
  canvasView.initCanvas();

  var glitch = new Glitch(canvasView.canvas);
  var onoff = true;

  var render = function(){
    canvasView.addFrmCount();
    canvasView.drawCanvas();

    if(canvasView.frmLoop > 0 && canvasView.frmLoop < loopFPS*(1/2)){
      // fillCnt, cuttingMaxHeight
      // 横幅, 縦幅
      // glitch.glitchFillRandom(1, 1);
    }
    if(canvasView.frmLoop > 0 && canvasView.frmLoop <= loopFPS*(1/4)){
      var fz;

      if ( canvasView.frmLoop > loopFPS*(1/4)/2 ) {
        onoff = false;
        fz = loopFPS*(1/4) - canvasView.frmLoop;

      }
      else {
        onoff = true;
        fz = canvasView.frmLoop;
      }

      // glitch.glitchFillRandom(fz, fz);
    }

    if(canvasView.frmLoop > 0 && canvasView.frmLoop <= loopFPS*(7/8)){
      glitch.glitchSlip(3);
    }

    // if(canvasView.frmLoop > 300 && canvasView.frmLoop < 400){
    // if(canvasView.frmLoop < 2){
    //   glitch.glitchSlipColor(0);
    // }
    // renderLineHeight, cuttingHeight
    // glitch.glitchWave((canvasView.frm * 3) % canvasView.height, 16);
    //  if(counter >= 10)clearInterval(timer);
  }

  // animation task
  window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame  ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback, element){
        window.setTimeout(callback, 1000 / FPS);
      };
  })();
  function animationLoop(){
    render();
    requestAnimationFrame(animationLoop);
  };
  animationLoop();

}
