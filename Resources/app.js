var NavigationController = require('navigation-controller').NavigationController;
var navController = new NavigationController();

var baseWindow = navController.buildWindow({
	title: 'Bug list'
});

var tableView = Titanium.UI.createTableView();

var bugList = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + 'bugs').getDirectoryListing();

tableView.data = bugList.map(function(path){
	return {title: path.replace('.js','')};
});

tableView.addEventListener('click',function(e){
	var newWindow = navController.buildWindow({
		title: e.rowData.title
	});
	require('bugs/' + e.rowData.title).build({ navController: navController, thisWindow: newWindow });
	navController.open(newWindow);
});

baseWindow.add(tableView);

navController.open(baseWindow);