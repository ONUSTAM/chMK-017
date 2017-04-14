export default class glitch {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    // this.height = canvas.height;
    this.height = canvas.width
    this.bb = false
  }

  glitchWave (renderLineHeight, cuttingHeight){
    var image = this.ctx.getImageData(0, renderLineHeight, this.width, cuttingHeight);
    this.ctx.putImageData(image, 0, renderLineHeight - 10);
  };

  glitchSlip (waveDistance){
    var startHeight = this.height * Math.random();
    var endHeight = startHeight + 30 + (Math.random() * 40);
    for(var h = startHeight; h < endHeight; h++){
      if(Math.random() < 0.1)h++;
        var image = this.ctx.getImageData(0, h, this.width, 1);
        this.ctx.putImageData(image, Math.random()*waveDistance-(waveDistance/2), h);
    }
  };

  glitchSlipColor (waveDistance){
    var startHeight = this.height * Math.random();
    var endHeight = startHeight + 30 + (Math.random() * 40);
    var imageData = this.ctx.getImageData(0, startHeight,
                                          this.width, endHeight);
    var data = imageData.data;
    var r = 255;
    var g = 255;
    var b = 255;

    var testt = 0
    for(var i = 0, len = imageData.width * imageData.height; i<len; i++){
      if(i % imageData.width ==0){
        r = i + Math.floor((Math.random() - testt) * waveDistance);
        g = i + Math.floor((Math.random() - testt) * waveDistance);
        b = i + Math.floor((Math.random() - testt) * waveDistance);
      }
      data[i*4] = data[r*4];      //r
      data[i*4 + 1] = data[g*4 + 1];  //g
      data[i*4 + 2] = data[b*4 + 2]; //b
//      data[i*4 + 3] = data[a*4 + 3];  //a
    }
    this.ctx.putImageData(imageData, 0, startHeight);
  };

  glitchFillRandom (fillCnt, cuttingMaxHeight){
    var cw = this.width;
    var ch = this.height;

    for(var i = 0; i< fillCnt; i++){
      var rndX = cw * Math.random();
      var rndY = ch * Math.random();
      var rndW = cw * Math.random();
      var rndH = cuttingMaxHeight * Math.random();

      this.bb = !this.bb;
      if (this.bb) {
        rndY = rndY*-1;
        rndX = rndX*-1;
      }
      else {
        rndW = rndW*-1;
        rndH = rndH*-1;
      }

      var image = this.ctx.getImageData(rndX,rndY,rndW, rndH);
      this.ctx.putImageData(image, (rndX* Math.random())%cw, rndY);
    }
  }
}
