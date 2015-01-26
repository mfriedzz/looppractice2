$(document).on('ready', function() {
  
  //exercise #1
  // var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  // for(var i=0; i<animals.length; i++) {
  // 	console.log(animals[i]);
  // }

  //Exercise # 2
//   var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
//   for(var i=0; i<(animals.length); i=i+2) {
//   	console.log(animals[i]);
//   }

// });

//exercise # 3

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  
//   console.log (animals.reverse());
//   });

//exercise #4


  var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  for(var i=0; i<(animals.length-1); i++) {
  	if ( i < 1){ 
  		console.log("got here", i);
  	 console.log(animals[i]);
  	 	}else{
  	 		console.log(animals[i], animals[i]);
  	 	}

  	 	// for (var x=i; i < (animals.length-1); i++)
  	 	// {
  	 	// 	console.log(animals[i], animals[i]);
  	 	// }

  }
  		console.log(animals[animals.length-1]);
});