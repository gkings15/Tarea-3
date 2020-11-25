let varPropiedades ={
    lista: null,
    llamadaApi: async function llamarAsyncFetch(){
      if (this.lista == null){
        try {
          let response = await fetch('https://escalab-6b3e3.firebaseio.com/javascript.json',
            { 
              method: 'GET' 
            } 
          )

          const parsedResponse = await response.json()
          this.lista = parsedResponse

        } catch (error) {
          console.warn(error)
        }
      }else{
        //Significa que ya se almaceno informacion en this.lista
      }
    },
    verDatoList: function(posicion){
      let existe = false
      let arrayTraspaso;
      const self = this
      self.lista.forEach(function(valor, indice, completo){
        if (indice == posicion){
          self.arrayTraspaso = valor
          self.existe = true
          return
        }
      })
      if (self.existe == true){
        console.log(self.arrayTraspaso)
      }else{
        console.log("No existe ese elemento en la lista")
      }
    },
    vaciarLista: function(){
      const self = this
      var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
          self.lista = null
          resolve('Lista eliminada!')
        }, 3000)
      })
    
      promise.then(function(response){
        console.log(response)
      })
      console.log("Se eliminará la lista de forma asíncrona")
    },
    verPropiedad: function(posicion, propiedad){
      let existe = false
      let arrayTraspaso;
      const self = this
      self.lista.forEach(function(valor, indice, completo){
        if (indice == posicion){
          self.arrayTraspaso = valor
          self.existe = true
          return
        }
      })
      if (self.existe == true){
        let valorPropiedad = self.arrayTraspaso[propiedad];
        return valorPropiedad
      }else{
        console.log("No existe ese elemento en la lista")
      }
    },
    // Sincrona
    // llamadaApi: async function llamarFetch(){
    //   let self = this;
    //   let promise = new Promise(function (resolve,reject){
    //     fetch(
    //       'https://escalab-6b3e3.firebaseio.com/javascript.json',
    //       { method: 'GET' },
    //     ).then(function(respuesta){
    //       return respuesta.json()
    //     }).then(function(respuestaParseada){
    //       resolve(respuestaParseada)
    //     }).catch(function(error){
    //       reject(error)
    //     });
    //   })
    //   const response = await promise()
    //   promise.then(function(response){
    //     self.lista = response
    //     console.log("Respuesta")
    //     console.log(response)
    //   })
    //   promise.catch(function(error){
    //     console.log(error)
    //   })
    // },
}

