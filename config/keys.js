// Where we determine if we are in the production or development environment 

if( process.env.NODE_ENV === 'production') {
// this will determine that our production environment 
module.exports = require('./prod');
} else {
// this will determine our development environment 
module.exports = require('./dev');
}