/*
Name: Andrea Martinez
Game Name: No Lemons 
Time Spent: 12 hours
Creative Tilt Justifications:
1: I wouldn't say I did something technically interesting but I somthing I'm proud of is the parallax scrolling
in the past assignment I was attempting to implement parallax scrolling but couldn't figure out
 how to but for this assignment after alot of googling and experimenting I was able to implement parallax scrolling for
the sky and the trees. Although I am struggling with physics and collison the duck doesn't seem to be colliding with the
 lemon meaning the game can't end.
2: I am pround of the pixel art its purposely supposed to not look very good because I was attempting to make 
a game where the duck has to avoid the lemons because he wants grapes because I made this artwork with The Duck Song by Bryant Oden in mind.

*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [ Load, Menu, Play, Instructions, Credit ]
}
let game = new Phaser.Game(config)
//reserves key
let keySpace, keyLeft, keyRight
let centerX = game.config.width/2
let centerY = game.config.height/2

// set ui size 
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3