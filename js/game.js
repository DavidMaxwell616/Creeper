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
  this.anims.create({
    key: 'dudeChillin',
    frames: this.anims.generateFrameNumbers('dude', 
    {
      start: 32,
      end: 32
    }),
    frameRate: 16,
    repeat:-1,
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
    repeat:-1,
    yoyo: true
  })
  this.anims.create({
    key: 'dudeLookinAway',
    frames: this.anims.generateFrameNumbers('dude', 
    {
      start: 0,
      end: 5
    }),
    frameRate: 16,
    repeat:-1,
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
    repeat:-1,
    yoyo: true
  })
  girlHead = this.add.sprite(288, 111, 'girl head').setScale(2);
  this.anims.create({
    key: 'girlChillin',
    frames: this.anims.generateFrameNumbers('girl head', {}),
    frameRate: 10,
    repeat: -1,
    yoyo: true
  })
  dude.anims.play('dudeChillin');
  girlHead.anims.play('girlChillin');
}


function update(){
 
}


