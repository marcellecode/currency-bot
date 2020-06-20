const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem-vindo ao bot conversor');

async function robo() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const moedaFinal = readlineSync.question('Moeda que sera convertida: ') || 'real';
    const moedaBase = readlineSync.question('Moeda base: ') || 'dolar';
   
    const url = `https://www.google.com/search?source=hp&ei=XGXtXrjcAai35OUP4qG1gA8&q=${moedaBase}+para+${moedaFinal}&oreadlineSync.question('Informe a moeda desejada: ') || 'real'{moedaBase}+para+${moedaFinal}&greadlineSync.question('Informe a moeda desejada: ' || 'real')o&sclient=psy-ab&ved=0ahUKEwi4-v3-nY_qAhWoG7kGHeJQDfAQ4dUDCAc&uact=5`;
    await page.goto(url);

    const resultado = await page.evaluate(() => {
       return  document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
    await browser.close();
}

robo();