var thisWindow;

exports.build = function(inArgs){
	thisWindow = inArgs.thisWindow;
	
	var counter = 1;
	
	// android only
	// in 1.7 the code below is fired (correctly) once
	// in 1.8 it is fired twice
	
	thisWindow.layout = 'vertical';
	thisWindow.addEventListener('open',function(){
		thisWindow.add(Titanium.UI.createLabel({
			top: 10,
			height: 40,
			left: 10,
			font: { fontSize: 20 },
			text: counter
		}));
		counter++;
	});
};
