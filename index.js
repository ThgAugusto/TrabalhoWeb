// identifique o erro e corrija o código a baixo

function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}
//-----------------------------------------------------------------------------------------------------

// complete o códigoFaça com que a variável arra tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {

    let arr = [1, 2, 3, 6, 7, 9]
    arr.push(0, 4, 5, 8)
    arr.sort((a, b) => a - b)
    return arr
}

//-----------------------------------------------------------------------------------------------------

/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo

function meusDados() {
    let pessoa = {
        nome: 'Jhon Doe',
        idade: '30',
        cidade: 'New York'
    };

    pessoa = {
        ...pessoa,
        nome: 'Ednaldo Pereira',
        cidade: 'Pindamonhangaba'
    };

    delete pessoa.idade;

    return pessoa;
}
//-------------------------------------------------------------------------------------------------------

// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short...

function manipulaArray() {
    let animais = ['cacohrro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];

    return {
        ordemAlfabetica: animais.sort(),
        primeiro: animais[0],
        ultimo: animais[animais.length - 1],
        tamanhoDaLista: animais.length
    }
}
