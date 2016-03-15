function calculate(button){
  var display = document.getElementById('display');
  bomb_array.push(display.value) 
  display.value = eval(bomb_array.join(''))
  bomb_array = []

}

function operator(button){
  var display = document.getElementById('display');
  bomb_array.push(display.value) 
  display.value = button
  bomb_array.push(button) 
}

function number(button){
  var display = document.getElementById('display');
  if(display.value == ("+") || 
     display.value == ("-") || 
     display.value == ("/") || 
     display.value == ("*")
    )
  {
    display.value = button
  } else {
    display.value += button
  }
}


function cleare(){
  var display = document.getElementById('display');
  display.value = ""
  console.log(display.value)
  bomb_array = []
}


var bomb_array=[]