import moment from 'moment';
import './index.less';

var dom = document.getElementById('app');
var header = document.createElement('div');
header.classList.add('header');
header.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
dom.appendChild(header);