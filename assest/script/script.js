const canvasPlod = document.getElementById("canvas_plod")
const ctx = canvasPlod.getContext('2d')
// let a= document.getElementById("xValue1")
// let xn= document.getElementById("xValue2")
// let b= document.getElementById("xValue3")
// let x1= document.getElementById("xValue4")
// let c= document.getElementById("xValue5")

const canvasPlodWidth = canvasPlod.clientWidth

const canvasPlodHeight = canvasPlod.clientHeight
console.log(canvasPlodWidth,canvasPlodHeight);
// // ctx.fillRect(x,y,xSize,ySize)

// ctx.fillRect(0,0,100,100)
// ctx.fillStyle="green"
// ctx.fillRect(100,100,200,200)


// // console.log(ctx);
// ctx.beginPath();
// ctx.moveTo(300,300);
// ctx.lineTo(400,400)
// ctx.stroke()
// const scaleX =+prompt()
// const scaleY = +prompt();

const scaleX = 30;
const scaleY = 30;
const shiftNames=5;
const xAxis=Math.round(canvasPlodWidth/scaleX/2)*scaleX;
const yAxis=Math.round(canvasPlodHeight/scaleY/2)*scaleY;


ctx.font=`${Math.round(scaleX/2)}px Arial`;
ctx.textAlign="left"
ctx.textBaseline="top"

ctx.beginPath();
ctx.strokeStyle="#f5f0e8"
for (let i = 0; i <=canvasPlodWidth ; i=i+scaleX) {
  ctx.moveTo(i,0)
  ctx.lineTo(i,canvasPlodHeight)

  ctx.fillText((i-xAxis)/scaleX,i+shiftNames,yAxis+shiftNames)
    
}
for (let i = 0; i <=canvasPlodHeight ; i=i+scaleY) {
    ctx.moveTo(0,i)
    ctx.lineTo(canvasPlodWidth,i)
    ctx.fillText((yAxis-i)/scaleY,xAxis+shiftNames,i+shiftNames)
  }

ctx.stroke()
ctx.closePath();

// const xAxis=canvasPlodWidth/2;
// const yAxis=canvasPlodHeight/2;
ctx.beginPath();
ctx.strokeStyle="#000000"


ctx.moveTo(xAxis,0)
ctx.lineTo(xAxis,canvasPlodHeight)
ctx.fillText('y',xAxis-20,0)

ctx.moveTo(0,yAxis)
ctx.lineTo(canvasPlodWidth,yAxis)
ctx.fillText('x',canvasPlodWidth-20,yAxis-20)

ctx.stroke()
ctx.closePath();
// console.log(canvasPlodWidth, canvasPlodHeight);

// grafik
// ctx.fillStyle='#ff0000'
// for (let i = 0; i <=canvasPlodWidth; i++) {

//     const x=(i-xAxis)/scaleX
//     // const y=-0.4*Math.pow(x,2)+2
//     // const y=Math.pow(x,3)
//      const y=2*Math.pow(x,2)+2*x+1
//     ctx.fillRect(x*scaleX+xAxis,yAxis-scaleX*y,4,4)
// }

function foo() {
  ctx.beginPath();
  let a= document.getElementById("xValue1").value
let xn= document.getElementById("xValue2").value
let b= document.getElementById("xValue3").value
let x1= document.getElementById("xValue4").value
let c= document.getElementById("xValue5").value
  debugger
  //  let f= document.getElementById("xValue")
  //  console.log(f.value);
//     console.log(f.target.value);
ctx.fillStyle='#ff0000'
for (let i = 0; i <=canvasPlodWidth; i++) {

    const x=(i-xAxis)/scaleX
    // const y=-0.4*Math.pow(x,2)+2
    // const y=Math.pow(x,3)
     const y=a*Math.pow(x,xn)+b*Math.pow(x,x1)+c
    ctx.fillRect(x*scaleX+xAxis,yAxis-scaleX*y,4,4)
}
document.getElementsByClassName("cnd")[0].style=" display: none;"
document.getElementById("button").style=" display: block;"
}

// foo()



function Reload() {
    location.reload();
    
    // location.replace("google.com")
}