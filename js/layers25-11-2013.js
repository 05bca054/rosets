      var stage = new Kinetic.Stage({
        container: 'container',
        width: 1000,
        height: 525
      });
      var layer = new Kinetic.Layer();
      var layertriangle = new Kinetic.Layer();
      var middlecircle = new Kinetic.Layer();
      var innercircle = new Kinetic.Layer();
      var centercircle = new Kinetic.Layer();
      
	//first image
	
	// a kinetic text object to display coordinates
	var mouseToText = new Kinetic.Text({
		x: 20,
		y: 30,
		fontFamily: "Arial",
		fontSize: 18,
		fill: "blue",
		stroke: null,
		text: "Mouse position"
	});
	layer.add(mouseToText);
	
	//Triangle object
	 var triangle = new Kinetic.RegularPolygon({
        x: 478,
        y: 100,
        sides: 3,
        radius: 55,
        fill: 'red',
       /* stroke: 'black',
        strokeWidth: 25,*/
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle);
      
      //Triangle object
	 var triangle2 = new Kinetic.RegularPolygon({
        x: 383,
        y: 145,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:80,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle2);
      
       var triangle3 = new Kinetic.RegularPolygon({
        x: 330,
        y: 240,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:150,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle3);
      
      var triangle4 = new Kinetic.RegularPolygon({
        x: 370,
        y: 363,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:225,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle4);
      
      var triangle5 = new Kinetic.RegularPolygon({
        x: 500,
        y: 420,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:300,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle5);
      
       var triangle6 = new Kinetic.RegularPolygon({
        x: 630,
        y: 372,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:20,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle6);
      
       var triangle7 = new Kinetic.RegularPolygon({
        x: 665,
        y: 248,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:90,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle7);
      
       var triangle7 = new Kinetic.RegularPolygon({
        x: 610,
        y: 150,
        sides: 3,
        radius: 55,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 25,
        rotationDeg:45,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      layertriangle.add(triangle7);

	  var imageObj = new Image();
      imageObj.onload = function() {
        
		var circle = new Kinetic.Circle({
            x: stage.getWidth() / 2,
			y: stage.getHeight() / 2,
			radius: 257,
			fillPatternImage: imageObj,
			fillPatternOffset:[255,255],
			draggable:true,
        });
        // add the shape to the layer
        layer.add(circle);

        // add the layer to the stage
       
       // stage.add(layertriangle);
       // triangle.moveToTop();
        //layer.draw();
       // layertriangle.draw();
      };
      
     
      
      
      var imageObjMiddle = new Image();
      imageObjMiddle.onload = function() {
        
		var mc = new Kinetic.Circle({
            x: stage.getWidth() / 2,
			y: stage.getHeight() / 2,
			radius: 178,
			fillPatternImage: imageObjMiddle,
			fillPatternOffset:[178,178],
			draggable:true,
        });
        // add the shape to the layer
        middlecircle.add(mc);
        
        
      };
      
      
      var imageObjinner = new Image();
      imageObjinner.onload = function() {
        
		var ic = new Kinetic.Circle({
            x: stage.getWidth() / 2,
			y: stage.getHeight() / 2,
			radius: 135,
			fillPatternImage: imageObjinner,
			fillPatternOffset:[135,135],
			draggable:true,
        });
        // add the shape to the layer
        innercircle.add(ic);

		
      };
      
      var imageObjcenter = new Image();
      imageObjcenter.onload = function() {
        
		var cc = new Kinetic.Circle({
            x: stage.getWidth() / 2,
			y: stage.getHeight() / 2,
			radius: 87,
			fillPatternImage: imageObjcenter,
			fillPatternOffset:[87,87],
			draggable:true,
        });
        // add the shape to the layer
        centercircle.add(cc);

		stage.add(layer);
      
		stage.add(layertriangle); 
        // add the layer to the stage
        stage.add(middlecircle);       
        stage.add(innercircle);       
        stage.add(centercircle);       
        //triangle.moveToTop();
        centercircle.draw();
       // layertriangle.draw();
        // add the layer to the stage
       
       // stage.add(layertriangle);
       // triangle.moveToTop();
        //layer.draw();
       // layertriangle.draw();
      };
      imageObj.src = 'images/6.png';
      imageObjMiddle.src = 'images/3.png';
      imageObjinner.src = 'images/2.png';
      imageObjcenter.src = 'images/1.png';
     
     

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EVENTS Section @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
  //mouse cordinates
       stage.on('mousemove', function (event) {
			onMousemove(event)
		});


		// on mousemove...
		// Add the current mouse position to the points[] array
		// Update newline to include all points in points[]
		// and redraw the layer
		function onMousemove(event) {

			// Find the position of the canvas on the page

			// Find the position of the mouse relative to the canvas1
			var bgxy = stage.getAbsolutePosition();
			var x = event.pageX - stage.getContainer().offsetLeft - bgxy.x;
			var y = event.pageY - stage.getContainer().offsetTop - bgxy.y;
			/*var pos = stage.getMousePosition();
			mouseX = parseInt(pos.x);
			mouseY = parseInt(pos.y);*/

			mouseToText.setText("Mouse: x=" + x + ", y=" + y);

			layer.drawScene();
		}
	
     document.getElementById('toTop').addEventListener('click', function() {
		var newsrc;
	
		$.ajax({
				type: "POST",
				url: "pngcolor.php",
				data: { color: $("#picker").val()},				
			})
			.done(function( msg ) {				
				try {
				 	alert(msg);
				 	var imageObj1 = new Image();
				 	imageObj1.src = msg;
				 	imageObj1.onload = function() {
						var circle = new Kinetic.Circle({
							x: stage.getWidth() / 2,
							y: stage.getHeight() / 2,
							radius: 250,
							fillPatternImage: imageObj1,
							fillPatternOffset:[250,250], 
							draggable:true,
						});
						//remove backword image circle to overright with JPEG image
						layer.removeChildren();
						//Add circle containing JPEG image
						layer.add(circle);
						//redraw circle layer						
						layer.draw();
					}
				} catch(err) {
				  console.log(err);
				  console.trace();
				}
		
			});		
      }, false);
      
    
