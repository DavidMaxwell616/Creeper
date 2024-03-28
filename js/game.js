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
  spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  dude = this.add.sprite(592, 249, 'dude').setScale(2);
  this.anims.create({
    key: 'dudeChillin',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 32,
        end: 32
      }),
    frameRate: 16,
    repeat: -1,
    yoyo: true
  })

  this.anims.create({
    key: 'dudeLookin',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 32,
        end: 14
      }),
    frameRate: 16,
  })
  this.anims.create({
    key: 'dudeLookinAway',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 0,
        end: 5
      }),
    frameRate: 16,
    repeat: -1,
    yoyo: true
  })
  this.anims.create({
    key: 'dudeCaught',
    frames: this.anims.generateFrameNumbers('dude',
      {
        start: 6,
        end: 12
      }),
    frameRate: 16,
    repeat: -1,
    yoyo: true
  });

  girlHead = this.add.sprite(288, 111, 'girl head').setScale(2);
  this.anims.create({
    key: 'girlChillin',
    frames: this.anims.generateFrameNumbers('girl head', {}),
    frameRate: 10,
    repeat: 0
  });

  dude.anims.play('dudeChillin');
  //girlHead.anims.play('girlChillin');

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
  const slider = this.add.container(game.config.width/2,game.config.height-50);
  ogleSlide = this.add.image(0,0, 'ogleslide');
  ogleSlider = this.add.image(ogleSlide.width/2,0, 'ogleslider');
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


}

function StartGame() {
  startButton.visible = false;
  startGame = true;
}

function DudeLooks() {
  isLooking = true;
  isLookingAway = false;
  dude.anims.play('dudeLookin');
}
function DudeLooksAway() {
  isLooking = false;
  isLookingAway = true;
  dude.anims.play('dudeLookinAway');
}
function update() {
  if (!startGame)
    return;

  if (++timerInterval > 100) {
    timerInterval = 0;
    timerValue--;
    timerText.setText(timerValue + ' SEC');
  }
  if (timerValue == 0) {
    startGame = false;
    gameOver = true;
  }
  if (spaceBar.isDown && !isLooking) {
    DudeLooks();
  }
  if (spaceBar.isUp) {
    DudeLooksAway();
  }
}


