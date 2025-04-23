function apareceprompt(){
  var area =  prompt('Escolha a Opção 1 - Se Voce deseja seguir para a area Front-end ou 2 - Se Voce Deseja Seguir Para Back-End ')
console.log(area)

if(area == '1'){ 
   var front = prompt('Escolha a opção 1 - Se Voce quer aprender React ou 2 - se voce quer aprender Vue ')
   console.log(front)

} else if(area == '2'){
    var back = prompt('Escolha a opção 1 - Se Voce quer aprender C# ou 2 - se voce quer aprender Java ?')
    console.log(back)
} else{
    alert('Voce nao respodneu uma opção valida')
}

var listatech = []

var full = prompt('Voce prefere: 1 - seguir se especializando na area escolhida ou 2 - seguir se desenvolvendo para se tornar Fullstack ?')

var aprender = prompt('Tem mais alguma tecnologia que gostaria de aprender ? 1- SIM ou 2- NÃO')
while(aprender == '1'){ // ENQUANTO FOR SIM VAI REPETIR
   var novatech = prompt('Me conte qual tecnologia voce quer aprender:')
    listatech.push(novatech)
   aprender = prompt(`Que legal que quer estudar ${novatech}!! Agora sua lista de aprendizado esta assim: ${listatech}. Existe mais alguma tech que deseja aprender ? 1-SIM 2-NÃO`)


}
    alert('Bons estudos para voce entao!')

}