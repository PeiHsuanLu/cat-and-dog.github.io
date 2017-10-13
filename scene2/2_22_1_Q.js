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
(lib._2_22_1_Q = function(mode,startPosition,loop) {
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
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_22_cat-facepalm.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://peihsuanlu.github.io/cat-and-dog.github.io/scene2/2_24_cat-angry.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// title
	this.text = new cjs.Text("每個選擇都會造成不一樣的局面，\n形成各種多重宇宙，\n如果你是貓貓，這時你會怎麼選擇呢？", "14px 'Heiti TC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 410;
	this.text.parent = this;
	this.text.setTransform(240.5,76.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

	// 文字
	this.text_1 = new cjs.Text("「他忘記做完作業就要\n一起出去玩的嗎？」", "12px 'Heiti TC'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 138;
	this.text_1.parent = this;
	this.text_1.setTransform(147.7,412.4,1.439,1.53);

	this.text_2 = new cjs.Text(" 「他作業還沒做完，怎麼就\n答應人家了呢？真不開心！」", "12px 'Heiti TC'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 157;
	this.text_2.parent = this;
	this.text_2.setTransform(127,223.1,1.439,1.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1}]}).wait(20));

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
p.nominalBounds = new cjs.Rectangle(273.5,389.4,414.1,419.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;