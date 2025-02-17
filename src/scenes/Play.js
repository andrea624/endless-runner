class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }

    create(){ 
        //this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0,0)
        this.sky = this.add.tileSprite(0,0, 640, 480, 'sky').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)

        //this.add.image(0,0, 'sky').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)

        this.trees = this.add.tileSprite(0,0, 640, 480, 'trees').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        // this.add.image(0,0, 'trees').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)


        //this.background.setScrollFactor(0)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
 

    }
    update(){
        this.trees.tilePositionX += 4
        this.sky.tilePositionX += 2
    }
}