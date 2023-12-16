const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/electric.png'
    },
    frames: {
      max: 2,
      hold: 30
    },
    animate: true,
    name: 'Electric Car',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Draggle: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/hummer.png'
    },
    frames: {
      max: 2,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Gas Hummer',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
