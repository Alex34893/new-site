let offset =0;
const SliderLine = document.querySelector('.slider_line');
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    SliderLine.getElementsByClassName.left = offset + 'px';
})