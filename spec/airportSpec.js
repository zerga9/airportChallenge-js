describe("Airport", function (){
  var airport;


  beforeEach(function() {
    airport = new Airport();
  });

  it("should have an empty array of planes at the start", function(){
    expect(airport.planes).toEqual([]);
  })
  it("should let a plane land", function(){
    var plane = "RAM"
    airport.land(plane)
    expect(airport.planes).toContain("RAM")
  })
})
