describe("Airport", function (){
  var airport;
  var plane;
  var secondplane;


  beforeEach(function() {
    airport = new Airport();

    plane = jasmine.createSpy('plane');
    spyOn(airport, 'stormy').and.returnValue(false);
    secondplane = jasmine.createSpy('secondplane')
  });

   it("should have an empty array of planes at the start", function(){
    expect(airport.planes).toEqual([]);
  })

  it("should let a plane land", function(){
    airport.land(plane, airport.stormy())
    expect(airport.planes).toContain(plane)
  })

  it("should let a plane take off", function(){
    airport.land(plane, airport.stormy())
    airport.land(secondplane, airport.stormy())
    airport.takeOff(plane, airport.stormy())
    expect(airport.planes).not.toContain(plane)
    expect(airport.planes).toContain(secondplane)
  })
  it("lets you know which plane has taken off", function(){
    airport.land(plane, airport.stormy() )
    expect(airport.takeOff(plane, airport.stormy())).toEqual(plane);
  })

})

  describe("Stormy weather", function(){
    var airport;
    var plane;

    beforeEach(function(){
      airport = new Airport();
      plane = jasmine.createSpy(plane)
      spyOn(airport, 'stormy').and.returnValue(true);
    })
    
  it("doesn't let plane take off if stormy", function(){
    airport.planes = [plane]
    airport.takeOff(plane, airport.stormy())
    expect(airport.planes).toContain(plane);
  })
  it("doesn't let plane land if stormy", function(){
    expect(airport.land(plane, airport.stormy())).toEqual("Weather too stormy to land")
  })
  it("doesn't let plane take off if no planes", function(){
    expect(airport.takeOff(plane, airport.stormy())).toEqual("No planes to take off");

  })
})
