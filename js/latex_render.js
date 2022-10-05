
document.getElementById("latex_editor").addEventListener("input", () => 
{
    if (editor.value)
    {
        document.getElementById("latex_render").innerHTML = katex.renderToString(editor.value);
    }
    else
    {
        document.getElementById("latex_render").innerHTML = katex.renderToString("\\Sigma");
    }
});
