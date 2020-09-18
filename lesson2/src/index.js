import './index.less';
import avatar from './avatar.jpeg';
import avatar2 from './photo/avatar.jpeg';
var dom = document.getElementById('app');
var header = document.createElement('div');
header.classList.add('header')
header.append('Header');
dom.append(header);

var img= new Image();
img.src = avatar;
dom.append(img);

var img= new Image();
img.src = avatar2;
dom.append(img);