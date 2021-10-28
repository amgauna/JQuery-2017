/*Função JQUERY para validar extensão do arquivo*/
essa função valida qualquer extensão basta declara esta extensão em um array global ou array interno na propria função 

exemplo
array_global_musicas  var a = new Array(".mp3", ".wma", ".png"); 
array_global_imagens  var b = new Array(".gif", ".jpg", ".png"); 
            
             function comprova_extensao(arquivo) { 
   extensoes_permitidas = se for musica use a variavel "a" se for imagens use a variavel "b"; 
   erro = ""; 
   if (!arquivo) { 
      /*Caso não tenha selecionado o arquivo aparece este erro*/ 
          erro = "Não foi selecionado nenhum arquivo";
        return false; 
   }else{ 
      /*pega a extensão do nome do arquivo*/ 
      extensao = (arquivo.substring(arquivo.lastIndexOf("."))).toLowerCase(); 
      /*alert (extensao); */
      /*verifica se a extensão está dentro do array */
      permitida = false; 
      for (var i = 0; i < extensoes_permitidas.length; i++) { 
         if (extensoes_permitidas[i] == extensao) { 
         permitida = true; 
/*caso queira fazer if e retorna o valor true basta adicionar um return true*/
         break; 
         } 
      } 
      if (!permitida) {       
         erro = "Arquivo Não é Valido. \nSó se podem subir arquivos com extensões: " + extensoes_permitidas.join();        


          }else{ 
          /*submeter formulário caso seja nescessário*/ 
        
         return 1; 
          } 
   } 
  /*aqui da erro caso o formulário não seja submetido*/
   alert (erro); 
} 
        /*FIM   Função para validar extensão do arquivo*/   
