const button = document.getElementById('dynamicButton');
const buttonText = document.getElementById('buttonText');
const styleType = document.getElementById('styleType');
const textColor = document.getElementById('textColor');
const buttonColor = document.getElementById('buttonColor');
const borderRadius = document.getElementById('borderRadius');
const copyCSS = document.getElementById('copyCSS');
const hoverTextColor = document.getElementById('hoverTextColor');
const hoverBgColor = document.getElementById('hoverBgColor');

let hoverStyleInputs = document.getElementById('hoverStyleInputs');
let normalStyleInputs = document.getElementById('normalStyleInputs');

styleType.addEventListener('change', updateButtonStyle);
textColor.addEventListener('input', updateButtonStyle);
buttonColor.addEventListener('input', updateButtonStyle);

function showHoverInputs() {
    var styleType = document.getElementById('styleType').value;

    if (styleType === 'hover') {
        hoverStyleInputs.style.display = 'block';
        normalStyleInputs.style.display = 'none';

    } else {
        hoverStyleInputs.style.display = 'none';
        normalStyleInputs.style.display = 'block';
    }

}

buttonText.addEventListener('input', () => {
    button.innerText = buttonText.value===""? "Click Me": buttonText.value;
});

borderRadius.addEventListener('input', () => {
    button.style.borderRadius = `${borderRadius.value}%`;
});


function updateButtonStyle() {
    const color = textColor.value;
    const backgroundColor = buttonColor.value;
    if (styleType.value === 'background') {
        button.style.backgroundColor = backgroundColor;
        button.style.color = color;
    } else if (styleType.value === 'hover') {
        button.onmouseover = () => {
            button.style.backgroundColor = hoverBgColor.value;
            button.style.color = hoverTextColor.value;
        };
        button.onmouseout = () => {
            button.style.backgroundColor = '';
            button.style.color = '';
        };
    }

}

copyCSS.addEventListener('click', () => {
    const css = `
        #dynamicButton {
            padding: 10px 20px;
            border-radius: ${borderRadius.value}%;
            color: ${textColor.value};
            background-color: ${buttonColor.value};
            ${styleType.value === 'background' ? `
            '';
            ` : `
        }
        #dynamicButton:hover {
            background-color: ${hoverBgColor.value};
            color: ${hoverTextColor.value};
            `}
        }
    `;
    navigator.clipboard.writeText(css).then(() => {
        alert('CSS copied to clipboard!');
    });
});