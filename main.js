var mouse_event= "";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color= "red";
var line_width= 5;

canvas.addEventListener("mousedown", my_mouse_down)
function my_mouse_down(){
    mouse_event="mousedown"
}

canvas.addEventListener("mouseleave", my_mouse_leave)
function my_mouse_leave(){
    mouse_event="mouseleave"
}

canvas.addEventListener("mouseup", my_mouse_up)
function my_mouse_up(){
    mouse_event="mouseup"
}

canvas.addEventListener("mousemove", my_mouse_move)
function my_mouse_move(e){
  curren_position_of_mouse_x= e.clientX-canvas.offsetLeft;
  curren_position_of_mouse_y= e.clientY-canvas.offsetTop;
  console.log(curren_position_of_mouse_x)
  console.log(curren_position_of_mouse_y)
  if(mouse_event=="mousedown"){
    ctx.beginPath()
    ctx.lineWidth=line_width;
    ctx.strokeStyle=color;
    ctx.arc(curren_position_of_mouse_x,curren_position_of_mouse_y,30,0,2*Math.PI)
    
    ctx.stroke()
  } 
  last_position_of_x=curren_position_of_mouse_x;
  last_position_of_y=curren_position_of_mouse_y;

}

