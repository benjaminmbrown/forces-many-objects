var movers=[];
var noiseScale = 0.001;

function setup() {
  createCanvas(440, 260);
  //m = new Mover(random(0.1, 5), 0, 0)

    for (var i = 0; i < 30; i++) {
      movers[i] = new Mover(random(0.1,5),0,0);
  }
}

function draw() {
  background(51);
  //noise() takes  params value, valRangeMin, valRangeMax, desiredRangeMin,desiredRangeMax
  var wind = createVector(0.01, 0);


  for (var i = 0; i < movers.length; i++) {
      //move gravity into here so we can apply mass of each object to it
      var gravity = createVector(0, 0.1*movers[i].mass);

     movers[i].applyForce(wind);
     movers[i].applyForce(gravity);
     movers[i].update();
     movers[i].display();
     movers[i].checkEdges();

  }
  

noiseScale+=0.001;


}


