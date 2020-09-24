import {
    square
} from './math';

var dom = document.getElementById('app');
var header = document.createElement('div');
header.classList.add('header');
header.innerHTML = square(3);
dom.appendChild(header);