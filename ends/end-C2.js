(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 680,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("next page", "bold 12px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 58;
	this.text.parent = this;
	this.text.setTransform(12,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,0,3).p("AEYAAIovAA");
	this.shape.setTransform(39.7,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak2BWIAAisIJtAAIAACsgAEWBKIouAAg");
	this.shape_1.setTransform(39.9,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,-3.4,63.6,18.2);


// stage content:
(lib.endC2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/comics/comics-C2.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.button_1 = new lib.button_1();
	this.button_1.parent = this;
	this.button_1.setTransform(200.6,549.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95B83E").s().p("EgBCAgMIDFsUIjrhaIj0mHICAlgIv7m5IkHo0IA6GOIgmAGIjBqbQBdi0AlieQAri7AAkaIlaAzII0ltIBaCgIJUBmIjNDaIFhDNIAAlaIILD6IjYCtICrBUIkrD6IggCtIigCaIBTDmIg6AUIhzjUQkPAXhoBEQhWA4AAB0QAAB0A9AyQA3AtB5AAIAmh5IB0AAIg6DeIDHAAIAACnIEgBzIBzjaIMTCnIBzCaIG0BNQgtGioGIzQi4DIjRC1QisCUhaA2gAsWwwICNAAIAADAIDTiNIjgiNgAhVh1IC+AAIAAAtIjeAtgAn8i8IAagmIFnBgIh6AzgAWLstQhmlvAAk7QDRDuCIEmQCLEsAwFIIiNCgQiyjthvmRgABW09ICUB5IinAagAQL2RIBAhgIiThmIkOl0QDaB2C6CdIDUHHgAmv5+IAAhGIpnhnIJHjUIhTC0IEzCNIAACNgAnC+rIBziUIHFCaIAnFagAHk94IEmCAIhMBagA5e9RQBehDB5g9QBhgxCJg2IkHDng");
	this.shape.setTransform(355.7,136.7,0.577,0.577,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#265D94").s().p("EgPLAj/QnCi9lalbQlZlZi+nBQjEnRgBn8QABn7DEnQQC+nBFZlaQFalaHCi+QHQjEH7gBQH8ABHRDEQHAC+FaFaQFaFaC+HBQDFHQAAH7QAAH8jFHRQi+HBlaFZQlaFbnAC9QnRDFn8AAQn8AAnPjFg");
	this.shape_1.setTransform(376.9,135.8,0.577,0.577,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95B83E").s().p("EgBCAgMIDFsUIjrhaIj0mHICAlgIv7m5IkHo0IA6GOIgmAGIjBqbQBdi0AlieQAri7AAkaIlaAzII0ltIBaCgIJUBmIjNDaIFhDNIAAlaIILD6IjYCtICrBUIkrD6IggCtIigCaIBTDmIg6AUIhzjUQkPAXhoBEQhWA4AAB0QAAB0A9AyQA3AtB5AAIAmh5IB0AAIg6DeIDHAAIAACnIEgBzIBzjaIMTCnIBzCaIG0BNQgtGioGIzQi4DIjRC1QisCUhaA2gAsWwwICNAAIAADAIDTiNIjgiNgAhVh1IC+AAIAAAtIjeAtgAn8i8IAagmIFnBgIh6AzgAWLstQhmlvAAk7QDRDuCIEmQCLEsAwFIIiNCgQiyjthvmRgABW09ICUB5IinAagAQL2RIBAhgIiThmIkOl0QDaB2C6CdIDUHHgAmv5+IAAhGIpnhnIJHjUIhTC0IEzCNIAACNgAnC+rIBziUIHFCaIAnFagAHk94IEmCAIhMBagA5e9RQBehDB5g9QBhgxCJg2IkHDng");
	this.shape_2.setTransform(126,136,0.577,0.577);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#265D94").s().p("EgPLAj/QnCi9lalbQlZlZi+nBQjEnRgBn8QABn7DEnQQC+nBFZlaQFalaHCi+QHQjEH7gBQH8ABHRDEQHAC+FaFaQFaFaC+HBQDFHQAAH7QAAH8jFHRQi+HBlaFZQlaFbnAC9QnRDFn8AAQn8AAnPjFg");
	this.shape_3.setTransform(104.8,135.1,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.text = new cjs.Text("現在多重宇宙結束，\n來看看你將貓貓和狗狗的人生變得怎麼樣了吧！", "16px 'Heiti TC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 357;
	this.text.parent = this;
	this.text.setTransform(247.6,367.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.5,330.8,560.7,573.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;