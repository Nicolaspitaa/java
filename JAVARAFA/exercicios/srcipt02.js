function adicionarTarefa() {
    
          
        // recebe o valor do input do usuario
          var inputtarefa = document.getElementById('inputtarefa')
          var tarefa = inputtarefa.value.trim()
          

          //se o valor do input for vazio ent mostre uma msg de erro

          if (tarefa == ''){
            var mensagemerro = 'Digite uma tarefa para adiciona-lá a sua lista!'
            document.getElementById("mensagem").textContent = mensagemerro;
            
          } else {
           
            var mensagemsucesso = "Tarefa adicionada com sucesso!";
            document.getElementById("mensagem").textContent = mensagemsucesso;
            var lista = document.getElementById('lista')
            var novatarefa = document.createElement('li')
            novatarefa.textContent = tarefa
            lista.appendChild(novatarefa)
          }

          

          //limpa o input do ususario
          inputtarefa.value = ''


          

          
  }