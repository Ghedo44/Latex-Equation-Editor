let equation = "\\sum_0^\\infty";
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
