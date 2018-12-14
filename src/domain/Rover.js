export default class Rover {
  constructor(position, instructions, grid) {
    this.position = {
      x: parseInt(position[0]),
      y: parseInt(position[1])
    }
    this.direction = position[2];
    this.instructions = instructions;
    this.grid = grid;
  }

  handleRover(commands) {
    let commandsArray = commands.split('');
    let turnCommands = ['R', 'L'];

    for (let command of commandsArray) {
      if (turnCommands.includes(command)) {
        this.turnRover(command)
      } else {
        this.moveRover()
      }
    }
  }

  turnRover(command) {
    const allDirections = ['W', 'N', 'E', 'S'];
    let currentDirection = allDirections.indexOf(this.direction);
   
    if (currentDirection === 3 && command === 'R') {
      this.direction = 'W'
      return
    } else if (currentDirection === 0 && command === 'L') {
      this.direction = 'S'
      return
    } else if (command === 'R') {
      currentDirection++;
      this.direction = allDirections[currentDirection];
    } else {
      currentDirection--;
      this.direction = allDirections[currentDirection];
    }
  }

  moveRover() {
    switch(this.direction) {
      case 'W':
      this.position.x--
      break;
      case 'N':
      this.position.y++
      break;
      case 'E':
      this.position.x++
      break;
      case 'S':
      this.position.y--
      break;
      default: return
    }
  }

  executeInstructions() {
    this.handleRover(this.instructions)
    return `${this.position.x} ${this.position.y} ${this.direction}`
  }
}