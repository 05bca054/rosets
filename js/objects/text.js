 var topText = new Kinetic.Text({
	x: 350,
	y: 600,
	text: 'Simple Text',
	fontSize: 30,
	fontFamily: 'Calibri',
	fill: 'green'
});
  
var bottomText = new Kinetic.Text({
	x: 340,
	y: 1000,
	text: 'Simple Text',
	fontSize: 30,
	fontFamily: 'Calibri',
	fill: 'green'
});

var sampleText = new Kinetic.Shape({	
	drawFunc: function(context) {
		context.beginPath();

        var maxWidth = 2;
        var lineHeight = 25;
        var x = 380;
        var y = 700;
        var text = 'Sample Text';
        context.setAttr("font", '15pt Calibri');
        context.setAttr('fillStyle','green');
        //Function for vetical text display
        wrapText(context, text, x, y, maxWidth, lineHeight);
        context.closePath();
        // KineticJS specific context method
        context.fillStrokeShape(this);
	},        
});

// add the triangle shape to the layer
textlayer.add(topText);
textlayer.add(bottomText);
textlayer.add(sampleText);
textlayer.draw();

//wrap text functions

topText.on('click', function(evt) {
	this.setText(prompt('New Text:'));
	textlayer.draw(); //redraw the layer containing the textfield
});

bottomText.on('click', function(evt) {
	this.setText(prompt('New Text:'));
	textlayer.draw(); //redraw the layer containing the textfield
});
		

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split('');
    var line = '';
    //alert(context);
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context._context.measureText(testLine);
        var testWidth = 20;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
   }
   context.fillText(line, x, y);
}
