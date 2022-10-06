let equation = "\\sum_{n=0}^\\infty\\left(\\frac{1}{2}\\right)^{n}";
const render = document.getElementById("latex_render")

window.onload = () => {
    katex.render(equation, render, {
        displayMode: true
    });
}

document.getElementById("latex_editor").addEventListener("input", () => 
{
    if (editor.value)
    {
        katex.render(editor.value, render, {
            displayMode: true
        });
    }
    else
    {
        katex.render(equation, render, {
            displayMode: true
        });
    }
});
