// Seleção de Elementos

const generatePasswordButton = document.querySelector("#open-generate-password")
const generatedPasswordElemnt = document.querySelector("#generated-password")

// Funções 
const getLetterLowerCase = () => {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase, generatePassword, getNumber, getSymbol) => {
    let password = ""
    
    const passwordLegth = 10

    const generators = [
        getLetterLowerCase, 
        getLetterUpperCase, 
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLegth; i = i + 4) {
        generators.forEach(() => {
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();

           password += randomValue;
        })
    }

    password = password.slice(0, passwordLegth);

    generatedPasswordElemnt.style.display = "block"
    generatedPasswordElemnt.querySelector("h4").innerText = password;
}

// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase, 
        getLetterUpperCase, 
        getNumber,
        getSymbol
    );
});