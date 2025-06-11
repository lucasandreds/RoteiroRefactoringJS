var formatarMoeda = require("./util.js");

module.exports = function gerarFaturaStr (fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
}

/*
function gerarFaturaHTML(fatura, pecas) {
    let faturaStr = `<html>\n`;
    faturaStr += `<p> Fatura ${fatura.cliente} </p>\n`;
    faturaStr += `<ul>\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `<li>  ${getPeca(pecas,apre).nome}: ${formatarMoeda(calcularTotalApresentacao(pecas,apre))} (${apre.audiencia} assentos) </li>\n`;
    }
    faturaStr += `</ul>\n`;
    faturaStr += `<p> Valor total: ${formatarMoeda(calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n`;
    faturaStr += `<p> Créditos acumulados: ${calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n`;
    faturaStr += `</html>\n`;
    return faturaStr;  
}*/