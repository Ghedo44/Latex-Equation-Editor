//Creates a new button and lets you customize it



function NewBtn(id){

    
    var btn= document.createElement("button");
    var number = parseInt(id);
    
    btn.innerHTML = document.getElementById(id).value
    
    btn.setAttribute("id", id);
    btn.style.width="50px"
    
    
    var body = document.getElementById("testing");
        body.appendChild(btn);
    
    
    console.log(number, id );
    

   

    
        

   
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


document.getElementById('testing').addEventListener('click', function(e){

    if(e.target && e.target.nodeName == "BUTTON"){

        var getId = e.target.id
        var IntID = parseInt(getId)
        console.log("Button", e.target.id.replace("tt"), "clicked")
        console.log(getId)
        applyLatex(IntID)
        
    }

})