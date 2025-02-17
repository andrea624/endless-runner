/*
Andrea Martinez
Game Name: Escape the fire
Hours spent: 2
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config)
//reserves key
let keySpace
// set ui size 
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3