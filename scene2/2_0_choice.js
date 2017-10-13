(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 630,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.button_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCA58C").s().p("AnNHOQjAjAAAkOQAAkODAi/QC/jAEOAAQEOAADADAQDAC/AAEOQAAEOjADAQjADAkOAAQkOAAi/jAg");
	this.shape.setTransform(65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.9,130.9);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDB094").s().p("AnNHOQjAjAAAkOQAAkODAi/QC/jAEOAAQEOAADADAQDAC/AAEOQAAEOjADAQjADAkOAAQkOAAi/jAg");
	this.shape.setTransform(65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.9,130.9);


// stage content:
(lib._2_0_choice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_19_cat-dog-working.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_1_dog-invite.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// 文字
	this.text = new cjs.Text("幸虧小魔女還有留下記錄狗狗和貓貓的影像日記，\n你想先從誰的看起呢？", "16px 'Heiti TC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 352;
	this.text.parent = this;
	this.text.setTransform(240,139.3);

	this.text_1 = new cjs.Text("狗狗\n視角", "18px 'Heiti TC'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(107.8,320.4,1.439,1.53);

	this.text_2 = new cjs.Text("貓貓\n視角", "18px 'Heiti TC'");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 42;
	this.text_2.parent = this;
	this.text_2.setTransform(327.5,320.4,1.439,1.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(20));

	// 狗狗按鈕
	this.button_2 = new lib.button_2();
	this.button_2.parent = this;
	this.button_2.setTransform(134.9,351.1,1.183,1.183,0,0,0,65.5,65.5);
	this.button_2.shadow = new cjs.Shadow("rgba(157,127,107,1)",0,6,0);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(20));

	// 貓貓按鈕
	this.button_1 = new lib.button_1();
	this.button_1.parent = this;
	this.button_1.setTransform(352.8,351.1,1.183,1.183,0,0,0,65.5,65.5);
	this.button_1.shadow = new cjs.Shadow("rgba(142,131,111,1)",0,6,0);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.4,452.3,381,303.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;