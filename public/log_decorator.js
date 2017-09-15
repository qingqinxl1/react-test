const log = function(target, name, descriptor){
  var oldValue = descriptor.value;

  descriptor.value = function(){
    console.log(`调用"${name}"方法，参数为：`, arguments);
    return oldValue.apply(null, arguments);
  }
  return descriptor;
}

export default log;
