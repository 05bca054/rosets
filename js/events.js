//############################################## Single object events ####################################
		/*stage.on('mousemove', function (event) {
			onMousemove(event)
		});*/
		var width=stage.getWidth()/2;
		//var height23=stage.getHeight()/4;
		var test = 262.5;
		//var heightse=height23-12.5;
		
		layer.on('click', function (event) {
			//alert();
			drawColorPicker(this.getAttr("id"),event);
		});
		
		close.on('click', function (e) {			
			colorpicker.removeChildren();
			colorpicker.draw();			
		});
		
		colorpicker.on('click', function (e) {
			var bgxy = stage.getAbsolutePosition();
			var x = e.pageX - stage.getContainer().offsetLeft - bgxy.x;
			var y = e.pageY - stage.getContainer().offsetTop - bgxy.y;
			var c = this.getContext('2d');
			var p = c.getImageData(x, y, 1, 1).data; 
			var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);			
			var layer_id=colorpicker.getAttr('id');
			//event for outer circle layer
			if(layer_id=="outerCircle")
			{
				$.ajax({
					type: "POST",
					url: "pngcolor.php",
					data: { color: hex,id: layer_id},				
				})
				.done(function( msg ) {				
					try {
						
						var imageObj1 = new Image();
						imageObj1.src = msg;
						imageObj1.onload = function() {						
							var circle = new Kinetic.Circle({
								x: width,
								y: test,
								radius: 257,
								fillPatternImage: imageObj1,
								fillPatternOffsetX:255,
								fillPatternOffsetY:255,
								draggable:true,
							});
							
							//remove backword image circle to overright with JPEG image
							layer.removeChildren();
							//Add circle containing JPEG image
							layer.add(circle);
							
							//colorpicker.removeChildren();
							//colorpicker.draw();
							//redraw circle layer						
							layer.draw();
							
						}
					} catch(err) {
					  console.log(err);
					  console.trace();
					}
			
				});
			}
			//event for group innerOdd
			else if(layer_id=="innerOdd")
			{
				triangle.setFill(hex);
				triangle3.setFill(hex);
				triangle5.setFill(hex);
				triangle7.setFill(hex);
				layertriangle.draw();
			}
			//event for group innerEven
			else if(layer_id=="innerEven")
			{
				triangle2.setFill(hex);
				triangle4.setFill(hex);
				triangle6.setFill(hex);
				triangle8.setFill(hex);
				layertriangle.draw();
			}
			else if(layer_id=="outerOdd")
			{
				outtriangle.setFill(hex);
				outtriangle3.setFill(hex);
				outtriangle5.setFill(hex);
				outtriangle7.setFill(hex);
				layeroutertriangle.draw();
			}
			//event for group innerEven
			else if(layer_id=="outerEven")
			{
				outtriangle2.setFill(hex);
				outtriangle4.setFill(hex);
				outtriangle6.setFill(hex);
				outtriangle8.setFill(hex);
				layeroutertriangle.draw();
			}
			//middle Circle
			else if(layer_id=="middelCircle")
			{
				$.ajax({
					type: "POST",
					url: "pngcolor.php",
					data: { color: hex,id: layer_id},				
				})
				.done(function( msg ) {				
					try {
						
						var imageObj1 = new Image();
						imageObj1.src = msg;
						imageObj1.onload = function() {						
							var circle = new Kinetic.Circle({
								x: width,
								y: test,
								radius: 178,
								fillPatternImage: imageObj1,
								fillPatternOffsetX:178,
								fillPatternOffsetY:178,
								draggable:true,
							});
							
							//remove backword image circle to overright with JPEG image
							middlecircle.removeChildren();
							//Add circle containing JPEG image
							middlecircle.add(circle);
							
							//colorpicker.removeChildren();
							//colorpicker.draw();
							//redraw circle layer
							middlecircle.draw();
							
						}
					} catch(err) {
					  console.log(err);
					  console.trace();
					}
			
				});
			}
			//Inner Circle
			else if(layer_id=="innerCircle")
			{
				$.ajax({
					type: "POST",
					url: "pngcolor.php",
					data: { color: hex,id: layer_id},				
				})
				.done(function( msg ) {				
					try {						
						var imageObj1 = new Image();
						imageObj1.src = msg;
						imageObj1.onload = function() {						
							var circle = new Kinetic.Circle({
								x: width,
								y: test,
								radius: 123,
								fillPatternImage: imageObj1,
								fillPatternOffsetX:132,
								fillPatternOffsetY:132,
								draggable:true,
							});
							
							//remove backword image circle to overright with JPEG image
							innercircle.removeChildren();
							//Add circle containing JPEG image
							innercircle.add(circle);
							
							//colorpicker.removeChildren();
							//colorpicker.draw();
							//redraw circle layer						
							innercircle.draw();
							
						}
					} catch(err) {
					  console.log(err);
					  console.trace();
					}
			
				});
			}			
			//Center Circle		
			else if(layer_id=="centerCircle")
			{
				var circle = new Kinetic.Circle({
					x: width,
					y: test,
					radius: 85,
					fill: hex,
					stroke: "black",
					strokeWidth: 3,
					draggable:true,
				});
				centercircle.removeChildren();
				//Add circle containing JPEG image
				centercircle.add(circle);
				centercircle.draw();
			}
				
		});
		// on mousemove...
		// Add the current mouse position to the points[] array
		// Update newline to include all points in points[]
		// and redraw the layer
		/*
	function onMousemove(event) {

		// Find the position of the canvas on the page

		// Find the position of the mouse relative to the canvas1
		var bgxy = stage.getAbsolutePosition();
		var x = event.pageX - stage.getContainer().offsetLeft - bgxy.x;
		var y = event.pageY - stage.getContainer().offsetTop - bgxy.y;
		
		mouseToText.setText("Mouse: x=" + x + ", y=" + y);

		layer.drawScene();
	}*/
	
	middlecircle.on('click', function(event) {		
		drawColorPicker(this.getAttr("id"),event);
	});
	
	innercircle.on('click', function(event) {		
		drawColorPicker(this.getAttr("id"),event);
	});
	
	centercircle.on('click', function(event) {		
		drawColorPicker(this.getAttr("id"),event);
	});

//############################################## Group object events ####################################      
	//test event on group
	innerOdd.on('click', function(event) {						
		drawColorPicker(this.getAttr("id"),event);
	});
	
	innerEven.on('click', function(event) {						
		drawColorPicker(this.getAttr("id"),event);
	});
      
    outerOdd.on('click', function(event) {						
		drawColorPicker(this.getAttr("id"),event);
	});
	
	outerEven.on('click', function(event) {						
		drawColorPicker(this.getAttr("id"),event);
	});
    /*
    var dragSrcEl = null;
		
		document.getElementById("yoda").addEventListener('dragstart',function(e){
           dragSrcEl = this;
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
