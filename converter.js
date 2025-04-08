    'use strict'

let btn_convert = document.querySelector('.app__btn-convert');
btn_convert.addEventListener('click', convert);

function convert() {
    let io = {
        input: document.querySelector('.app__input').value.replace(',', '.'),
        output: ''
    }

    let app = document.querySelector('.app');

    if (document.querySelector('.app-table')) document.querySelector('.app-table').remove();
    if (document.querySelector('.app__output')) document.querySelector('.app__output').remove();

    function split_by_coins(numero) {
        let real1, cent50, cent25, cent10, cent5, cent1, balanco;

        real1 = Math.floor(numero / 100);
        balanco = numero % 100;

        cent50 = Math.floor(balanco / 50);
        balanco = balanco % 50;

        cent25 = Math.floor(balanco / 25);
        balanco = balanco % 25;

        cent10 = Math.floor(balanco / 10);
        balanco = balanco % 10;

        cent5 = Math.floor(balanco / 5);
        balanco = balanco % 5;

        cent1 = balanco;

        return `<table class="app-table">
              <tr class="app-table__row">
                <td class="app-table__cell">Moeda</td>
                <td class="app-table__cell">Quantidade</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">1 real (R$ 0,50)</td>
                <td class="app-table__cell">${real1}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">50 Centavos (R$ 0,50)</td>
                <td class="app-table__cell">${cent50}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">25 Centavos (R$ 0,25)</td>
                <td class="app-table__cell">${cent25}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">10 Centavos (R$ 0,10)</td>
                <td class="app-table__cell">${cent10}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">5 Centavos (R$ 0,05)</td>
                <td class="app-table__cell">${cent5}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">1 Centavo (R$ 0,01)</td>
                <td class="app-table__cell">${cent1}</td>
              </tr>
            </table>`;
    }

    if (!(Number.isFinite(+io.input)) || io.input.indexOf('-') != -1) {
        io.output = `<p class="app__output">Valor inválido</p>`;
    } else {
        let centavos;
        if (io.input.indexOf('.') != -1 && io.input.indexOf('.') < io.input.length - 3) {
            io.output = `<p class="app__output">Valor inválido</p>`;
        } else {
            centavos = Math.round(+io.input * 100);
            io.output = `<p class="app__output">Total em centavos: ${centavos}</p>` + split_by_coins(centavos);
        }
    }

    app.insertAdjacentHTML('beforeend', io.output);
    }