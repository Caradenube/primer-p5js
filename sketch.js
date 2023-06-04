function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
   
    //---------- LADO A
   
    // Pared edificio
    background('#B0E0E6');
    
    // Ventanas redondas acanaladas
    strokeWeight(2);
    stroke('white');
    fill('#1d536c');
    ellipse(30,50,50,50);
    ellipse(30,350,50,50);
  
    // Ventanas redondas
    strokeWeight(5);
    ellipse(120,50,50,50);
    ellipse(120,350,50,50);
    strokeWeight(1);
    line(110,55,127,40);
    line(118,55,133,42);
    line(110,355,127,340);
    line(118,355,133,342);
    
    // Canaletas ventana superior
    strokeWeight(2);
    line(5,50,55,50);
    line(10,65,49,65);
    line(10,35,49,35);
    
    // Canaletas ventana inferior
    strokeWeight(2);
    line(5,350,55,350);
    line(10,365,49,365);
    line(10,335,49,335);
    
    // Línea vertical izquierda
    stroke('black');
    line(75,1,75,500);
    
    // Canaleta vertical
    strokeWeight(2);
    line(180,1,180,500);
    line(240,1,240,500); 
    line(180,170,240,170);
    line(180,470,240,470);
    
    // Marco ventana superior
    strokeWeight(5);
    stroke('white');
    fill('#1d536c');
    rect(240,-5,500,200);
    rect(240,300,500,500);
    
    // Hoja ventana superior
    strokeWeight(5);
    rect(240,-5,100,140);
    line(340,95,340,195);
    
    // Hoja ventana inferior
    strokeWeight(5);
    rect(240,300,100,140);
    line(340,95,340,195);
    line(340,440,340,500);
  
    // Aire acondicionado superior
    strokeWeight(2);
    stroke('black');
    fill('#f5f1f2');
    rect(270,160,160,100);
    fill('white');
    ellipse(320,210,80,80);
    fill('white');
    line(370,160,370,260);
    line(280,212,360,212);
    line(281,202,359,202);
    line(284,192,356,192);
    line(291,182,349,182);
    line(281,222,359,222);
    line(289,232,354,232);
    line(297,242,344,242);
    rect(380,180,40,25);
    line(380,214,420,214);
    
    
    // Aire acondicionado inferior
    strokeWeight(2);
    fill('#f5f1f2');
    rect(270,460,160,100);
    fill('white');
    ellipse(320,510,80,80);
    line(285,492,355,492);
    line(293,482,347,482);
    line(370,460,370,555);
    fill('white');
    rect(380,478,40,25);
    
    // Reflejos
    strokeWeight(1);
    stroke('white');
    line(255,385,299,340);
    line(273,375,315,333);
    line(265,65,305,20);
    line(280,55,320,12);
    line(390,115,475,45);
    line(410,105,490,40);
    line(380,420,470,345);
    line(400,410,490,335);
  
  }