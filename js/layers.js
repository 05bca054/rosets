      var stage = new Kinetic.Stage({
        container: 'container',
        id: 'uniqu_stage',
        width: 850,
        height: 1800
      });
      var layer = new Kinetic.Layer({id:"outerCircle"});
      var layeroutertriangle = new Kinetic.Layer({id:"outerTriangle"});
      var layertriangle = new Kinetic.Layer({id:"innerTriangle"});
      var middlecircle = new Kinetic.Layer({id:"middelCircle"});
      var innercircle = new Kinetic.Layer({id:"innerCircle"});
      var centercircle = new Kinetic.Layer({id:"centerCircle",listening:true});
      var colorpicker = new Kinetic.Layer({id:"colorPicker"});
      var odd_shadow = new Kinetic.Layer({id:"odd_shadow"});
      var even_shadow = new Kinetic.Layer({id:"even_shadow"});
      var textlayer = new Kinetic.Layer();
      
      //groups for triangles
      var innerOdd = new Kinetic.Group({id:"innerOdd"});
      var innerEven = new Kinetic.Group({id:"innerEven"});
      var outerOdd = new Kinetic.Group({id:"outerOdd"});
      var outerEven = new Kinetic.Group({id:"outerEven"});
      	
	var width=stage.getWidth()/2;
	//var height23=stage.getHeight()/4;
	
	//Might apply some mathematical calculation in future
	var test = 262.5;

	/*
	* create a triangle shape by defining a
	* drawing function which draws a triangle
	*/
	
	 

	// add the layer to the stage
   
	
	
	var shadowimg = new Image();
	shadowimg.onload = function() {	
		
	var first_shadow = new Kinetic.Shape({
      sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(264, 462);
          context.lineTo(20, 1515);
          //context.moveTo(50, 1000);
          context.lineTo(106, 1467);//^curve
          context.lineTo(165, 1542);
          context.lineTo(298, 477);
          
         // context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fillPatternImage: shadowimg,
        fillPatternOffsetX:-20,
        fillPatternOffsetY:-462,
        draggable:true,
        stroke: 'black',
        strokeWidth: 1
      });
      odd_shadow.add(first_shadow);
      
      var third_shadow = new Kinetic.Shape({
      sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(345, 487);
          context.lineTo(330, 1563);
          //context.moveTo(50, 1000);
          context.lineTo(410, 1490);//^curve
          context.lineTo(493, 1570);
          context.lineTo(503, 477);
          
         // context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fillPatternImage: shadowimg,
        fillPatternOffsetX:-32,
        fillPatternOffsetY:-468,
        draggable:true,
        stroke: 'black',
        strokeWidth: 1
      });
      odd_shadow.add(third_shadow);
      
      var fifth_shadow = new Kinetic.Shape({
      sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(550, 465);
          context.lineTo(655, 1545);
          //context.moveTo(50, 1000);
          context.lineTo(722, 1460);//^curve
          context.lineTo(802, 1513);
          context.lineTo(594, 460);
          
         // context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fillPatternImage: shadowimg,
        fillPatternOffsetX:-50,
        fillPatternOffsetY:-460,
        draggable:true,
        stroke: 'black',
        strokeWidth: 1
      });
      
      odd_shadow.add(fifth_shadow);
            
      odd_shadow.draw();
     };
     
     
	//odd_shadow.add(first_shadow);
   
   var shadow2img = new Image();
	shadow2img.onload = function() {	
		
	var second_shadow = new Kinetic.Shape({
      sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(300, 475);
          context.lineTo(165, 1545);
          context.lineTo(251, 1483);//^curve
          context.lineTo(327, 1560);
          context.lineTo(343, 505);
          //context.lineTo(215, 510);
          
         // context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },        
        fillPatternImage: shadow2img,
        fillPatternOffsetX:-168,
        fillPatternOffsetY:-475,
        draggable:true,
        stroke: 'black',
        strokeWidth: 1
      });
      
      even_shadow.add(second_shadow);  
      
      var fourth_shadow = new Kinetic.Shape({
      sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(505, 495);
          context.lineTo(495, 1575);
          context.lineTo(568, 1495);//^curve
          context.lineTo(653, 1555);
          context.lineTo(550, 485);
          //context.lineTo(215, 510);
          
		// context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },        
        fillPatternImage: shadow2img,
        fillPatternOffsetX:-185,
        fillPatternOffsetY:-480,
        draggable:true,
        stroke: 'black',
        strokeWidth: 1
      });
      
      even_shadow.add(fourth_shadow);
      
      even_shadow.draw();
     };
   //even_shadow.add(second_shadow)
  
	  var imageObj = new Image();
      imageObj.onload = function() {        
		  
		var circle = new Kinetic.Circle({
            x: width,
			y: test,
			radius: 257,
			fillPatternImage: imageObj,
			fillPatternOffsetX:255,
			fillPatternOffsetY:255,
			draggable:true,
        });
        // add the shape to the layer
        layer.add(circle);
        layer.draw();
      };
      
     
      
      
      var imageObjMiddle = new Image();
      imageObjMiddle.onload = function() {
        
		var mc = new Kinetic.Circle({
            x: width,
			y: test,
			radius: 178,
			fillPatternImage: imageObjMiddle,
			fillPatternOffsetX:178,
			fillPatternOffsetY:178,
			draggable:true,
        });
        // add the shape to the layer
        middlecircle.add(mc);
		middlecircle.draw();
        
      };
      
      
      var imageObjinner = new Image();
      imageObjinner.onload = function() {
        
		var ic = new Kinetic.Circle({
            x: width,
			y: test,
			radius: 123,
			fillPatternImage: imageObjinner,
			fillPatternOffsetX:132,
			fillPatternOffsetY:132,
			draggable:true,
        });
        // add the shape to the layer
        innercircle.add(ic);
        innercircle.draw();
        
        
        stage.add(odd_shadow);
        stage.add(even_shadow);
        stage.add(textlayer);
        stage.add(layer);
		stage.add(layeroutertriangle);
		stage.add(layertriangle); 
        // add the layer to the stage
        stage.add(middlecircle);       
        stage.add(innercircle); 
        stage.add(centercircle);       
        stage.add(colorpicker);
        
      };
      
    /*  var imageObjcenter = new Image();
      imageObjcenter.onload = function() {*/
        
		var cc = new Kinetic.Circle({
            x: width,
			y: test,
			radius: 85,
			fill: "red",
			stroke: "black",
			strokeWidth: 3,			
			draggable:false,			
        });
        // add the shape to the layer
        
		
        centercircle.add(cc);

		
        /*
		var dragSrcEl = null;
		
		document.getElementById("yoda").addEventListener('dragstart',function(e){
			
           dragSrcEl = this;          
		});
		
		document.getElementById("yoda").addEventListener('dragend',function(e){
			//alert("drag end");
			 //cc.setListening(false);
			 //cc.setDraggable(false);
			 cc.fire('mousemove');    
			dragSrcEl = this;          
		});
		cc.on('mousemove', function() {
				alert('Multi-event binding!  Events: ');
			});
		cc.on('dragover',function(e){
			alert("asd");
			e.preventDefault(); //@important
		});
		//insert image to stage
		cc.on('drop',function(e){
			alert("asds");
			var image = new Kinetic.Image({
			   draggable : true
			});
			centercircle.add(image);
			imageObj = new Image();
			imageObj.src = dragSrcEl.src;
			imageObj.onload = function(){
				image.setImage(imageObj)
				centercircle.draw()
			};
		 });
*/
        //triangle.moveToTop();
		//centercircle.draw();
		//innercircle.draw();
     
    // };
      shadowimg.src = 'images/blueshadow.png';
      shadow2img.src = 'images/pinkshadow.png';
      imageObj.src = 'images/6.png';
      imageObjMiddle.src = 'images/3.png';
      imageObjinner.src = 'images/2.png';
    //  imageObjcenter.src = 'images/1.png';	
		//var con = centercircle.getContainer();
		
		
	//Text sample
	
	
