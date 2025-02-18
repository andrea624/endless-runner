class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    preload(){
        this.load.image('duck', 'assets/Duck.png')
         this.load.image('sky', './assets/Sky.png')
        this.load.image('trees', './assets/Trees.png')
        this.load.image('stand', './assets/Stand.png')
        this.load.image('ground', './assets/Ground.png')
        this.load.image('lemon', './assets/Lemon.png')
        this.load.audio('collects', './assets/collects.m4a')
        //this.load.spritesheet('duck', './assets/Duck')
        
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'No Lemons ', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, '<- for instructions and -> for credits', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Space to start', menuConfig).setOrigin(0.5)
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
        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.scene.start('playScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyRight)){
            this.scene.start('creditScene')
        }
 
    }


}