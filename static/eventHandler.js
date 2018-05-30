// eventHandler.js

// Include jquery inside self-executing function
// for global scope reasons

// Sound constructor function
function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}

(function() {
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/13.1.18/Tone.js'
document.getElementsByTagName('head')[0].appendChild(script2);

for (var i = 0; i < 25; i++) {

}

window.addEventListener("keydown", function(e) {
    var keyMap = [
        81, 87, 69, 82, 84, // qwert
        65, 83, 68, 70, 71, // asdfg
        90, 88, 67, 86, 66, // zxcvb
        89, 85, 73, 79, 80, // yuiop
        72, 74, 75, 76, 186 // hjkl;
    ]

    var keyboardMap = [
        'G1', 'A1', 'B1', 'C2', 'D2',
        'E2', 'F2', 'G2', 'A2', 'B2',
        'C3', 'D3', 'E3', 'F3', 'G3',
        'A3', 'B3', 'C4', 'D4', 'E4',
        'F4', 'G4', 'A4', 'B4', 'C5',
        'D5', 'E5', 'F5', 'G5', 'A5',
        'B5', 'C6', 'D6', 'E6', 'F6',
        'G6', 'A6', 'B6', 'C7', 'D7'
    ];

    //to make a 4 voice MonoSynth
    var duoSynth;
    for (var i = 0; i < keyMap.length; i++) {
        if (e.keyCode === keyMap[i]) {
            (new Tone.PolySynth().toMaster()).triggerAttackRelease([keyboardMap[i],keyboardMap[i+7],keyboardMap[i+14]], "128n");
        }
    }
})
})();
