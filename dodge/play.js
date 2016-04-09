// State: dont die because of missles.Play

'use strict'
var DogeDodge = {};
DogeDodge.Play = function () {};
DogeDodge.Play.prototype = {
  init: function () {
    console.log("%~~ Booting the Game ~~~\n Made By Greyson S");
  },


  preload: function () {
   this.load.image('background','assets/sprites-backgrounds/background2.png');
   this.load.spritesheet('ship','assets/sprites-backgrounds/ship2.png',65,65,4);
   this.load.spritesheet('missle','assets/sprites-backgrounds/missle2.png',32,32,4);
 
  },


 create: function() {
   game.physics.startSystem(Phaser.Physics.ARCADE);

   //background
   this.background = this.add.tileSprite(0,0,320,568,"background");
   this.background.autoScroll(0,-50);
   this.background.scale.set(1);
   //ship
   
   this.ship = this.add.sprite(160,510,'ship');
   this.ship.smoothed = false;
   this.ship.scale.set(1.5);
   this.ship.anchor.set(0.5,0.5);
   this.ship.animations.add('fire');
   this.ship.animations.play('fire',2,true);
   this.cursors = game.input.keyboard.createCursorKeys();
   game.physics.arcade.enable(this.ship);
   this.ship.body.collideWorldBounds = true;
   //missle

   this.missle = this.add.sprite(160,0,'missle')
   this.missle.smoothed = false;
   this.missle.scale.set(3);
   this.missle.anchor.set(0.5,0.5);
   this.missle.animations.add('missle_fire');
   this.missle.animations.play('missle_fire',2,true)

   //missle1

   this.missle1 = this.add.sprite(160,318,'missle')
   this.missle1.smoothed = false;
   this.missle1.scale.set(3);
   this.missle1.anchor.set(0.5,0.5);
   this.missle1.animations.add('missle_fire');
   this.missle1.animations.play('missle_fire',2,true)
  



 },



 update: function() {
   if (this.cursors.left.isDown) {
     this.ship.x -= 10;
   }
   if (this.cursors.right.isDown) {
     this.ship.x += 10;
   }
   this.missle.y += 10;
   this.missle1.y += 10;
   
   if (this.missle.y > 568) {
     this.missle.y = 0; 
     this.missle.x = game.rnd.integerInRange(2,318)
     this.missle.y = game.rnd.integerInRange(0,200)

  }    
 
   if (this.missle1.y > 568) {
     this.missle1.y = 0;
     this.missle1.x = game.rnd.integerInRange(2,318)
     this.missle1.y = game.rnd.integerInRange(0,200)
     

  }  

 
 }
};



