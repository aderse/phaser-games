// Create a create() function here:
function create() {
    this.add.text(100, 100, "Andrew's First Game");
}
const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#a0a0dd",
    // Add in the scene information in the config here:
    scene: {
        create
    }
}

const game = new Phaser.Game(config)