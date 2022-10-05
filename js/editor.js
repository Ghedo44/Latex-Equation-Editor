const editor = document.querySelector("#latex_editor");

const applyCache = () => {
    startSave = (startSave + 1) % maxSaved;
    savedCodes[startSave] = {
        value: editor.value,
        session,
        previous: false,
        canGoNext: false
    }
    previous.disabled = false;
    previous.classList.remove('button-disabled-previous');
    next.disabled = true;
    next.classList.add('button-disabled-next');
    if(startSave == maxSaved-1){
        session++;
    }
}

const applyCode = (first, last, remplaceText) => {
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;

    const editorText = editor.value;
    const selectedText = editorText.substring(selectionStart, selectionEnd) || '';
    
    if(remplaceText){
        editor.setRangeText(`${first}${selectedText}${last}`, selectionStart, selectionEnd, 'start');
        editor.selectionStart += first.length + selectedText.length;
    }else{ // remplace le text selectioné
        editor.setRangeText(`${first}${last}`, selectionStart, selectionEnd, 'end');
    }
    displayLatex(editor.value, latexResult);
}
editor.addEventListener('input', event => {
    applyCache();
});

const applyLatex2 = (first, second, remplaceText=true) => {
    editor.focus();
    applyCode(first, second, remplaceText);
    applyCache();
}
const applyLatex = (id, remplaceText=true) => {
    applyLatex2(latexCodes[id], latexCodes[id+1], remplaceText);
}