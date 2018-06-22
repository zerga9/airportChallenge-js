describe("Airport", function (){
  var airport;


  beforeEach(function() {
    airport = new Airport();
    airport.stormy = false

});
  it("should have an empty array of planes at the start", function(){
    expect(airport.planes).toEqual([]);
  })

  it("should let a plane land", function(){
    var plane = "RAM"
    airport.land(plane)
    console.log(airport.land(plane));
    expect(airport.planes).toContain("RAM")
  })

  it("should let a plane take off", function(){
    var plane = "KLM"
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).not.toContain("KLM")
  })
  it("lets you know which plane has taken off", function(){
    var plane = "KLM"
    airport.land(plane)
    expect(airport.takeOff(plane)).toEqual("KLM");
  })

})

  describe("Stormy weather", function(){
    var airport;

    beforeEach(function(){
      airport = new Airport();
      airport.stormy = true
    })
  it("doesn't let plane take off if stormy", function(){
    airport.planes = ["Monarch"]
    airport.takeOff("Monarch")
    expect(airport.planes).toContain("Monarch");
  })
  it("doesn't let plane land if strormy", function(){
    var plane = "Meppel"
    expect(airport.land(plane)).toEqual("Weather too stormy to land")
  })
})
