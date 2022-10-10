//Creates a new button and lets you customize it



function NewBtn(id, value){

    
    var btn= document.createElement("button");
    var number = parseInt(id)
    
    btn.innerHTML = value
    
    
    var body = document.getElementById("btns");
        body.appendChild(btn);
    
    btn.addEventListener('click',LaunchLatex(number))

   
}   
 
function OpenMenu(){

    var gtt = document.getElementById("ve-me")
    if(gtt.style.display=='none'){
        gtt.style.display='block'
    }
    else{
        gtt.style.display='none'
    }
    
    


}

function LaunchLatex(number){

    btn.addEventListener('click', applyLatex(number));
}