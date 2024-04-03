function preload() {
this.load.path = '../assets/';
this.load.image('bkgd', 'images/background.jpg');
this.load.image('meter', 'images/ogle meter.png');
this.load.image('meterValue', 'images/ogle meter value.png');
this.load.image('timer', 'images/timer.png');
this.load.image('ogleslide', 'images/ogle slide.png');
this.load.image('ogleslider', 'images/ogle slider.png');

this.load.spritesheet('dude', 'spritesheets/dude.png', { frameWidth: 168, frameHeight: 238 });
this.load.spritesheet('girl head', 'spritesheets/girl head.png', { frameWidth: 64, frameHeight:87 });
this.load.spritesheet('girlTurns', 'spritesheets/girl turning.png', { frameWidth: 138, frameHeight:208 });
this.load.spritesheet('canCrush', 'spritesheets/can crush.png', { frameWidth: 182, frameHeight:317 });

this.load.audio('music', 'sounds/music.mp3');
this.load.audio('hey', 'sounds/hey.mp3');
this.load.audio('timesUp', 'sounds/out of time.mp3');
this.load.audio('uhOh', 'sounds/uh oh.mp3');
this.load.audio('busted', 'sounds/busted.mp3');
this.load.audio('yay', 'sounds/yay.mp3');
this.load.audio('tenSeconds', 'sounds/10 second warning.mp3');
}
