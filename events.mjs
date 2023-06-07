import { EventEmitter } from 'node:events'; 

// Event Emitter is a class which is used to create and handle custom events in Node.js

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Pls turn off the motor!');
  setTimeout(()=>{console.log("bhut time ho gya");},3000);
});

myEmitter.emit('Waterfull');