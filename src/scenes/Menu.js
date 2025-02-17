class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    preload(){
        this.load.image('sky', './assets/Sky.png')
        this.load.image('trees', './assets/Trees.png')
        //this.load.image('bushes', './assets/Bushes.png')
        //this.load.image('background', './assets/background.png')
        //this.load.image('background', './assets/background2.png')

        //console.log('Preloading background:', this.textures.exists('background'));

        

    }
    create(){
        let menuConfig = {
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Buying Grapes ', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, '<- for instructions', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, '-> to start', menuConfig).setOrigin(0.5)
        // defines key 
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLeft)){
            this.scene.start('InstructionsScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyRight)){
            this.scene.start('playScene')
        }
 
    }


}