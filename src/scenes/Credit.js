class Credit extends Phaser.Scene{
    constructor(){
        super("creditScene")
    }
    preload(){

    }
    create(){
        let creditConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            backgroundColor: '#693b1f',
            color: '#754c34',
            align: 'right',
            padding: {
               top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, ' Audio and PixelArt made by: Andrea Martinez', creditConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Apps used: = Voice Memos and Piskel', creditConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'To return to Menu press <- or Space to start', creditConfig).setOrigin(0.5)
        // defines key 
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        creditConfig.backgroundColor = '#00FF00'
        creditConfig.color = '#000'

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.scene.start('playScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyLeft)){
            this.scene.start('menuScene')
        }
 
    }


}