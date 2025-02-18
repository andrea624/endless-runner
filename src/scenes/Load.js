class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        // loading bar
        let loadingBar = this.add.graphics()
        this.load.on('progress', (value) => {
            loadingBar.clear()  
            loadingBar.fillStyle(0xFFFFFF, 1)
            loadingBar.fillRect(0, centerY, game.config.width * value, 5)
        });
        this.load.on('complete', () => {
            loadingBar.destroy()
        });

        this.load.path = './assets/';
        // loads image assets
        this.load.image('duck', 'Duck.png')
        this.load.image('sky', 'Sky.png')
        this.load.image('trees', 'Trees.png')
        this.load.image('stand', 'Stand.png')
        this.load.image('ground', 'Ground.png')
        this.load.image('lemon', 'Lemon.png')

        // load audio assets
        this.load.audio('collects', ['collects.m4a'])
        
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported')
        } else {
            console.log('Local storage not supported')
        }

  
        this.scene.start('menuScene')
    }
}
