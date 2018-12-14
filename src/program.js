import Mission from './domain/Mission';
import fs from 'fs';
const input = fs.readFileSync('src/data/input.txt', 'utf8')

console.log('Input raw mission instructions from input.txt:')
console.log(' ')
console.log(input)
const missionOne = new Mission(input).executeMission()
console.log('.')
console.log('.')
console.log('.')
console.log(' ')
console.log('Writing rover locations to output.txt:')
fs.writeFileSync('src/data/output.txt', missionOne)
console.log(' ')
console.log(missionOne)
console.log('.')
console.log('.')
console.log('.')


