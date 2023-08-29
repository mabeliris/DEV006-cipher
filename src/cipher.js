

const cipher = {
  encode: function cifrado() {

    if (typeof document !== 'undefined') {
      const secretMessage = document.getElementById("secretMessage").value;
      const clave = document.getElementById("clave");
      const offset = Number(clave.value);
      const newM = document.getElementById("newM");
      let newMessage = "";

      if (offset === 0) {
        throw TypeError("Debe ingresar un numero de 1 a 100")

      }
      else {
        for (let i = 0; i < secretMessage.length; i++) {
          const uniCode = secretMessage.charCodeAt(i);

          if (uniCode >= 65 && uniCode <= 90) {

            newMessage += String.fromCharCode((((uniCode - 65) + offset) % 26) + 65);

          }
          
          if (uniCode >= 97 && uniCode <= 122) {
            newMessage += String.fromCharCode((((uniCode - 97) + offset) % 26) + 97 );

          } 

          newM.innerHTML = newMessage;
          
        }

        alert(newMessage);

      }
    }

  },

  decode: function descifrado() {

    if (typeof document !== 'undefined') {

      const secretMessage = document.getElementById("secretMessage").value;
      const clave = document.getElementById("clave");
      const offset = Number(clave.value);
      let MessageDecode = "";

      if (offset === 0) {
        throw TypeError("Debe ingresar un número de 1 a 100")
      }
      else {

        for (let i = 0; i < secretMessage.length; i++) {
          const uniCode = secretMessage.charCodeAt(i);
          if (uniCode >= 65 && uniCode <= 90) {

            MessageDecode += String.fromCharCode((((uniCode - 65) - offset + 26) % 26) + 65);

          }

          if(uniCode >= 97 && uniCode <= 122) {
            MessageDecode += String.fromCharCode((((uniCode - 97) - offset + 26) % 26) + 97);
          }
          newM.innerHTML = MessageDecode;

        }

        alert("Tienes un mensaje: " + MessageDecode);
      }

    }
  }
}

export default cipher;





