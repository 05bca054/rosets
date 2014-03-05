var commonwidth=70;
//Outer Triangle object
	 var outtriangle = new Kinetic.RegularPolygon({
        x: 478-commonwidth,
        y: 100,
        sides: 3,
        radius: 80,
        fill: 'black',
       /* stroke: 'black',
        strokeWidth: 25,*/
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layeroutertriangle.add(outtriangle);
      
      //Triangle object
	 var outtriangle2 = new Kinetic.RegularPolygon({
        x: 383-commonwidth,
        y: 145,
        sides: 3,
        radius: 80,
        fill: 'black',
       /* stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:80,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layeroutertriangle.add(outtriangle2);
      
       var outtriangle3 = new Kinetic.RegularPolygon({
        x: 330-commonwidth,
        y: 240,
        sides: 3,
        radius: 80,
        fill: 'black',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:150,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layeroutertriangle.add(outtriangle3);
      
      var outtriangle4 = new Kinetic.RegularPolygon({
        x: 370-commonwidth,
        y: 363,
        sides: 3,
        radius: 80,
        fill: 'black',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:225,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
      //layeroutertriangle.add(outtriangle4);
      
      var outtriangle5 = new Kinetic.RegularPolygon({
        x: 500-commonwidth,
        y: 420,
        sides: 3,
        radius: 80,
        fill: 'black',
     /*   stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:300,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
     // layeroutertriangle.add(outtriangle5);
      
       var outtriangle6 = new Kinetic.RegularPolygon({
        x: 630-commonwidth,
        y: 372,
        sides: 3,
        radius: 80,
        fill: 'black',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:20,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
    //  layeroutertriangle.add(outtriangle6);
      
       var outtriangle7 = new Kinetic.RegularPolygon({
        x: 665-commonwidth,
        y: 248,
        sides: 3,
        radius: 80,
        fill: 'black',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:90,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
    //  layeroutertriangle.add(outtriangle7);
      
       var outtriangle8 = new Kinetic.RegularPolygon({
        x: 610-commonwidth,
        y: 150,
        sides: 3,
        radius: 80,
        fill: 'black',
        /*stroke: 'black',
        strokeWidth: 25,*/
        rotationDeg:45,
        draggable:true,
        //lineJoin: 'bevel'
      });
      
     // layeroutertriangle.add(outtriangle8);
      
        //adding odd triangle to group
      
		outerOdd.add(outtriangle);
		outerOdd.add(outtriangle3);
		outerOdd.add(outtriangle5);
		outerOdd.add(outtriangle7);
       
      //adding even triangle to group
		
		outerEven.add(outtriangle2);
		outerEven.add(outtriangle4);
		outerEven.add(outtriangle6);
		outerEven.add(outtriangle8);
		
	//adding groups to layer
		layeroutertriangle.add(outerOdd);
		layeroutertriangle.add(outerEven);
