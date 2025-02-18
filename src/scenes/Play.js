class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }

    create(){ 
        this.sky = this.add.tileSprite(0,0, 640, 480, 'sky').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        this.add.image(0,0 ,'ground').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)

        this.add.image(510,410 ,'stand').setOrigin(0,0).setDisplaySize(150, 130)

        this.trees = this.add.tileSprite(0,0, 640, 580, 'trees').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }
    update(){
        this.trees.tilePositionX += 4
        this.sky.tilePositionX += 2
        
    }
}