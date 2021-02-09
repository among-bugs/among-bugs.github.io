"use strict";

document.querySelector('.container-fluid').classList.add('csgo-in-game');

const container = document.querySelector('.container-fluid.csgo-in-game');
const rows = container.querySelectorAll('.row');
const column = `<div class="col"></div>`;
const thisCol = [];

setIDValueToRows(rows);

const inGameInfo = document.getElementById('row2');

addColumnsInnerHTML();

const cols = inGameInfo.querySelectorAll('.col');

setColumnsParametersInnerHTML();

inGameTeamsINFO();

function setIDValueToRows(thisRow) {
    thisRow.forEach((item, i) => {
        item.id = `row${++i}`;
    });
}

function addColumnsInnerHTML() {
    for (let indCol = 0; indCol < 3; indCol++ ) {
        inGameInfo.innerHTML += column;
    }
}

function setColumnsParametersInnerHTML() {
    
    cols.forEach((item, i) => {
        thisCol[i] = item;
        thisCol[i].style.backgroundColor = 'transparent';
    });
    
    thisCol[0].classList.add('col-auto');
    thisCol[1].classList.add('col-6-auto');
    thisCol[2].classList.add('col-auto');

    thisCol.forEach((col, index) => {
        col.id = `colId${index}`;
    });
}

function inGameTeamsINFO() {
    const position = ['left', '' ,'right'];
    for (let ind = 0; ind < thisCol.length; ind++) {
        if (thisCol[ind].classList == 'col col-auto') {

            const cols = document.getElementById(`colId${ind}`);
            cols.style.float = `${position[ind]}`;

            thisCol[ind].innerHTML = '<ul class="list-group"></ul>';
            const ul = thisCol[ind].querySelector('ul');
            ul.style.backgroundColor = 'green';
            ul.style.width = '420px';
            ul.id = 'ULid' + ind;
            ul.style.float =`${position[ind]}`;

            const li = '<li class="list-group-item"></li>';

            for (let indPlayer = 0; indPlayer < 5; indPlayer++) {
                ul.innerHTML += li;
            }
            const listGroupItem = document.querySelectorAll('.list-group-item');

           //querySelector('ul').querySelectorAll('li').textContent = 'asd';//style.float = 'right';
           
            listGroupItem.forEach((item, i) => {
                item.style.width = '420px';
                item.style.height = '80px';
                item.textContent = teamPlayers[i];
            });
            // leftLies.forEach((item, i) => {
            //     item.style.textAlign = 'left';
            // });
                // rightLies.forEach(item => {
                //     item.style.textAlign = 'right';
                // });
        }
    } 
    const textAlignStyle = ['left', 'right'];
    const lies = [document.getElementById('ULid0').querySelectorAll('li'),
                            document.getElementById('ULid2').querySelectorAll('li')];
    lies.forEach((item, i) => {
        lies[i].forEach( item => {
            item.style.textAlign = textAlignStyle[i];
        });
    });
}




