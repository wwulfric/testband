var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(80);
var rightHand = conductor.createInstrument('triangle', 'oscillators'),
    leftHand = conductor.createInstrument('sine', 'oscillators'),
    drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);

for(var i = 0; i < 20; i++){
  leftHand.note('eighth', 'C2').rest('eighth');
}

var player = conductor.finish();

$(function(){
    $('body').on('click', '#play', function($e){
        player.play();
    });
//   conductor.setTickerCallback(function($e){
//     console.log($e);
//   });
});
