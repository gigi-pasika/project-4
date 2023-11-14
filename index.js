let startBTN = document.querySelector('#start');

let objectBTN = document.querySelectorAll('#object');

let failOrWinBTN = document.querySelector('#failOrWin');

let rgbclBTN = document.querySelector('#rgbcl');

let easyModeBTN = document.querySelector('#easyMode');

let hardModeBTN = document.querySelector('#hardMode');
let animeBtn = document.querySelector('.anime');

function getRandomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);


    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}


startBTN.addEventListener('click', () => {
    
    failOrWinBTN.innerHTML = '....';
    
    failOrWinBTN.style.backgroundColor = 'yellow';

    rgbclBTN.innerHTML = getRandomRGB();


    let renSquare = Math.round(Math.random() * 5);


for( let i = 0; i < objectBTN.length; i++ ){
    objectBTN[i].style.opacity = '1.0';


   


    objectBTN[i].style.backgroundColor = getRandomRGB();
    
if(renSquare == i){


    objectBTN[i].style.backgroundColor = rgbclBTN.innerHTML;


}
objectBTN[i].addEventListener('click', () => {
    if(objectBTN[i].style.backgroundColor == rgbclBTN.innerHTML){
        failOrWinBTN.innerHTML = "winner";
        failOrWinBTN.style.backgroundColor ="green";
        // setTimeout(alert('winner'), 1);
    }
    
     if (objectBTN[i].style.backgroundColor != rgbclBTN.innerHTML){
        objectBTN[i].style.opacity = '0';
        
    }

})
}




})



hardModeBTN.addEventListener('click', () => {
    for( let i = 0; i < objectBTN.length; i++ ){
        objectBTN[i].style.opacity = '1.0';
    }
startBTN.addEventListener('click', () => {
    
    // failOrWinBTN.innerHTML = '....';
    
    // failOrWinBTN.style.backgroundColor = 'yellow';

    rgbclBTN.innerHTML = getRandomRGB();


    let renSquare = Math.round(Math.random() * 5);


for( let i = 0; i < objectBTN.length; i++ ){
    objectBTN[i].style.opacity = '1.0';


   


    objectBTN[i].style.backgroundColor = getRandomRGB();
    
if(renSquare == i){


    objectBTN[i].style.backgroundColor = rgbclBTN.innerHTML;


}
objectBTN[i].addEventListener('click', () => {
    if(objectBTN[i].style.backgroundColor == rgbclBTN.innerHTML){
        failOrWinBTN.innerHTML = "winner";
        failOrWinBTN.style.backgroundColor ="green";
        
    }
    
     if (objectBTN[i].style.backgroundColor != rgbclBTN.innerHTML){
        objectBTN[i].style.opacity = '0';
        
    }

})
}




})
})


// easy mode


easyModeBTN.addEventListener('click', () =>{
        objectBTN[3].style.opacity = '0';
        objectBTN[4].style.opacity = '0';
        objectBTN[5].style.opacity = '0';

    startBTN.addEventListener('click', () =>{
        objectBTN[3].style.opacity = '0';
        objectBTN[4].style.opacity = '0';
        objectBTN[5].style.opacity = '0';

        let easyRenNum = Math.round(Math.random() * 2);
        for( let j = 0; j < 2; j++ ){
            objectBTN[j].style.opacity = '1.0';
        
        
           
        
        
            objectBTN[j].style.backgroundColor = getRandomRGB();
            
        if(easyRenNum == j){
        
        
            objectBTN[j].style.backgroundColor = rgbclBTN.innerHTML;
        
        
        }
        objectBTN[j].addEventListener('click', () => {
            if(objectBTN[j].style.backgroundColor == rgbclBTN.innerHTML){
                failOrWinBTN.innerHTML = "winner";
                failOrWinBTN.style.backgroundColor ="green";
                
            }
            
             if (objectBTN[j].style.backgroundColor != rgbclBTN.innerHTML){
                objectBTN[j].style.opacity = '0';
                
            }
        
        
    })
}
})
})




easyModeBTN.addEventListener('click', () =>{
 animeBtn.style.animationName = 'move';
 
 
}


)


hardModeBTN.addEventListener('click', () =>{
    animeBtn.style.animationName = 'moveBack';
    
    
   })