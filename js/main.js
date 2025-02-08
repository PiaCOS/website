function generateFrames(elem, padding) {
    let paddedLength = length - padding*2;
    let repeated = elem.repeat(Math.ceil(length / elem.length) + 1)
    let frames = []

    for (let i = 0; i < elem.length; i++) {
        let lineRepeat = repeated.slice(i, i+paddedLength);
        let spaces = " ".repeat(padding);
        frames.push(spaces + lineRepeat + spaces + "\n");
    }
    return frames
}

const length = 29;

let index = 0;
let elements = [
    generateFrames("NWnwu:>>=-", 4),
    generateFrames("|o+=~-", 9),
    generateFrames(":>~-. ", 12),
    generateFrames("@NGDx+*>=~~-.", 0),
]
let texts = [
    0, 0, 
    1, 1, 1, 
    2, 2, 2, 
    1, 1, 
    0, 0, 
    2, 2,
    0, 0,
    1,
    2, 2,
];

function updateText() {
    let frame = "";
    for (let i = 0; i < texts.length; i++) {
        element = elements[texts[i]];
        frame = frame + element[(index+i) % element.length]
    }
    document.getElementById("towerBox").innerText = frame;
    index = index + 1;
}

setInterval(updateText, 75);