var x = 25;
var y = 15;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  switch(telaAtiva) {
    case 1:
      menu();
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break; 
  }
}

function sair() {
   //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 40, 55);
  window.close();
}


function regras() {
   //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('Aqui vao as regras', 40, 55);
}

function menu() {
  //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(30, 20, 120, 55, 10);
  rect(30, 90, 120, 55, 10);
  rect(30, 160, 120, 55, 10);
  
  textSize(32);
  fill('black');
  
  text('Jogar', 40, 55);
  text('Regras', 40, 125);
  text('Sair', 40, 195);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(x, y, 130, 65);
}

function keyPressed() {
  console.log(keyCode);
  
  if(telaAtiva==2 || telaAtiva==3)
      telaAtiva=1;
  
  if (keyCode === ENTER) 
      telaAtiva=opcao;
     
  if (keyCode === DOWN_ARROW) {
    if(y<155) {
       y+=70;
       if(opcao==1)
           opcao=2;
       else 
          if(opcao==2)
             opcao=3; 
    }
    
  } else if (keyCode === UP_ARROW) {
    if(y>20) {
       y-=70;
       if(opcao==2) {
         opcao=1;
       } else { 
         if(opcao==3) {
           opcao=2;
         }
       }
    }
   
  }
  console.log("opcao: "+opcao);
  console.log("telaAtiva: "+telaAtiva);
}