const btns= ["AC", "DEL", "CE", "%", "9", "8", "7", "-", "6", "5", "4", "/", "3", "2", "1", "*", ".", "0", "+", "="];
const display= document.getElementById('screen');
const digits= document.getElementById('btnn');

digits.innerHTML= btns.map(label=>`<button>${label}</button>`).join('');
digits.addEventListener('click', handleClick);
function handleClick(e) {
    if (!e.target.matches('button')) return;

    const scrn= e.target.innerText;      
    const remove= display.value.slice(-1);
    const signs= ["+", "-", "/", "*", "%"];

    if (scrn==="=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "error";
            console.log(error.message);
        }
    }else if (scrn === "DEL") {
        display.value = display.value.slice(0,-1);
    }else if (scrn === "AC" || scrn === "CE") {
        display.value = ("");
    }else{
        if(signs.includes(scrn) && signs.includes(remove)) return;
        display.value += scrn;
    }
    
}