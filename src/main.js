/*
Andrea Martinez
Game Name: Escape the fire
Hours spent: 5
Creative Tilt Justifications:

*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Instructions ]
}
let game = new Phaser.Game(config)
//reserves key
let keySpace, keyLeft, keyRight
// set ui size 
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3