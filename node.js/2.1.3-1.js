var sayNode = function(){
  console.log('Node');
};
var es = 'ES';
var oldobject = {
  sayJS: function(){
    console.log('JS');
  },
  sayNode: sayNode,
};
oldobject[es+6] = 'Fantastic';
oldobject.sayNode();
oldobject.sayJS();
console.log(oldobject.ES6);

