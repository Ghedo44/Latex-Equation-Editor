//Creates a new button and lets you customize it



function NewBtn(){

    
    var btn= document.createElement("button");
    var id = "id"+Math.random().toString(16).slice(2);
    btn.setAttribute("id",id);
   
    btn.innerHTML= document.getElementById("usr").value
    if (btn.innerHTML == "")
    {
        alert("Nothing inserted");
        document.getElementById(id).remove();
    }
    var body = document.getElementById("btns");
        body.appendChild(btn);
    

   document.getElementById("usr").value="";

   
}   
 
