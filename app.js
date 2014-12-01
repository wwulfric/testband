var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(80);
var rightHand = conductor.createInstrument('sine', 'oscillators'),
    leftHand = conductor.createInstrument('triangle', 'oscillators'),
    drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);

// Bar 1
rightHand.note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5')
         .note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5');
leftHand.rest('whole');

// Bar 2
rightHand.note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5')
         .note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5');
leftHand.note('whole', 'E5', true);

// Bar 3
rightHand.note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F4').note('eighth', 'A4')
         .note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F4').note('eighth', 'A4');
leftHand.note('whole', 'F5', true);

// Bar 4
rightHand.note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'F4').note('eighth', 'G4')
         .note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'F4').note('eighth', 'G4');
leftHand.note('half', 'G5').rest('quarter').note('quarter', 'D5', true);

// Bar 5
rightHand.note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5')
         .note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4').note('eighth', 'C5');
leftHand.note('whole', 'E5', true);

// Bar 6
rightHand.note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'A4').note('eighth', 'C5')
         .note('eighth', 'C4').note('eighth', 'E4', true).note('quarter', 'E4');
leftHand.note('half', 'A5').rest('eighth').note('eighth', 'A4').note('eighth', 'B4').note('eighth', 'C5');

// Bar 7
rightHand.note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F#4').note('eighth', 'A4')
         .note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F#4').note('eighth', 'A4');
leftHand.note('quarter', 'D5', true).note('eighth', 'D5').note('eighth', 'E5').note('half', 'D5');

// Bar 8
rightHand.note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'G4').note('eighth', 'B4')
         .note('eighth', 'B3').note('eighth', 'D4', true).note('quarter', 'D4');
leftHand.note('half', 'G5').rest('eighth').note('eighth', 'G4').note('eighth', 'A4').note('eighth', 'B4');

// Bar 9
rightHand.note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4')
         .note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4');
leftHand.note('quarter', 'C5', true).note('eighth', 'C5').note('eighth', 'D5').note('half', 'C5');

// Bar 10
rightHand.note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4')
         .note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4');
leftHand.note('half', 'C6').rest('eighth').note('eighth', 'C5').note('eighth', 'D5').note('eighth', 'E5');

// Bar 11
rightHand.note('eighth', 'D3').note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F#4')
         .note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F#4');
leftHand.note('quarter', 'F#5', true).note('eighth', 'F#5').note('eighth', 'E5').note('quarter', 'D5').note('quarter', 'A4');

// Bar 12
rightHand.note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'G4')
         .note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'G4');
leftHand.note('half', 'B4').rest('quarter').note('quarter', 'D5');

// Bar 13
rightHand.note('eighth', 'G3').note('eighth', 'Bb3').note('eighth', 'C#4').note('eighth', 'E4')
         .note('eighth', 'G3').note('eighth', 'Bb3').note('eighth', 'C#4').note('eighth', 'E4');
leftHand.note('half', 'E5').rest('eighth').note('eighth', 'E5').note('eighth', 'F5').note('eighth', 'G5');

// Bar 14
rightHand.note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'D4').note('eighth', 'F4')
         .note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'D4').note('eighth', 'F4');
leftHand.note('half', 'A5').note('half', 'A4');

// Bar 15
rightHand.note('eighth', 'F3').note('eighth', 'G#3').note('eighth', 'B3').note('eighth', 'D4')
         .note('eighth', 'F3').note('eighth', 'G#3').note('eighth', 'B3').note('eighth', 'D4');
leftHand.note('half', 'D5').rest('eighth').note('eighth', 'D5').note('eighth', 'E5').note('eighth', 'F5');

// Bar 16
rightHand.note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'C3').note('eighth', 'E4')
         .note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'C3').note('eighth', 'E4');
leftHand.note('half', 'G5').note('half', 'G4');

// Bar 17
rightHand.note('eighth', 'E3').note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'C4')
         .note('eighth', 'E3').note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'C4');
leftHand.note('half', 'C5').rest('eighth').note('eighth', 'C5').note('eighth', 'D5').note('eighth', 'E5');

// Bar 18
rightHand.note('eighth', 'D3').note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'C4')
         .note('eighth', 'E4').note('eighth', 'F4').note('eighth', 'A4').note('eighth', 'C5');
leftHand.note('half', 'F5').rest('eighth').note('eighth', 'F5').note('eighth', 'G5').note('eighth', 'A5');

// Bar 19
rightHand.note('eighth', 'G2').note('eighth', 'F3').note('eighth', 'G3').note('eighth', 'B3')
         .note('eighth', 'D3').note('eighth', 'F3').note('eighth', 'G3').note('eighth', 'B3');
leftHand.note('quarter', 'B5', true).note('eighth', 'B5').note('eighth', 'A5').note('quarter', 'G5').note('quarter', 'D5');

// Bar 20
rightHand.note('eighth', 'C3').note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'C4')
         .note('eighth', 'C3').note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'C4');
leftHand.note('dottedHalf', 'E5').rest('eighth').rest('sixteenth').note('sixteenth', 'D5');

// Bar 21
rightHand.note('eighth', 'C3').note('eighth', 'Bb3').note('eighth', 'E4').note('eighth', 'G4')
         .note('eighth', 'E3').note('eighth', 'Bb3').note('eighth', 'E4').note('eighth', 'G4');
leftHand.note('half', 'G5').note('quarter', 'E5', true).note('eighth', 'E5').note('eighth', 'E5');

// Bar 22
rightHand.note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4')
         .note('eighth', 'F3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4');
leftHand.note('half', 'A5').note('quarter', 'A4', true).note('dottedEighth', 'A4').note('sixteenth', 'A5');

// Bar 23
rightHand.note('eighth', 'F#3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'Eb4')
         .note('eighth', 'F#3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'Eb4');
leftHand.note('half', 'A5').note('quarter', 'C5', true).note('eighth', 'C5').note('eighth', 'A5');

// Bar 24
rightHand.note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'Eb4')
         .note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'Eb4');
leftHand.note('half', 'C6').note('quarter', 'Eb5', true).note('dottedEighth', 'Eb5').note('sixteenth', 'C6');

// Bar 25
rightHand.note('eighth', 'G#3').note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'D4')
         .note('eighth', 'G#3').note('eighth', 'B3').note('eighth', 'C4').note('eighth', 'D4');
leftHand.note('half', 'C6').note('quarter', 'D5', true).note('dottedEighth', 'D5').note('sixteenth', 'D5');

// Bar 26
rightHand.note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'F4')
         .note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'F4');
leftHand.note('half', 'D5').rest('eighth').note('eighth', 'D5').note('eighth', 'C5').note('eighth', 'B4');

// Bar 27
rightHand.note('eighth', 'G3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4')
         .note('eighth', 'G3').note('eighth', 'C4').note('eighth', 'E4').note('eighth', 'G4');
leftHand.note('quarter', 'G5', true).note('eighth', 'G5').note('eighth', 'E5').note('half', 'C5');

// Bar 28
rightHand.note('eighth', 'G3').note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F4')
         .note('eighth', 'G3').note('eighth', 'C4').note('eighth', 'D4').note('eighth', 'F4');
leftHand.note('half', 'F5').rest('eighth').note('eighth', 'F5').note('eighth', 'E5').note('eighth', 'D4');

// Bar 29
rightHand.note('eighth', 'G3').note('eighth', 'B3').note('eighth', 'D4').note('eighth', 'F4').note('half', 'G4');
leftHand.note('half', 'D6').rest('eighth').note('eighth', 'B5').note('eighth', 'G5').note('eighth', 'F5');

// Bar 30
rightHand.rest('whole');
leftHand.note('eighth', 'D5').note('eighth', 'B4').note('eighth', 'G4').note('eighth', 'F4')
        .note('eighth', 'D4').note('eighth', 'B3').note('eighth', 'G3').note('eighth', 'D3');

// Bar 31
rightHand.note('eighth', 'C3').note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'C4')
         .note('eighth', 'C3').note('eighth', 'E3').note('eighth', 'G3').note('eighth', 'Bb3');
leftHand.rest('whole');

// Bar 32
rightHand.note('eighth', 'C3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4')
         .note('eighth', 'C3').note('eighth', 'A3').note('eighth', 'C4').note('eighth', 'E4');
leftHand.rest('whole');

// Bar 33
rightHand.note('eighth', 'C3').note('eighth', 'F3').note('eighth', 'G3').note('eighth', 'B3', true).note('half', 'B3');
leftHand.rest('eighth').note('eighth', 'B4').note('eighth', 'G4').note('eighth', 'F4')
        .note('eighth', 'D4').note('eighth', 'F4').note('eighth', 'E4').note('eighth', 'D4');

// Bar 34
rightHand.note('whole', 'C3');
leftHand.note('whole', 'E4, C5');




var player = conductor.finish();

$(function(){
    $('body').on('click', '#play', function($e){
        player.play();
    });
//   conductor.setTickerCallback(function($e){
//     console.log($e);
//   });
});
