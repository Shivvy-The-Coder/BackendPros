const lodash = require('lodash');
const name = ['sangam' , 'john', 'terry', 'alex', 'mia']
const capitalise = lodash.map(name,lodash.capitalize);
console.log(capitalise)