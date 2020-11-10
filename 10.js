function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    let nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);