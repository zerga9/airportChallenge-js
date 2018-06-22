function Airport(){
  this.planes = []
};

Airport.prototype.land = function(plane){
  this.planes.push(plane)
}

Airport.prototype.takeOff = function(plane){
  if (!this.stormy){
   this.planes = this.planes.filter(item => item !== plane)
   return plane
} else {
  return "Weather too stormy to take off!"
}
}

Airport.prototype.stormy = function(){
  if (Math.random() < 0.3) {
    return true
  } else {
    return false
  }
}
