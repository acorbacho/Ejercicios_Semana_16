function main() {
  //Variables.
  var nombre = document.getElementById('nombre')
  var apellidos = document.getElementById('apellidos')
  var nif = document.getElementById('nif')
  var enviar = document.getElementById('envio')
  var aficiones = document.getElementsByClassName('check')
  var edad = document.getElementsByClassName('radio')
  var labels = document.getElementsByTagName('label')
  var comentarios = document.getElementById('comentarios')
  var boton_resetear = document.getElementById('resetear')
  var comprobador_nif = document.getElementById('comprobador_nif')
  var valor

  //Eventos.
  enviar.addEventListener('click', () => {
    comprobarNumeros(nombre, apellidos, nif)
  })

  for (let n = 0; n < aficiones.length; n++) {
    aficiones[n].addEventListener('click', () => {
      maxAficiones()
    })
  }

  for (let n = 0; n < edad.length; n++) {
    edad[n].addEventListener('click', () => {
      typeAficiones(n)
    })
  }

  comentarios.addEventListener('input', () => {
    comprobarCaracteres()
  })

  boton_resetear.addEventListener('click', () => {
    resetarFormulario()
  })

  nif.addEventListener('input', () => {
    comprobarNIF()
  })

  //Funciones.
  function comprobarNumeros(nombre, apellidos, nif) {
    if (isNaN(parseInt(nombre.value)) == false || isNaN(parseInt(apellidos.value)) == false) {
      salida('Nombre o apellidos no válidos')
    } else if (nif.value.length != 9) {
      salida('DNI no válido')
    }
  }

  function maxAficiones() {
    valor = 0
    for (let i = 0; i < aficiones.length; i++) {
      if (aficiones[i].checked) {
        valor++
      }
      if (valor > 2) {
        aficiones[i].checked = false
        salida('Máximo 2 aficiones')
        break
      }
    }
  }

  function typeAficiones(edad) {
    switch (edad) {
      case 0: {
        labels[9].innerHTML = '<input type="checkbox" class="check" checked>Gaming'
        labels[10].innerHTML = '<input type="checkbox" class="check">Fiesta'
        labels[11].innerHTML = '<input type="checkbox" class="check">Programación'
        labels[12].innerHTML = '<input type="checkbox" class="check">Ajedrez'
      }
        break
      case 1: {
        labels[9].innerHTML = '<input type="checkbox" class="check">Correr'
        labels[10].innerHTML = '<input type="checkbox" class="check" checked>Calistenia'
        labels[11].innerHTML = '<input type="checkbox" class="check">Chupitos'
        labels[12].innerHTML = '<input type="checkbox" class="check">Comer papaya'
      }
        break
      case 2: {
        labels[9].innerHTML = '<input type="checkbox" class="check">Cine'
        labels[10].innerHTML = '<input type="checkbox" class="check" checked>Deportes'
        labels[11].innerHTML = '<input type="checkbox" class="check">Lectura'
        labels[12].innerHTML = '<input type="checkbox" class="check">Senderismo'
      }
        break
      default:
        break
    }
  }

  function comprobarCaracteres() {
    if (comentarios.value.length >= 250) {
      comentarios.value = comentarios.value.substring(0, 249)
      salida('Límite de caracteres')
    }
  }

  function resetarFormulario() {
    location.reload()
  }

  function comprobarNIF() {
    if (nif.value.length === 9) {
      comprobador_nif.innerHTML = 'Formato correcto ✔'
    } else {
      comprobador_nif.innerHTML = 'Formato incorrecto ✘'
    }
  }

}
main()