console.log('Loaded!');
//change text to main-text
document.getElementById('main').innerHTML="New Value"; 

//move the image
var img=document.getElementById('raghav');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'pix';
}
img.onclick = function()
{
    var interval = setInterval(moveRight , 50);
};