const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i))
}

const boundaries = []
const offset = {
  x: -735,
  y: -650
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const battleZones = []

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

const blueyImg = new Image()
blueyImg.src = './img/kid/bluehair.png'

const pinkyImg = new Image()
pinkyImg.src = './img/kid/pinkhair.png'

const brownyImg = new Image()
brownyImg.src = './img/kid/brownHair.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['Hey Jason! Welcome to Bali', 'Hey mister, how are you?','Im great! What brings you here?', 'I came here for vacation but I want to learn how and why should I make my trip sustainable.', 'No worries! Talk around with the locals, they will teach you more about everything you need to learn.', 'Thank you! Is there anything I should take note of?', 'Yes, beware of the NATURE-DESTROYING vehicles, they have high carbon footprints. If you come across them, Defeat them!']
        })
      )
    }
    // 1078 === blueHair
    else if (symbol === 1078) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: blueyImg,
          frames: {
            max: 3,
            hold: 60
          },
          scale: 3,
          dialogue: ['Hey, there my name is Jason!', 'Oh, hi Jason, Im Bluey, what can I do for you?', ' I would like to know what can I do to travel sustainably here in Bali?','Well, many places here in Bali still use a lot of single-use plastics. Its quite concerning', 'Oh yes, they can have a devastating impact on the environment. The beautiful beaches and marine life we cherish will be threatened by plastic pollution.', 'We can all take steps to reduce our use of single-use plastics. One of the simplest things you can do is carry a reusable water bottle. You can fill it up at your accommodation or in restaurants that offer water refills','That sounds like a practical solution. Ive also noticed plastic straws everywhere. Can I do something about that?', "Absolutely, Jason. You can ask for your drinks without plastic straws or carry your own reusable straw. Many establishments are starting to offer paper or bamboo alternatives, which are much more environmentally friendly.", "That's a good idea. I'll make a point to say NO to plastic straws from now on. It's great to see that there are alternatives.", "It's a step in the right direction, Jason. The more we refuse single-use plastics and support businesses that are eco-conscious, the closer we get to a cleaner and more sustainable Bali.", "Thank you for sharing your knowledge! Hopefully Ill see you around!"]
        })
      )
    }
    // 1089 === pinkHair
    else if (symbol === 1089) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: pinkyImg,
          frames: {
            max: 3,
            hold: 60
          },
          scale: 3,
          dialogue: ['Pinky, Im really interested in experiencing Balis local culture. How can I make the most of it during my trip?', 'Jason, thats wonderful to hear! Embracing and supporting our local culture is a fantastic way to make the most of your visit. First, try to engage with the Balinese traditions. Attend local ceremonies or rituals; youll find them rich in history and spirituality.', ' That sounds fascinating. Id love to be a part of those experiences. Are there specific events or festivals I should look out for?','Absolutely! Keep an eye out for festivals like Galungan and Nyepi, which are celebrated with vibrant processions and beautiful decorations. Its a great opportunity to connect with the local community and understand our customs.', 'Ill make sure to check the calendar for those festivals. How can I support local artisans and businesses?', 'When shopping for souvenirs, try to buy from local artisans and markets. Youll find unique handcrafted items and help the local economy. Also, dining at small, family-owned warungs (local eateries) is a great way to enjoy authentic Balinese cuisine and support local businesses.',"Thank you so much pinky! Ill take them all into consideration", "Great! See you around Jason"]
        })
      )
    }
    // 1090 === brownHair
    else if (symbol === 1090) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: brownyImg,
          frames: {
            max: 3,
            hold: 60
          },
          scale: 3,
          dialogue: ['Sukarno, Im interested in exploring Bali while being conscious of the environment. Are there any eco-friendly transportation options available here?','Absolutely, Jason! Bali has embraced the idea of eco-vehicles to reduce carbon emissions and preserve our beautiful island. One popular choice is electric scooters, which are not only fun to ride but also produce much lesser emissions.', 'Thats great to hear. Electric scooters sound like a fun and eco-friendly way to get around. Are they readily available for tourists?','Yes, you can easily rent electric scooters in many tourist areas. Theyre affordable and a convenient mode of transportation for short trips, allowing you to explore the island with a smaller carbon footprint.', "That's fantastic. I also noticed bicycles around. Are they a sustainable option for tourists?", " Yes, bicycles are another excellent choice. They're a healthy and eco-friendly way to explore Bali at your own pace. Many rental shops offer a variety of bicycles, including traditional ones and electric bikes.", " It's wonderful to see these initiatives in place. I'll definitely consider electric scooters or bicycles for my travels in Bali. It's a small step towards preserving this paradise.","That's a thoughtful choice, Jason. By opting for eco-vehicles, you not only reduce your environmental impact but also contribute to a cleaner and more sustainable Bali."]
        })
      )
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['Hello, there! Are you enjoying your time in Bali, Jason?', 'Oh, yes! Bali is stunning, and Ive had the best time exploring the island. I cant get enough of its beauty', ' Im glad to hear that, Jason. Bali is a paradise indeed. But, have you ever thought about the impact your travel choices might have on the environment and the local community here?','Well, Ive heard about sustainable travel, but Im not quite sure what it means', 'Sustainable travel is all about being a responsible tourist. Its about making choices that help protect the environment and support the well-being of the local community. Let me tell you why booking a sustainable trip in Bali is so important.', 'But how can I make a difference as a tourist?.','There are a few simple things you can do. First, choose accommodations that are committed to sustainability. Look for eco-friendly resorts or guesthouses that minimize their impact on the environment', "Oh what impacts are there?", "A study by the International Tourism Partnership found that the hotel industry produces 16 million tons of food waste each year.", "Oh yes I shall use Eco-Voyage's Accomodation Finder to help me see which hotels are sustainable", "Great! See you around Jason"]
        })
      )
    }

    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [
  background,
  ...boundaries,
  foreground,
  ...battleZones,
  ...characters
]
const renderables = [
  background,
  ...boundaries,
  ...battleZones,
  ...characters,
  player,
  foreground
]

const battle = {
  initiated: false
}

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (battle.initiated) return

  // activate a battle
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId)

        audio.Map.stop()
        audio.initBattle.play()
        audio.battle.play()

        battle.initiated = true
        gsap.to('#overlappingDiv', {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                // activate a new animation loop
                initBattle()
                animateBattle()
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                  duration: 0.4
                })
              }
            })
          }
        })
        break
      }
    }
  }

  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
// animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})
