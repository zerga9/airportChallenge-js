describe("Airport", function (){
  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy(plane)
    airport.stormy = false
 });
  it("should have an empty array of planes at the start", function(){
    expect(airport.planes).toEqual([]);
  })

  it("should let a plane land", function(){
    airport.land(plane)
    console.log(airport.land(plane));
    expect(airport.planes).toContain(plane)
  })

  it("should let a plane take off", function(){
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).not.toContain(plane)
  })
  it("lets you know which plane has taken off", function(){
    airport.land(plane)
    expect(airport.takeOff(plane)).toEqual(plane);
  })

})

  describe("Stormy weather", function(){
    var airport;
    var plane;

    beforeEach(function(){
      airport = new Airport();
      plane = jasmine.createSpy(plane)
      airport.stormy = true;
    })
  it("doesn't let plane take off if stormy", function(){
    airport.planes = ["Monarch"]
    airport.takeOff("Monarch")
    expect(airport.planes).toContain("Monarch");
  })
  it("doesn't let plane land if strormy", function(){
    expect(airport.land(plane)).toEqual("Weather too stormy to land")
  })
  it("doesn't let plane take off if no planes", function(){
    expect(airport.takeOff(plane)).toEqual("No planes to take off");

  })
})
