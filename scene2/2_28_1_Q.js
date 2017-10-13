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
	this.shape.graphics.f("#CC9933").s().p("A7aMQQgkAAgfgKQglgNgdgcQg4gyAAhGIAAzJQAAgtAYgnQAMgTAUgRQA2gzBPAAMA21AAAQBPAAA4AzQASARANATQAXAnAAAtIAATJQAABGg2AyQgfAcglANQggAKgjAAg");
	this.shape.setTransform(194.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,157);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("A7aMQQgkAAgfgKQglgNgdgcQg4gyAAhGIAAzJQAAgtAYgnQAMgTAUgRQA2gzBPAAMA21AAAQBPAAA4AzQASARANATQAXAnAAAtIAATJQAABGg2AyQgfAcglANQggAKgjAAg");
	this.shape.setTransform(194.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,157);


// stage content:
(lib._2_28_1_Q = function(mode,startPosition,loop) {
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
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_28_cat-nag.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_29_cat-awkward.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// 文字
	this.text = new cjs.Text("「你病那麼重，可以找我幫你呀，\n還有⋯上次對不起啦⋯」", "12px 'Heiti TC'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(108.5,411.7,1.439,1.53);

	this.text_1 = new cjs.Text("「你都幾歲了怎麼還不會\n照顧自己！」", "12px 'Heiti TC'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 132;
	this.text_1.parent = this;
	this.text_1.setTransform(144.4,223.1,1.439,1.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(20));

	// A
	this.button_1 = new lib.button_1();
	this.button_1.parent = this;
	this.button_1.setTransform(239.6,255,0.843,0.634,0,0,0,194.5,95.1);
	this.button_1.shadow = new cjs.Shadow("rgba(229,153,44,1)",6,6,0);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(20));

	// B
	this.button_2 = new lib.button_2();
	this.button_2.parent = this;
	this.button_2.setTransform(239.7,443.5,0.843,0.632,0,0,0,194.6,95);
	this.button_2.shadow = new cjs.Shadow("rgba(153,102,0,1)",6,6,0);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315.6,509.7,339,298.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;