
function calculateImc() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    let isValid = validateImc(weight, height);

    if (isValid == true) {
        const resultImc = (weight / (height * height)).toFixed(2);
        const classification = classifyImc(resultImc);
        document.getElementById('result').innerHTML = 
        'O resultado IMC é ' + resultImc + ' e a classificação é ' + classification;
    }

}

function validateImc(weight, height) {
    if (!weight || !height ) {
        alert('Preencha os campos obrigatórios');
        return false;
    }

    return true;
}

function classifyImc(imc) {
    if (imc < 16 ) {
        return 'Magreza grave';
    }
    else if (imc < 17) {
        return 'Magreza moderada';
    }
    else if (imc > 17 && imc <= 18.5) {
        return 'Magreza leve';
    }
    else if (imc > 18.5 && imc < 25) {
        return 'Saudável';
    }    
    else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    }
    else if (imc >=30 && imc < 35) {
        return 'Obesidade Grau I';
    }
    else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau II(severa)';
    }
    else {
        return 'Obesidade Grau III(mórbida)';
    }
}