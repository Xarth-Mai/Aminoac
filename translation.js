function repeatInput() {
    const inputText = document.getElementById('inputText').value.trim();
    document.getElementById('translationOutput').innerText = inputText;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inputText').addEventListener('input', repeatInput);
});