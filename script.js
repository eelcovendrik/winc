var button = document.getElementById('mybutton');
button.addEventListener('click',function(){alert('Alert!')});

body = document.body

var backgroundButton = document.getElementById('backgroundbutton');
// backgroundButton.addEventListener('click',function(){body.classList.add('red-background')})

backgroundButton.addEventListener('click',function(){body.classList.toggle('red-background')})