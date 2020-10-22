// API 

const APIkey = "9eec655c6fd34430a775dd9fd71dd384"
let currentData = '';

function getApi(CP) {
  apiData = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${APIkey}&postal_code=${CP}`)
  .then((response) => response.json())
  .then((data) => {
    currentData = data.data
    console.log(currentData)
  })
}
getApi(7600)


// ¿Por que no anda? currentData es un array de objetos.
function B(){
  currentData.forEach(element => {
    console.log(element)
  });
}
B()

// Por que esto no se ejecuta??
function A(){
  for(i=0;i<currentData.length;i++){
    console.log(currentData[i])
  }
}
A()

// Estp tampoco anda, empiezo a pensar que tengo un problema con currentData
console.log(currentData[0])