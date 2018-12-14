import Rover from './Rover'

export default class Mission {
  constructor(input) {
    this.grid = []
    this.rovers = []
    this.parseInput(input)
  }

  parseInput(input) {
    const inputArray = input.split('\n\n');
    this.grid = inputArray.shift().split(' ').map(coor => parseInt(coor))
    this.rovers = this.buildRovers(inputArray)
  }

  buildRovers(roversData) {
    let rovers = []
    for (let i = 0; i = roversData.length / 2; i++) {
      const roverData = roversData.splice(0, 2)
      const position = roverData[0].split(' ')
      new Rover(position, roverData[1], this.grid)
      rovers.push(new Rover(position, roverData[1], this.grid))
    }
    return rovers;
  }

  executeMission() {
    return this.rovers.map((rover) => rover.executeInstructions()).join('\n\n');
  } 
}