class Instructions extends Phaser.Scene{
    constructor(){
        super("InstructionsScene")
    }
    preload(){


    }
    create(){
        let InstructionsConfig = {
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Instructions: Use Space to jump ', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Objective: Avoid the lemonade & collect grapes', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'To return to Menu press <- or Space to start', InstructionsConfig).setOrigin(0.5)
        // defines key 
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        InstructionsConfig.backgroundColor = '#00FF00'
        InstructionsConfig.color = '#000'

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