$(function(){
  var canvas = $("body canvas")[0];
  var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
  var ctx = renderer.getContext();

  // Create the staves
  var topStaff = new Vex.Flow.Stave(20, 0, 300);
  var bottomStaff = new Vex.Flow.Stave(20, 150, 300);
//   var tempo = new Vex.Flow.StaveTempo

  topStaff.addClef('treble');
  topStaff.addTimeSignature("4/4");
  bottomStaff.addClef('bass');
  bottomStaff.addTimeSignature("4/4");

  var brace = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(3);
  var lineLeft = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(1);
  var lineRight = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(0);

  topStaff.setContext(ctx).draw();
  bottomStaff.setContext(ctx).draw();

  brace.setContext(ctx).draw();
  lineLeft.setContext(ctx).draw();
  lineRight.setContext(ctx).draw();

  var topStaff = new Vex.Flow.Stave(320, 300, 300);
  var bottomStaff = new Vex.Flow.Stave(320, 450, 300);
  topStaff.setContext(ctx).draw();
  bottomStaff.setContext(ctx).draw();
});
