var commonwidth=70;
	//Triangle object
	 var triangle = new Kinetic.RegularPolygon({
        x: 478-commonwidth,
        y: 100,
        sides: 3,
        radius: 55,
        fill: 'red',
       /* stroke: 'black',
        strokeWidth: 25,*/
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle);
      
      //Triangle object
	 var triangle2 = new Kinetic.RegularPolygon({
        x: 383-commonwidth,
        y: 145,
        sides: 3,
        radius: 55,
        fill: 'red',
       /* stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:80,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle2);
      
       var triangle3 = new Kinetic.RegularPolygon({
        x: 330-commonwidth,
        y: 240,
        sides: 3,
        radius: 55,
        fill: 'red',
       /* stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:150,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle3);
      
      var triangle4 = new Kinetic.RegularPolygon({
        x: 370-commonwidth,
        y: 363,
        sides: 3,
        radius: 55,
        fill: 'red',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:225,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle4);
      
      var triangle5 = new Kinetic.RegularPolygon({
        x: 500-commonwidth,
        y: 420,
        sides: 3,
        radius: 55,
        fill: 'red',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:300,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle5);
      
       var triangle6 = new Kinetic.RegularPolygon({
        x: 630-commonwidth,
        y: 372,
        sides: 3,
        radius: 55,
        fill: 'red',
      /*  stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:20,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle6);
      
       var triangle7 = new Kinetic.RegularPolygon({
        x: 665-commonwidth,
        y: 248,
        sides: 3,
        radius: 55,
        fill: 'red',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:90,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle7);
      
       var triangle8 = new Kinetic.RegularPolygon({
        x: 610-commonwidth,
        y: 150,
        sides: 3,
        radius: 55,
        fill: 'red',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:45,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layertriangle.add(triangle8);
      
      //adding odd triangle to group
      
		innerOdd.add(triangle);
		innerOdd.add(triangle3);
		innerOdd.add(triangle5);
		innerOdd.add(triangle7);
       
      //adding even triangle to group
		
		innerEven.add(triangle2);
		innerEven.add(triangle4);
		innerEven.add(triangle6);
		innerEven.add(triangle8);
		
	//adding groups to layer
		layertriangle.add(innerOdd);
		layertriangle.add(innerEven);
		
	

	/*innerOdd.on('mouseout', function() {
		alert("mu");
		triangle.setFill('red');
		triangle3.setFill('red');
		triangle5.setFill('red');
		triangle7.setFill('red');
		layer.draw();
	});*/

