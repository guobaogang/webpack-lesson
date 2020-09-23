import moment from 'mnt';
import '../index.less';

var dom = document.getElementById('app');
var header = document.createElement('div');
header.classList.add('header');
header.innerHTML = moment().format('YYYY-MM-DD');
dom.appendChild(header);

/* function getComponent () {
    return import('moment').then(({ default: moment }) => {
        var element = document.createElement('div')
        element.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        return element
    })
}

getComponent().then(element => {
    document.body.appendChild(element)
}) */