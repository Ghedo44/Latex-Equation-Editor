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