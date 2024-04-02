var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'canvas',
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);
function create() {
  background = this.add.image(400, 300, 'bkgd').setScale(2);
  dude = this.add.sprite(592, 249, 'dude').setScale(2);
  girlHead = this.add.sprite(288, 111, 'girl head').setScale(2);
  girlTurn = this.add.sprite(288, 231, 'girlTurns').setScale(2);
  girlTurn.visible = false;
  this.anims.create({
    key: 'dudeBusted',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 0,
        end: 5
      }),
    frameRate: 16,
    repeat: 0
  });
  canCrush = this.add.sprite(606, 300, 'canCrush').setScale(2);
  this.anims.create({
    key: 'canCrushDude',
    frames: this.anims.generateFrameNumbers('canCrush',
      {
        start: 0,
        end: 12
      }),
    frameRate: 16,
    repeat: 0
  });
  canCrush.visible = false;
  this.anims.create({
    key: 'girlTurning',
    frames: this.anims.generateFrameNumbers('girlTurns',
      {
        start: 0,
        end: 19
      }),
    frameRate: 16,
    repeat: 0
  });

  this.anims.create({
    key: 'dudeWon',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 33,
        end: 43
      }),
    frameRate: 16,
    repeat: 0
  });
  this.add.text(40, 50, 'OGLE-METER', {
    fontFamily: 'Stencil',
    fontSize: '24px',
    color: '#012349'
  });
  this.add.text(20, 120, 'TIME REMAINING', {
    fontFamily: 'Stencil',
    fontSize: '24px',
    color: '#012349'
  });
  meterBox = this.add.image(115, 30, 'meter');
  timerBox = this.add.image(115, 100, 'timer');
  timerValue = 60;
  timerText = this.add.text(80, 87, timerValue + ' SEC', {
    fontFamily: 'Stencil',
    fontSize: '24px',
    color: '#ffffff'
  });
  startButton = this.add.text(game.config.width / 2, game.config.height / 2, 'START GAME', {
    fontFamily: 'Stencil',
    fontSize: '48px',
    color: '#ffffff',
    shadow: { offsetX: 2, offsetY: 2, color: '#000000', fill: true }
  });
  startButton.setInteractive()
    .on('pointerdown', () => StartGame())
    .on('pointerover', () => startButton.setStyle({ fill: '#B38C40' }))
    .on('pointerout', () => startButton.setStyle({ fill: '#ffffff' }))
    .setOrigin(.5);
  slider = this.add.container(game.config.width / 2, game.config.height - 50);
  ogleSlide = this.add.image(0, 0, 'ogleslide');
  ogleSlider = this.add.image(ogleSlide.width / 2, 0, 'ogleslider');
  slider.add([ogleSlide, ogleSlider]);
  ogleSlider.setInteractive({ draggable: true });
  ogleSlider.on('drag', function (pointer, dragX, dragY) {
    ogleSlider.x = Phaser.Math.Clamp(dragX, -250, 250);
  });
  slider.setSize(500, 48);
  slider.setInteractive({ draggable: true });
  slider.on('drag', function (pointer, dragX, dragY) {
    slider.x = dragX;
  });
  slider.visible = false;
  meterValue = this.add.sprite(16, 30, 'meterValue');
  meterValue.setOrigin(0, 0.5);
  wonText = this.add.text(game.config.width / 2, game.config.height / 2, 'YOU WON!!', {
    fontFamily: 'Stencil',
    fontSize: '48px',
    color: '#ffffff',
    shadow: { offsetX: 2, offsetY: 2, color: '#000000', fill: true }
  });
  wonText.setOrigin(0.5);
  wonText.visible = false;
  playAgainButton = this.add.text(game.config.width / 2, game.config.height / 2 + 80, 'PLAY AGAIN?', {
    fontFamily: 'Stencil',
    fontSize: '48px',
    color: '#ffffff',
    shadow: { offsetX: 2, offsetY: 2, color: '#000000', fill: true }
  });
  playAgainButton.setInteractive()
    .on('pointerdown', () => ResetGame())
    .on('pointerover', () => playAgainButton.setStyle({ fill: '#B38C40' }))
    .on('pointerout', () => playAgainButton.setStyle({ fill: '#ffffff' }))
    .setOrigin(.5);
  playAgainButton.visible = false;
  timesUpText = this.add.text(game.config.width / 2, game.config.height / 2, "TIME'S UP", {
    fontFamily: 'Stencil',
    fontSize: '48px',
    color: '#ffffff',
    shadow: { offsetX: 2, offsetY: 2, color: '#000000', fill: true }
  });
  timesUpText.setOrigin(0.5);
  timesUpText.visible = false;
  bustedText = this.add.text(game.config.width / 2, game.config.height / 2, "BUSTED!", {
    fontFamily: 'Stencil',
    fontSize: '48px',
    color: '#ffffff',
    shadow: { offsetX: 2, offsetY: 2, color: '#000000', fill: true }
  });
  bustedText.setOrigin(0.5);
  bustedText.visible = false;
  music = this.sound.add('music');
  hey = this.sound.add('hey');
  timesUp = this.sound.add('timesUp');
  uhOh = this.sound.add('uhOh');
  busted = this.sound.add('busted');
  yay = this.sound.add('yay');
  tenSeconds = this.sound.add('tenSeconds');
};

function StartGame() {
  startButton.visible = false;
  slider.visible = true;
  startGame = true;
  music.play();
  music.setLoop(true);
};

function ResetGame() {
  playAgainButton.visible = false;
  wonText.visible = false;
  ogleValue = 0;
  dude.setFrame(32);
  slider.visible = true;
  ogleSlider.x = 250;
  timerValue = 60;
  startGame = true;
  isLooking = false;
  canCrush.visible = false;
  meterValue.scaleX = 1;
  girlSuspiciousTimer=0;
  girlTurn.visible = false;
  girlHead.visible = true;
  timesUpText.visible = false;
};

function TimesUp() {
  startGame = false;
  gameOver = true;
  slider.visible = false;
  timesUp.play();
  playAgainButton.visible = true;
  timesUpText.visible = true;
};

function Busted() {
  canCrush.visible = true;
  startGame = false;
  gameOver = true;
  slider.visible = false;
  timesUp.play();
  playAgainButton.visible = true;
  bustedText.visible = true;
  canCrush.anims.play('canCrushDude');
  busted.play();
};

function girlChilling() {
  girlHead.setFrame(Math.round(girlHeadPosition));
  if (++girlHeadGazeTimer > girlGazeLength && girlGazing) {
    girlHeadNextPosition = Phaser.Math.Between(1, 26);
    girlGazeLength = Phaser.Math.Between(50, 400);
    girlHeadGazeTimer = 0;
    girlGazing = false;
    girlScanning = true;
  }
  if (girlScanning && girlHeadPosition < girlHeadNextPosition)
    girlHeadPosition += .25;
  else if (girlScanning && girlHeadPosition > girlHeadNextPosition)
    girlHeadPosition -= .25;
  if (girlScanning && girlHeadPosition == girlHeadNextPosition) {
    girlHeadPosition = girlHeadNextPosition;
    girlGazing = true;
    girlScanning = false;
  }
};

function dudeWon() {
  startGame = false;
  gameOver = true;
  dude.anims.play('dudeWon');
  yay.play();
  slider.visible = false;
  wonText.visible = true;
  playAgainButton.visible = true;
};

function update() {
  if (!startGame)
    return;

  if (++timerInterval > 100) {
    timerInterval = 0;
    timerValue--;
    timerText.setText(timerValue + ' SEC');
  }
  if (timerValue == 0) {
    TimesUp();
  }
  var dudeFrame = Math.round((ogleSlider.x + ogleSlide.width / 2) / 17.8) + 7;
  dude.setFrame(dudeFrame);
  isLooking = dudeFrame < 12;
  girlSuspicious = isLooking && girlHeadPosition > 10;
  if (!girlSuspicious)
    girlChilling();
  else {
    girlGazing = false;
    girlScanning = false;

    if (++girlSuspiciousTimer > 10) {
      console.log(girlSuspicious);
      gameOver = true;
      girlHead.visible = false;
      girlTurn.visible = true;
      girlTurn.anims.play('girlTurning');
      hey.play();
      slider.visible = false;
      dude.anims.play('dudeBusted');
      uhOh.play();
      dude.on('animationcomplete', Busted);
    }
  }
  if (isLooking && meterValue.scaleX < 198) {
    ogleValue += (12 - dudeFrame) / 100;
    meterValue.scaleX += (Math.round(ogleValue) / 100);
  }
  if (isLooking && meterValue.scaleX >= 198)
    dudeWon();
}


