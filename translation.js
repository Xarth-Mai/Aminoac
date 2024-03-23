let isComposing = false;

// 监听输入框的 input 事件
document.getElementById('inputText').addEventListener('input', function(event) {
    // 如果处于合成状态，暂停监听
    if (isComposing) return;

    // 执行翻译函数
    translate(event.target.value);
});

// 监听输入法合成开始事件
document.getElementById('inputText').addEventListener('compositionstart', function() {
    isComposing = true;
});

// 监听输入法合成完成事件
document.getElementById('inputText').addEventListener('compositionend', function(event) {
    // 恢复监听
    isComposing = false;
    // 执行翻译函数
    translate(event.target.value);
});

// 翻译函数
function translate(text) {
    // 翻译逻辑
    const translatedText = text; // 这里替换为你的翻译逻辑
    // 更新翻译结果
    document.getElementById('translationOutput').innerText = translatedText;
}