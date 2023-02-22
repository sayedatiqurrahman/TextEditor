let toggled = true;
const text = document.getElementById('text');

// text bold
document.getElementById('bold').addEventListener('click', function () {

    if (toggled) {
        toggled = false;
        text.style.fontWeight = 'bold';
        return;
    } if (!toggled) {
        toggled = true;
        text.style.fontWeight = 'normal';
    }

})

// text Italic
document.getElementById('italic').addEventListener('click', function () {
    if (toggled) {
        toggled = false;
        text.style.fontStyle = 'italic'
        return;
    } else {
        toggled = true;
        text.style.fontStyle = 'normal'
    }
})
// text Underline
document.getElementById('underline').addEventListener('click', function () {
    if (toggled) {
        toggled = false;
        text.style.textDecoration = 'underline';
        return
    } else {
        toggled = true;
        text.style.textDecoration = 'none';
    }
})

document.getElementById('left').addEventListener('click', function () {
    toggled = false;
    text.style.textAlign = 'left'
})
document.getElementById('center').addEventListener('click', function () {
    toggled = false;
    text.style.textAlign = 'center'
})
document.getElementById('right').addEventListener('click', function () {
    toggled = false;
    text.style.textAlign = 'right'
})
document.getElementById('justify').addEventListener('click', function () {
    toggled = false;
    text.style.textAlign = 'justify'
})

const colorInp = document.getElementById('colorinp')
colorInp.addEventListener('change', function () {
    const colorCode = colorInp.value;
    text.style.color = colorCode;
})

// font Size
let count = 16
document.getElementById('fontI').addEventListener('click', function () {
    count += 1;
    text.style.fontSize = `${count}px`;
})


document.getElementById('fontD').addEventListener('click', function () {
    count -= 1;
    text.style.fontSize = `${count}px`;
})
