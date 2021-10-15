// const rl = require('./interface')

// rl.question('Você está gostando de POO?', resposta => {
//     console.log(`Sua resposta foi ${resposta}`)
//     rl.close();
// })

const options = require('./data')
// const MachineOptions = require('./controller/class/machine')
const User = require('./controller/class/user')

// let sorteio = new MachineOptions({ opt: options }).sort()

let jogar = new User({ opt: options }).game()

console.log(jogar)