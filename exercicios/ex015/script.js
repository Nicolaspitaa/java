function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    var res = document.querySelector('div#res') 
     if (fano.ariaValueMax.length ==0 || fano.ariaValueMax > ano )
        window.alert('Verifique os dados e tente novamente')
}