const editor = document.querySelector("#latex_editor");
const applyLatex2 = (first, second, remplaceText=true) => {
    editor.focus();
    applyCode(first, second, remplaceText);
    applyCache();
}
const applyLatex = (id, remplaceText=true) => {
    applyLatex2(latexCodes[id], latexCodes[id+1], remplaceText);
}