const button = document.getElementById('dynamicButton');
const buttonText = document.getElementById('buttonText');
const borderRadius = document.getElementById('borderRadius');
const styleType = document.getElementById('styleType');
const textColor = document.getElementById('textColor');
const buttonColor = document.getElementById('buttonColor');
const copyCSS = document.getElementById('copyCSS');

const styles = {
    background: "",
    color: "",
    hoverBackground: "",
    hoverColor: "",
    focusBg:"",
    focusColor: ""
}

buttonText.addEventListener('input', () => {
    button.innerText = buttonText.value === "" ? "Click Me" : buttonText.value;
});

borderRadius.addEventListener('input', () => {
    button.style.borderRadius = `${borderRadius.value}%`;
});


styleType.addEventListener('change', switchStyles);
textColor.addEventListener('input', updateButtonStyle);
buttonColor.addEventListener('input', updateButtonStyle);

function updateButtonStyle() {
    if (styleType.value === 'hover') {
        styles.hoverColor = textColor.value;
        styles.hoverBackground = buttonColor.value;
    }else if(styleType.value === 'focus'){
        styles.focusColor = textColor.value;
        styles.focusBg = buttonColor.value;
    }else {
        styles.color = textColor.value;
        styles.background = buttonColor.value;
    }

    button.style.backgroundColor = styles.background;
    button.style.color = styles.color;

    button.onmouseover = function () {
        button.style.backgroundColor = styles.hoverBackground;
        button.style.color = styles.hoverColor;
    };

    // button.onmouseout = function () {
    //     button.style.backgroundColor = styles.background;
    //     button.style.color = styles.color;
    // };


    button.onfocus = function () {
        button.style.backgroundColor = styles.focusBg;
        button.style.color = styles.focusColor;
    };

    // button.onblur = function () {
    //     button.style.backgroundColor = styles.background;
    //     button.style.color = styles.color;
    // };


    const resetStyles = function () {
        button.style.backgroundColor = styles.background;
        button.style.color = styles.color;
    };

    button.onmouseout = resetStyles;
    button.onblur = resetStyles;

}

function switchStyles() {
    if (styleType.value === 'hover') {
        textColor.value = styles.hoverColor;
        buttonColor.value = styles.hoverBackground;
    } else if(styleType.value === 'focus'){
        textColor.value = styles.focusColor;
        buttonColor.value = styles.focusBg;
    }else {
        textColor.value = styles.color;
        buttonColor.value = styles.background;
    }
}



copyCSS.addEventListener('click', () => {
    const css = `
        #dynamicButton {
            padding: 10px 20px;
            border-radius: ${borderRadius.value}%;
            color: ${styles.color};
            background-color: ${styles.background};
        }
        #dynamicButton:hover {
            color: ${styles.hoverColor};
            background-color: ${styles.hoverBackground};
        }

        #dynamicButton:focus {
            color: ${styles.focusColor};
            background-color: ${styles.focusBg};
        }
    `;
    navigator.clipboard.writeText(css).then(() => {
        alert('CSS copied to clipboard!');
    });
});