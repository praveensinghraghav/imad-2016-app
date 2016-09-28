console.log('Loaded!');
//change text to main-text
var element= document.getElementById('main');
element.innerHTML= 'New Value';

//move the image
var img=document.getElementById('raghav');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'pix';
}
img.onclick = function()
{
    var interval = setInterval(moveRight , 100);
};