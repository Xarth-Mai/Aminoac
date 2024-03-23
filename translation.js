String.prototype.reverse = function () { return this.split("").reverse().join("") }

function translateText(text) {
    const pnyn = PinyinHelper.convertToPinyinString(text, "", PinyinFormat.WITHOUT_TONE)
    const textline = pnyn.split("\n").map(function (line, id) {
        return line.reverse().split(/(?<=[aeiou])(?![aeioun]|ng)/).map(function (item) {
            const regex = [
                [/hc/i, "ch"],
                [/hs/i, "sh"],
                [/hz/i, "zh"],
                [/gn/i, "ng"],
            ]
            return regex.reduce(function (total, token) {
                return total.replace(...token)
            }, item)
        }).join(' ')
    })
    return textline.join("<br/>")
}

function translate() {
    const inputText = document.getElementById('inputText').value.trim();
    const translatedText = translateText(inputText);
    document.getElementById('translationOutput').innerHTML = translatedText;
}