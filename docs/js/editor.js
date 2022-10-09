const editor = document.querySelector("#latex_editor");


const applyLatex = (id, remplaceText=true) => {
    let first = latexCodes[id]; 
    let last = latexCodes[id+1];
    editor.focus();

    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;

    const editorText = editor.value;
    const selectedText = editorText.substring(selectionStart, selectionEnd) || '';
    
    if(remplaceText){
        editor.setRangeText(`${first}${selectedText}${last}`, selectionStart, selectionEnd, 'start');
        editor.selectionStart += first.length + selectedText.length;
    }else{
        editor.setRangeText(`${first}${last}`, selectionStart, selectionEnd, 'end');
    }

    renderEquation(editor.value);
}

// Tab skip to next braces
var keys;

document.addEventListener("keydown", function(event) {
    // keycode shift = 16
    // keycode tab = 9
    
    keys = (keys || []);
    keys[event.keyCode]=true;
    
    if (keys[9] && keys[16]){
        event.preventDefault();
        previousPosition();
    }
    else{
        if(event.key === 'Tab') {
            event.preventDefault();
            nextPosition();
        }
    }
      
} , false);

document.addEventListener("keyup", function (event) {
    keys[event.keyCode]=false;
    stop();
}, false);

function nextPosition(location='{') {
    let currentCaretPosition = editor.selectionStart;
    editor.focus();
    
    let nextWordPosition = editor.value.indexOf(location, currentCaretPosition) + 1;

    if (nextWordPosition < currentCaretPosition) {
        const end = editor.value.length;
        editor.setSelectionRange(end, end);
    } else {
        editor.setSelectionRange(nextWordPosition, nextWordPosition);
    }
}

function previousPosition(location='}') {
    let currentCaretPosition = editor.selectionStart;
    editor.focus();
    
    let previousWordPosition = editor.value.lastIndexOf(location, currentCaretPosition-1);
    if (previousWordPosition < 0) {
        editor.setSelectionRange(0, 0);
    } else {
        editor.setSelectionRange(previousWordPosition, previousWordPosition);
    }
}

function copyToClipboard(){
    editor.select()
    document.execCommand("copy");
}

function deleteLatex(){
    editor.value = "";
    renderEquation(equation);
    editor.focus()
}