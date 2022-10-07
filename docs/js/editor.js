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
}

// Tab skip to next braces
window.addEventListener('keydown', function(event) {
    const key = event.key;
    if(key === 'Tab') {
        event.preventDefault();
        nextPosition('{');
      }
  });

function nextPosition(location) {
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

function copyToClipboard(){
    editor.select()
    document.execCommand("copy");
}