let equation = "\\sum_{n=0}^\\infty\\left(\\frac{1}{2}\\right)^{n}";
const render = document.getElementById("latex_render");


function renderEquation(equation){
    katex.render(equation, render, {
        displayMode: true
    });
}

document.getElementById("latex_editor").addEventListener("input", () => 
{
    if (editor.value)
    {
        
    }
    else
    {
        renderEquation(equation);
    }
});
