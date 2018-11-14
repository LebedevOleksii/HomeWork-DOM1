const WrapperDiv = document.querySelector('.Wrapper');
const Button = document.querySelector('.button');


function generateColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")"
};

function getOneBlock(backgroundColor, n) {
  var div = document.createElement('div');
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.borderRadius = '5px';
  div.style.backgroundColor = backgroundColor;
  div.style.border = '1.2px solid rgb(0, 0, 0)';
  div.style.boxShadow = '10px 10px 8px -7px rgba(0,0,0,0.75), 5px 5px 19px -5px #ffffff inset'
  div.innerHTML = n;
  div.style.font = '13px Tahoma ';
  WrapperDiv.appendChild(div);
};

function recurs(n,Number){
  setTimeout(function() {
    var Number = document.getElementById('myNumber').value;
    if(n<=Number){
      var color = generateColor();
      getOneBlock(color, n)
      recurs(n+1);
    } 
  },175);
};

Button.addEventListener('click', function(){
  recurs(1);
});
  