function Airport(){
  this.planes = []
};

Airport.prototype.land = function(plane, stormy= this.stormy){
  if (stormy){
    return "Weather too stormy to land"
  }else {
  this.planes.push(plane)
}
}

Airport.prototype.takeOff = function(plane, stormy = this.stormy){
  if(this.planes.length === 0){
    return "No planes to take off"
  }
  else if (stormy){
    return "Weather too stormy to take off!"
  } else {
    this.planes = this.planes.filter(item => item !== plane)
    return plane
  }
}

Airport.prototype.stormy = function(){
  if (Math.random() < 0.3) {
    return true
  } else {
    return false
  }
}
