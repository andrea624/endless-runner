class Duck extends Phaser.Gameobjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)

        scene.add.existing(this)// adds sprite to the scene
    }
}