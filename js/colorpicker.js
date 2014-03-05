var imageObjClose = new Image();
imageObjClose.src = "images/close.png";
var close = new Kinetic.Rect({		
	width: 40,
	height: 40,
	fillPatternImage: imageObjClose,		
	draggable:true,								
});
					
var imageObjColor = new Image();			
imageObjColor.src = "images/color-picker.png";				

var circle23 = new Kinetic.Rect({
	width: 256,
	height: 256,
	fillPatternImage: imageObjColor,							
	draggable:true,
});

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
//layer id to identify that from which layer even called of.
function drawColorPicker(layerId,event)
{
	var pos=$(".kineticjs-content").position();
	
	var bgxy = stage.getAbsolutePosition();
	//param x and param y set if they exceeds stage
	
	//Adder is used to change width and height dynamically
	var adderX=150;
	//var adderY=0;
	
	posX = event.pageX;
	posY = event.pageY;	
	
	var x = posX-pos.left;
	var y = posY-pos.top;
	
	if(x >= 280+adderX)
	{	
		x = 280+adderX;
	}
	if(y >= 260)
	{		
		y = 260;
	}
	
	close.setAttr("x",x-20);
	close.setAttr("y",y-20);
	circle23.setAttr("x",x);
	circle23.setAttr("y",y);
	
	colorpicker.removeChildren();
	//Storing the previous event data
	//overrighting same image id to identify layer
	colorpicker.setAttr("id",layerId);
	//Add circle containing JPEG image
	colorpicker.add(circle23);
	//Add close JPEG image
	colorpicker.add(close);
	colorpicker.moveToTop();
	//redraw circle layer						
	colorpicker.draw();
	
}
