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
(lib._2_37D1 = function(mode,startPosition,loop) {
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
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_36_BE-D1.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// button_1
	this.button_1 = new lib.button_1();
	this.button_1.parent = this;
	this.button_1.setTransform(199.1,643.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(20));

	// 圖框
	this.text = new cjs.Text("時光旅行結束，\n回到未來後，\n咒語是否能消除呢？", "14px 'Heiti TC'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 129;
	this.text.parent = this;
	this.text.setTransform(147.5,302.2,1.439,1.53);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("A7aPnQgkAAgfgNQglgQgdgkQg4g/AAhaIAA4ZQAAg6AYgxQAMgZAUgWQA2hABPgBMA21AAAQBPABA4BAQASAWANAZQAXAxAAA6IAAYZQAABag2A/QgfAkglAQQggANgjAAg");
	this.shape.setTransform(240.5,340.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.1,580.4,389,417.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;