const button = document.getElementById('dynamicButton');
const buttonText = document.getElementById('buttonText');
const styleType = document.getElementById('styleType');
const textColor = document.getElementById('textColor');
const buttonColor = document.getElementById('buttonColor');
const borderRadius = document.getElementById('borderRadius');
const copyCSS = document.getElementById('copyCSS');

// const hoverTextColor = document.getElementById('hoverTextColor');
// const hoverBgColor = document.getElementById('hoverBgColor');

// let hoverStyleInputs = document.getElementById('hoverStyleInputs');
// let normalStyleInputs = document.getElementById('normalStyleInputs');

styleType.addEventListener('change', switchStyles);
// textColor.addEventListener('input', switchStyles);
// buttonColor.addEventListener('input', switchStyles);

// styleType.addEventListener('change', updateButtonStyle);
textColor.addEventListener('input', updateButtonStyle);
buttonColor.addEventListener('input', updateButtonStyle);

// function showHoverInputs() {
//     const styleType = document.getElementById('styleType').value;

//     if (styleType === 'hover') {
//         hoverStyleInputs.style.display = 'block';
//         normalStyleInputs.style.display = 'none';

//     } else {
//         hoverStyleInputs.style.display = 'none';
//         normalStyleInputs.style.display = 'block';
//     }

// }

buttonText.addEventListener('input', () => {
    button.innerText = buttonText.value===""? "Click Me": buttonText.value;
});

borderRadius.addEventListener('input', () => {
    button.style.borderRadius = `${borderRadius.value}%`;
});

 
const styles = {
    background: "",
    color: "",
    hoverBackground: "",
    hoverColor: ""
 }
  

 function updateButtonStyle() {
    if(styleType.value === 'hover'){
        styles.hoverBackground = buttonColor.value;
        styles.hoverColor = textColor.value;
    }else{
        styles.background = buttonColor.value;
        styles.color = textColor.value;
    }

    button.style.backgroundColor = styles.background;
    button.style.color = styles.color;

    button.onmouseover = function() {
        button.style.backgroundColor = styles.hoverBackground;
        button.style.color = styles.hoverColor;
    };

    button.onmouseout = function() {
        button.style.backgroundColor = styles.background;
        button.style.color = styles.color;
    };

}


function switchStyles(){
    if(styleType.value === 'hover'){

        buttonColor.value = styles.hoverBackground;
        textColor.value = styles.hoverColor;
    }else{
        buttonColor.value = styles.background;
        textColor.value = styles.color;
    }
}

// function updateButtonStyle() {
//     const color = textColor.value;
//     const backgroundColor = buttonColor.value;
//     if (styleType.value === 'background') {
//         button.style.backgroundColor = backgroundColor;
//         button.style.color = color;
//     } else if (styleType.value === 'hover') {
//         button.onmouseover = () => {
//             button.style.backgroundColor = hoverBgColor.value;
//             button.style.color = hoverTextColor.value;
//         };
//         button.onmouseout = () => {
//             button.style.backgroundColor = backgroundColor;
//             button.style.color = color;
//         };
//     }

// }

copyCSS.addEventListener('click', () => {
    const css = `
        #dynamicButton {
            padding: 10px 20px;
            border-radius: ${borderRadius.value}%;
            color: ${styles.color};
            background-color: ${styles.background};
        }
        #dynamicButton:hover {
            background-color: ${styles.hoverBackground};
            color: ${styles.hoverColor};
        }
    `;
    navigator.clipboard.writeText(css).then(() => {
        alert('CSS copied to clipboard!');
    });
});