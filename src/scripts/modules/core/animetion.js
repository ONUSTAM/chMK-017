let frm = 0
let frmLoop = 0
let FPS = 0
let fpsMax = 0

export function init (_frm, _frmLoop, _fps) {
  frm = _frm
  frmLoop = _frmLoop
  FPS = _fps
  // console.log(frm, '::' , frmLoop, '::', FPS,);
}
export function X (x) {
  return rundom(x + 0.0001)
}
export function Y (y) {
  return rundom(y + 0.0001)
}

function rundom(p) {
  // return p
  var min = p
  var max = 0
  max = frmLoop*0.01

  if (Math.floor( Math.random() * 11 ) > 0) {
    return p
  }
  else {
    return Math.floor( Math.random() * (max+1-min) ) + min
  }
}
