
function invercao(string){
    var saida = "";
    for(var i=string.length-1;i>=0;i--){
        saida += string[i];
        
    }
    
    document.querySelector(".resultado").innerHTML = saida
}

let back = prompt("Digite uma palavra: ")
    if(back === null  ){
        document.querySelector(".resultado").innerHTML = "Você não digitou nada" 
    }

    setTimeout(
        function(){
             document.querySelector(".hallo").innerHTML = "Atualize a pagina para digitar novamente"
        },2000)

invercao(back);

