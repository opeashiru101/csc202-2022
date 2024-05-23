//console.log("Starting ES6 and above")
import logger from './tools.js'; 
import log,{appName as am ,dummyFunction as df} from './tools.js'

logger("Starting ES6 and above with modularity");

console.log("Welcome! The application name is " + am+ ".\n There is a function that returns " + df());

log('Welcome! The application name is "${am}".There is a function that returns "${df()}" .`')