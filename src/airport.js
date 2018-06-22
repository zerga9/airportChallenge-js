function Airport(){
  this.planes = []
};

Airport.prototype.land = function(plane){
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane){
   this.planes = this.planes.filter(item => item !== plane)
   return plane
}
