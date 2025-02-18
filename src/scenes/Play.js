class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }

    create(){ 
        this.sky = this.add.tileSprite(0,0, 640, 480, 'sky').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        this.add.image(0,0 ,'ground').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)
        this.spawnLemon()
        // this.lemon = this.add.image(410,450 ,'lemon').setOrigin(0,0).setDisplaySize(50, 40)
        this.add.image(510,410 ,'stand').setOrigin(0,0).setDisplaySize(150, 130)
        this.trees = this.add.tileSprite(0,0, 640, 580, 'trees').setOrigin(0,0).setDisplaySize(game.config.width, game.config.height)

        
        this.duck = this.physics.add.image(10,350 ,'duck').setOrigin(0,0).setDisplaySize(150, 130)
        this.duck.body.gravity.y = 600

        this.physics.add.collider(this.duck, this.ground)//collision for duck and ground
        

        //this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.duck.setCollideWorldBounds(true)
        

        
    
    }
    spawnLemon() {
        const lemonX = Phaser.Math.Between(200, game.config.width - 100)
        const lemonY = 450 
        this.lemon = this.add.image(lemonX, lemonY, 'lemon').setOrigin(0,0).setDisplaySize(50, 40)
    }
    


    update(){
        this.trees.tilePositionX += 10
        this.sky.tilePositionX += 2
        this.lemon.x -= 6
        //console.log('Y:', this.duck.y)
        //console.log('is down:', this.duck.body.touching.down)

        if (Phaser.Input.Keyboard.JustDown(this.keySpace)) {
            //console.log('jumping')
            this.duck.setVelocityY(-300)// value for jump height
        }
        //this.spawnLemon()
        if (this.lemon.x < 0) {
            this.lemon.destroy() // removes lemon
            this.spawnLemon()
        }

    

        
        
    }
}