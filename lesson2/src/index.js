import './index.less';
// import avatar from './avatar.jpeg';
import avatar2 from './photo/avatar.jpeg';
var dom = document.getElementById('app');
var header = document.createElement('div');
header.classList.add('header');
header.innerHTML = 'Header';
dom.appendChild(header);

const arr = [1, 2, 3, 4];
arr.forEach(item => {
    let temp = document.createElement('div');
    temp.innerHTML = item;
    dom.appendChild(temp);
});

/* var img = new Image();
img.src = avatar;
dom.appendChild(img);
 */
var img = new Image();
img.src = avatar2;
dom.appendChild(img);


var timer = 0;
setInterval(() => {
    timer++;
    document.querySelector('.header').innerHTML = timer;
}, 1000);