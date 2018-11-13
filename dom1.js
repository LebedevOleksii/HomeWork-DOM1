const WrapperDiv = document.querySelector('.Wrapper');
WrapperDiv.style.display = 'flex';
WrapperDiv.style.flexDirection = 'row';
WrapperDiv.style.flexWrap = 'wrap';
WrapperDiv.style.width = '250px';
WrapperDiv.style.height = '250px';



function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}



document.body.onload = getOneBlock;
  function getOneBlock(backgroundColor) {
    var div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '5px';
    // div.style.backgroundColor = color;
    div.innerHTML = [i];
    div.style.font = '13px Tahoma';
    WrapperDiv.appendChild(div);
  } 

function squareCreate(number){
    var color = generateColor()
    for(i=1;i<number; i++){
        getOneBlock(color);
    }
  }
squareCreate(25);
