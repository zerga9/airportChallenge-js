describe("Airport", function (){
  var airport;


  beforeEach(function() {
    airport = new Airport();
  });

  it("should have an empty array of planes at the start", function(){
    expect(airport.planes).toEqual([]);
  })
})
