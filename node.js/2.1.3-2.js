const sayNode = function(){
  console.log('Node');
};
const es = 'ES';
const newobject = {
  sayJS(){
    console.log('JS');
  },
  sayNode,
  [es+6]:'Fantastic',
};
newobject.sayNode();
newobject.sayJS();
console.log(newobject.ES6);
