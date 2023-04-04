

const cipher = {  
  encode:function cifrado () {   

    const secretMessage = document.getElementById("secretMessage").value;  
    const clave= document.getElementById("clave");
    const offset=Number(clave.value);  
    const newM=document.getElementById("newM");      
    let newMessage= "";    
    
    if (offset===0) {
      throw TypeError("Debe ingresar un numero de 1 a 100")

    }
    else{
      for (let i = 0; i < secretMessage.length; i++) {
        const uniCode = secretMessage.charCodeAt(i);

        if (uniCode >= 65 && uniCode <= 90) {

          newMessage += String.fromCharCode((((uniCode - 65) + offset) % 26) + 65);

        }
        newM.innerHTML = newMessage;
      }
      console.log(newMessage); 
      alert(newMessage);
            
    }    
    
  },

  decode:function descifrado () {
    
    const secretMessage = document.getElementById("secretMessage").value;
    const clave = document.getElementById("clave");
    const offset = Number(clave.value);
    let MessageDecode = "";

    if (offset ===0) {
      throw TypeError("Debe ingresar un número de 1 a 100")
    }
    else{

      for (let i = 0; i < secretMessage.length; i++) {
        const uniCode = secretMessage.charCodeAt(i);
        if (uniCode >= 65 && uniCode <= 90) {

         MessageDecode += String.fromCharCode((((uniCode - 65) - offset + 26) % 26) + 65);
         
        }

      }
      console.log(MessageDecode);
      alert("Tienes un mensaje: "+MessageDecode);
    }  
    
  }
}

export default cipher;








