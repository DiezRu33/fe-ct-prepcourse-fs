
function obj( obj, prop){
  return prop in obj
}

var resu = obj({ x: 1, y: 2}, 'x')
console.log(resu)