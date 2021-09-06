function carregar(){

    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    
    

   
    
    
    
  

   
    mensagem.innerHTML= `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora< 12){
        //Bom dia!
        img.src = 'imagensrelogio/manha.png' 
        document.body.style.background = '#C8EAFE'
        
        
    } else if (hora>=12 && hora <18){
        //Boa Tarde!
        img.src ='imagensrelogio/tarde.png'
        document.body.style.background = '#FF8000'
        
        
       
    } else{//Boa noite!
        img.src='imagensrelogio/noite.png'
        document.body.style.background = '#0B173B'
        
    }
}


function typeWriter(h2){
    const textoArray = h2.innerHTML.split('');
    h2.innerHTML='';
    textoArray.forEach((letra ,i) => {
        setTimeout(function(){
        h2.innerHTML += letra;
    },75 * i)

});
}


const frase = document.querySelector('h2');
typeWriter(frase);

