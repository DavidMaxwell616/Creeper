function preload() {
this.load.path = '../assets/';
this.load.image('bkgd', 'images/background.jpg');
this.load.image('meter', 'images/ogle meter.png');
this.load.image('timer', 'images/timer.png');
this.load.image('ogleslide', 'images/ogle slide.png');
this.load.image('ogleslider', 'images/ogle slider.png');

this.load.spritesheet('dude', 'spritesheets/dude.png', { frameWidth: 168, frameHeight: 238 });
this.load.spritesheet('girl head', 'spritesheets/girl head.png', { frameWidth: 64, frameHeight:87 });
}
