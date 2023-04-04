//variáveis da ball
let xBALL = 300;
let yBALL = 200;
let diametro = 15;
let raio = diametro / 2;
//variáveis da velocidade da ball
let velXBall = 5;
let velYBall = 5;
//variaveis do retângulo
let xRECT = 5;
let yRECT = 150;
let largura = 7;
let altura = 80;
//var colisao
let colidiu = false
//variáveis do oponente
let xRECTenemy = 585;
let yRECTenemy = 150;
let velYenemy;
let erro = 0;
//pontos
let meus = 0;
let oponente = 0;
//sons
let raquetada;
let ponto;
let trilha;

//sons
function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
  
//fundo
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

//elementos
function draw() {
  background (0);
  showBALL();
  moveBALL();
  collBALL();
  showRECT(xRECT, yRECT);
  moveRECT();
  collRECT(xRECT, yRECT);
  showRECT(xRECTenemy, yRECTenemy);
  moveEnemy();
  collRECT(xRECTenemy, yRECTenemy);
  placar();
  pontos();

}

//bola (BALL)
function showBALL(){
  //desenho da bola
    circle(xBALL,yBALL,diametro);
}
function moveBALL(){
  //movimento da bola
  xBALL += velXBall;
  yBALL += velYBall;
}
function collBALL(){
  //colisão eixo X:
  if (xBALL + raio > width || xBALL - raio < 0){
    velXBall *= -1;
   }
  //colisão eixo Y:
  if (yBALL + raio > height || yBALL - raio < 0){
    velYBall *= -1;
  }
}

//retangulo (RECT)
function showRECT(x, y){
  //desenho do retângulo
  rect(x, y, largura, altura);
}
function moveRECT(){
  //movimento do retângulo
  if (keyIsDown(DOWN_ARROW)){
    yRECT += 10;
  }
   if (keyIsDown(UP_ARROW)) {
    yRECT -= 10;
  }
}
//retângulo inimigo (enemy)
function moveEnemy(){
  velYenemy = yBALL - yRECTenemy - largura /2 - 30 
  yRECTenemy += velYenemy;
  errorate();
  
}
//colisão rect(dois)
function collRECT(x, y) {
    colidiu = collideRectCircle(x, y, largura, altura, xBALL, yBALL, raio);
    if (colidiu){
        velXBall *= -1;
    raquetada.play()
    
    }
}

//placar de pontos
function placar(){
  stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meus, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(oponente, 470, 26);
}
function pontos(){
  if (xBALL > 590){
    meus +=1
    ponto.play()
  }
  if (xBALL < 10){
    oponente += 1
    ponto.play()
  }
}

//chance de erro
function errorate(){
  if (oponente >= meus){
    erro +=1
  }
  if (erro >=39){
    erro = 40
  }
} 


