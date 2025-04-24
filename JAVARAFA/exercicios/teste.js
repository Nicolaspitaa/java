function promp(){
  var nome =  prompt('Digite Seu nome')
    var inciar = prompt(`Olá ${nome}, Vamo seguir em frente ? 
        1-SIM 2-NÃO`)
    if(inciar == '1'){
        
        prompt(`${nome}, Esta Estudando no momento?
            1-SIM 2-NÃO`)
        prompt(`Seu curso é da area de tecnologia?:
            1-SIM 2-NÃO`)

    } else{
        alert('Bons Estudos então!')
    }

}