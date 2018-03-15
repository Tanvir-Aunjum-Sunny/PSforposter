#include json2.js

var obj = loadJson('textput.json');

var titleGroup = app.activeDocument.layers.getByName('topbar');

var titleLayer = titleGroup.layers[0];

titleLayer.textItem.contents = obj.topbar;


function loadJson(relpath){
	var script = new File($.fileName);
	var jsonFile = new File(script.path+'/'+relpath);

	jsonFile.open('r');
	var str = jsonFile.read();
	jsonFile.close();
}

saveJpeg('poster1');

function saveJpeg(name){
	var doc = app.activeDocument;
	var file = new File(doc.path+'/'+name+'.jpg');
	var opts = new JPEGSaveOptions();
	opts.quality = 10;

	doc.saveAs(file,opts,true);
}