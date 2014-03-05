
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 1000,
        height: 525
      });
      var layer = new Kinetic.Layer();
		
	
		
		//first image
	
      var imageObj = new Image();
      imageObj.src = 'images/6.png';
	  imageObj.onload = function() {
       
		triangle.moveToTop();
        // add the shape to the layer
        layer.add(yoda);
	
	
        // add the layer to the stage
        stage.add(layer);
        
        triangle.moveToTop();
        
        triangle2.setZIndex(3);
        triangle3.setZIndex(4);
        triangle4.setZIndex(5);
        //layer.draw();
        layer.draw();
      };
  
       var yoda = new Kinetic.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: 509,
          height: 511,
          draggable:true,
          fill:"green",          
          name:"circle"
        });
        
      var triangle = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(250, 0);
          context.quadraticCurveTo(15, 15, 0, 250);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: 'white',
        //stroke: 'black',
        //strokeWidth: 4
      });

      // add the triangle shape to the layer
      layer.add(triangle);
      
      //second triangle
      var triangle2 = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(510, 0);
          context.lineTo(250, 0);
          context.quadraticCurveTo(500, 20, 510, 250);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: 'white',
        //stroke: 'black',
       // strokeWidth: 4
      });

      // add the triangle shape to the layer
      layer.add(triangle2);
     
      //Third triangle
      var triangle3 = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(0, 520);
          context.lineTo(0, 265);
          context.quadraticCurveTo(20, 510, 275, 510);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: 'white',
        //stroke: 'black',
       // strokeWidth: 4
      });

      // add the triangle shape to the layer
      layer.add(triangle3);
       
       //fourth triangle
      var triangle4 = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(510, 515);
          context.lineTo(265, 515);
          context.quadraticCurveTo(500, 495, 510, 250);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: 'white',
 
      });

      // add the triangle shape to the layer
      layer.add(triangle4);
       
       
       
     document.getElementById('toTop').addEventListener('click', function() {
        //triangle.moveToTop();
         /*var yoda = new Kinetic.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: 509,
          height: 511,
          draggable:true,
          fill:"red"
        });*/
        alert($("#picker").val());
        yoda.setFill("#"+$("#picker").val());
		//layer.add(yoda);
        triangle.moveToTop();
        
        triangle2.setZIndex(8);
        triangle3.setZIndex(4);
        triangle4.setZIndex(5);
        layer.draw();
      }, false);

      document.getElementById('toBottom').addEventListener('click', function() {
        triangle.moveToBottom();
        layer.draw();
      }, false);

      document.getElementById('up').addEventListener('click', function() {
        triangle.moveUp();
        layer.draw();
      }, false);

      document.getElementById('down').addEventListener('click', function() {
        triangle.moveDown();
        layer.draw();
      }, false);

      document.getElementById('zIndex').addEventListener('click', function() {
        triangle.setZIndex(3);
        layer.draw();
      }, false);
     // imageObj1.src = 'images/4.png';
     // imageObj2.src = 'images/5.png';
