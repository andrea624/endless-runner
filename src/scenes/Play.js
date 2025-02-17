class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }

    create(){ 
        this.sky = this.add.tileSprite(0,0, 640, 480, 'sky').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        this.trees = this.add.tileSprite(0,0, 640, 480, 'trees').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }
    update(){
        this.trees.tilePositionX += 4
        this.sky.tilePositionX += 2
    }
}