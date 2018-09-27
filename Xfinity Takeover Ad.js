(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Xfinity Takeover Ad_atlas_", frames: [[2873,0,312,600],[3187,0,312,600],[0,0,2871,1007]]}
];


// symbols:



(lib.LeftArmUp2 = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LeftArmUp = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.RMCBSStandard = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.RodButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LeftArmUp();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.instance_1 = new lib.LeftArmUp2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,5,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,450);


// stage content:
(lib.XfinityTakeoverAd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		/* Mouse Over Event
		Mousing over the symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is moused over.
		frequency is the number of the times event should be triggered.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.Rod_Button.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			// Start your custom code
			// This example code displays the words "Moused over" in the Output panel.
			this.gotoAndPlay(2);
			// End your custom code
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(18).call(this.frame_29).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgVqgr1MArVAAAMAAABXrMgrVAAAg");
	this.shape.setTransform(474,300,1.081,1.069);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Logo
	this.instance = new lib.RMCBSStandard();
	this.instance.parent = this;
	this.instance.setTransform(344,22,0.091,0.091);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1oQuMAAAghbMArRAAAMAAAAhbg");
	var mask_graphics_15 = new cjs.Graphics().p("AEfZKMAAAgyTMArTAAAMAAAAyTg");
	var mask_graphics_16 = new cjs.Graphics().p("AEfZKMAAAgyTMArTAAAMAAAAyTg");
	var mask_graphics_17 = new cjs.Graphics().p("AEfZKMAAAgyTMArTAAAMAAAAyTg");
	var mask_graphics_18 = new cjs.Graphics().p("AEfZjMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_19 = new cjs.Graphics().p("AEfbSMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_20 = new cjs.Graphics().p("AEfdCMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_21 = new cjs.Graphics().p("AEfexMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_22 = new cjs.Graphics().p("EAEfAghMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_23 = new cjs.Graphics().p("EAEfAiQMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_24 = new cjs.Graphics().p("EAEfAkAMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_25 = new cjs.Graphics().p("EAEfAlvMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_26 = new cjs.Graphics().p("EAEfAnfMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_27 = new cjs.Graphics().p("EAEfApOMAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_28 = new cjs.Graphics().p("EAEfAq+MAAAgyUMArTAAAMAAAAyUg");
	var mask_graphics_29 = new cjs.Graphics().p("EAEfAstMAAAgyUMArTAAAMAAAAyUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:485.5,y:171.2}).wait(15).to({graphics:mask_graphics_15,x:305.8,y:99}).wait(1).to({graphics:mask_graphics_16,x:305.8,y:121.3}).wait(1).to({graphics:mask_graphics_17,x:305.8,y:143.6}).wait(1).to({graphics:mask_graphics_18,x:305.8,y:163.5}).wait(1).to({graphics:mask_graphics_19,x:305.8,y:174.6}).wait(1).to({graphics:mask_graphics_20,x:305.8,y:185.8}).wait(1).to({graphics:mask_graphics_21,x:305.8,y:196.9}).wait(1).to({graphics:mask_graphics_22,x:305.8,y:208.1}).wait(1).to({graphics:mask_graphics_23,x:305.8,y:219.2}).wait(1).to({graphics:mask_graphics_24,x:305.8,y:230.4}).wait(1).to({graphics:mask_graphics_25,x:305.8,y:241.5}).wait(1).to({graphics:mask_graphics_26,x:305.8,y:252.7}).wait(1).to({graphics:mask_graphics_27,x:305.8,y:263.8}).wait(1).to({graphics:mask_graphics_28,x:305.8,y:275}).wait(1).to({graphics:mask_graphics_29,x:305.8,y:286.1}).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00254A").s().p("AgnCgIApjyIhNAXIAKg2ICFguIAIAAIg2E/g");
	this.shape_1.setTransform(590.8,542.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00254A").s().p("AgWCiQgbAAgWgMQgWgMgMgWQgMgVgBgaIA9AAQABATAKAMQAKALARAAQAVABAOgRQAOgRADgcQADgZgKgPQgLgNgUgBQgXAAgUARIgygNIArihICuAAIgJA1Ih6AAIgVBFQAUgMAZAAQAqAAAWAdQAXAcgEAwQgDAfgPAaQgQAZgaANQgZANgcAAIgEAAg");
	this.shape_2.setTransform(567.3,543.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00254A").s().p("Ah1CgIChkMIiYAAIAIgzIDaAAIgFAnIiiEYg");
	this.shape_3.setTransform(544.1,543);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00254A").s().p("AgTCkQgsAAgagZQgbgZACgoQADg1A8gaQgggaACgpQABgcAPgVQAOgVAZgLQAYgLAcAAQAqABAYAYQAZAYgDAnQgDAvg0AaQATAMAJAUQAKATgCAWQgCArghAaQgfAagsAAIgEgBgAghAjQgPANgDAVQgCATAJAMQAJANASAAQAUAAAOgNQAOgNADgVQACgTgJgMQgJgNgSAAIAAAAQgUAAgNANgAgFhlQgMAMgDAUQgCARAIAMQAHALAPABQARAAAMgMQAMgNADgUQACgSgIgKQgIgLgPAAIgBAAQgQAAgLALg");
	this.shape_4.setTransform(518.4,543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00254A").s().p("AgXAZQgLgJAAgPQgBgOALgKQAJgJAPgBQAOAAAKAJQALAJAAAPQABAOgLAKQgJAKgPAAIgBAAQgOAAgJgJg");
	this.shape_5.setTransform(498.2,555.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00254A").s().p("AgWCiQgbAAgWgMQgWgMgMgWQgMgVgBgaIA9AAQABATAKAMQAKALARAAQAVABAOgRQAOgRADgcQADgZgKgPQgLgNgUgBQgXAAgUARIgygNIArihICuAAIgJA1Ih6AAIgVBFQAUgMAZAAQAqAAAWAdQAXAcgEAwQgDAfgPAaQgQAZgaANQgZANgcAAIgEAAg");
	this.shape_6.setTransform(482.8,543.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00254A").s().p("AgXClQgpgCgXgbQgWgbgBgxQAAgQACgRIAJg6QAKhCAgghQAggjAwABQAqACAWAbQAXAbABAxQAAAQgCAQIgJA7QgLBBgfAjQgfAhgvAAIgDAAgAgjgtIgLBJQgEAYAAAPQgBAtAgABQArADAMhIIAMhOQADgTAAgOQAAgsgfgBIgCAAQgpAAgMBDg");
	this.shape_7.setTransform(458.3,543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00254A").s().p("AgTCkQgsAAgagZQgbgZACgoQADg1A8gaQgggaACgpQABgcAPgVQAOgVAZgLQAYgLAcAAQAqABAYAYQAZAYgDAnQgDAvg0AaQATAMAJAUQAKATgCAWQgCArghAaQgfAagsAAIgEgBgAghAjQgPANgDAVQgCATAJAMQAJANASAAQAUAAAOgNQAOgNADgVQACgTgJgMQgJgNgSAAIAAAAQgUAAgNANgAgFhlQgMAMgDAUQgCARAIAMQAHALAPABQARAAAMgMQAMgNADgUQACgSgIgKQgIgLgPAAIgBAAQgQAAgLALg");
	this.shape_8.setTransform(433.9,543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00254A").s().p("AgXAZQgLgJAAgPQgBgOALgKQAJgJAPgBQAOAAAKAJQALAJAAAPQAAAOgKAKQgJAKgPAAIgBAAQgOAAgJgJg");
	this.shape_9.setTransform(413.7,555.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00254A").s().p("AgUCkQgrAAgbgZQgbgaABgpIA9AAQAAASAKALQALAMASAAQAVAAAPgMQAQgNACgUQADgXgKgLQgLgMgVAAIgkgBIAHgwIAeAAQAWAAAPgNQAPgMADgVQACgSgJgLQgJgKgSgBQgSAAgMAKQgNAKgDAQIg+ABQACgnAggYQAfgZAsAAQAtABAaAYQAbAZgDAoQgDAug3AaQAWAJAKATQAKATgCAXQgBAdgQAWQgRAWgbAMQgaAMgdAAIgDgBg");
	this.shape_10.setTransform(397.3,543);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00254A").s().p("AgXClQgpgCgXgbQgWgbgBgxQAAgQACgRIAJg6QAKhCAgghQAggjAwABQAqACAWAbQAXAbABAxQAAAQgCAQIgJA7QgLBBgfAjQgfAhgvAAIgDAAgAgjgtIgLBJQgEAYAAAPQgBAtAgABQArADAMhIIAMhOQADgTAAgOQAAgsgfgBIgCAAQgpAAgMBDg");
	this.shape_11.setTransform(373.8,543);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00254A").s().p("AgUCkQgrAAgbgZQgbgaABgpIA9AAQAAASAKALQALAMASAAQAVAAAPgMQAQgNACgUQADgXgKgLQgLgMgVAAIgkgBIAHgwIAeAAQAWAAAPgNQAPgMADgVQACgSgJgLQgJgKgSgBQgSAAgMAKQgNAKgDAQIg+ABQACgnAggYQAfgZAsAAQAtABAaAYQAbAZgDAoQgDAug3AaQAWAJAKATQAKATgCAXQgBAdgQAWQgRAWgbAMQgaAMgdAAIgDgBg");
	this.shape_12.setTransform(348.9,543);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE82B4").s().p("AgHBBQgCgCAAgEQAAgFACgDQADgDAEAAQAFAAADADQACADAAAFQAAAEgCACQgDADgFAAQgEAAgDgDgAgIAcIAAhfIARAAIgCBfg");
	this.shape_13.setTransform(602.2,506.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgGQAKgHALAAQAUAAALANQALANAAAYIAAAFIhDAAQAAAQAIAJQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCAOIAxAAIAAgBQAAgOgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_14.setTransform(594.7,508.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_15.setTransform(586.2,507.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE82B4").s().p("AgfAsQgKgJAAgNQAAgPANgIQALgJAVAAIARAAIAAgHQAAgKgFgFQgGgGgKABQgJgBgGAFQgGAFAAAGIgRAAQgBgHAGgHQAFgHAKgEQAIgEAKAAQASAAAKAIQAKAJAAAQIAAAtQAAAOAEAHIAAACIgSAAQgCgDgBgIQgMANgQAAQgOAAgKgIgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAHgEQAHgFAEgGIAAgVIgNAAQgfAAAAATg");
	this.shape_16.setTransform(578.2,508.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE82B4").s().p("AA1AzIAAhBQAAgLgFgGQgFgEgLAAQgKgBgGAGQgGAFgBAKIAABCIgRAAIAAhBQAAgWgVABQgRgBgGAOIAABJIgRAAIAAhkIAQAAIAAAMQALgNATAAQAVAAAHAQQAFgIAIgEQAIgEALAAQAhAAAAAjIAABCg");
	this.shape_17.setTransform(564.7,508.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE82B4").s().p("AgIBFIAAhkIAQAAIAABkgAgHgyQgCgEAAgDQAAgEACgEQADgCAEAAQAFAAADACQACAEAAAEQAAADgCAEQgDACgFAAQgEAAgDgCg");
	this.shape_18.setTransform(554.1,506.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_19.setTransform(548.4,507.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE82B4").s().p("AgTAvQgJgEgGgHQgFgIAAgJIARAAQABAJAGAFQAHAFAJAAQAKAAAGgEQAGgEAAgGQAAgHgGgFQgFgEgMgCQgNgDgHgDQgIgDgEgGQgEgGAAgHQAAgMALgJQAKgIAQAAQARAAAKAIQALAKAAANIgRAAQAAgHgGgFQgGgFgJAAQgJAAgFAEQgFAEAAAGQAAAHAFADQAEADAMADQANADAIAEQAIADAEAGQAEAFAAAIQAAAOgLAIQgLAIgRAAQgLAAgJgFg");
	this.shape_20.setTransform(540.7,508.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE82B4").s().p("AgqBEIAAiHIBUAAIAAAPIhCAAIAAArIA5AAIAAAOIg5AAIAAAwIBDAAIAAAPg");
	this.shape_21.setTransform(530.9,506.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgGQAKgHALAAQAUAAALANQALANAAAYIAAAFIhDAAQAAAQAIAJQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCAOIAxAAIAAgBQAAgOgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_22.setTransform(515.4,508.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgGQAKgHALAAQAUAAALANQALANAAAYIAAAFIhDAAQAAAQAIAJQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCAOIAxAAIAAgBQAAgOgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_23.setTransform(505.4,508.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE82B4").s().p("AgXAzIAAhkIAQAAIABAMQAHgNAQAAIAHABIAAAQIgIgBQgQABgGAOIAABGg");
	this.shape_24.setTransform(497.5,508.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE82B4").s().p("AgpBEIAAiHIBTAAIAAAPIhBAAIAAAvIA4AAIAAANIg4AAIAAA8g");
	this.shape_25.setTransform(489.1,506.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EE82B4").s().p("AgXAzIAAhkIAQAAIABAMQAHgNAQAAIAHABIAAAQIgIgBQgQABgGAOIAABGg");
	this.shape_26.setTransform(475.9,508.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EE82B4").s().p("AgeAqQgJgKAAgSIAAhAIASAAIAABAQAAAXASAAQATAAAGgPIAAhIIARAAIAABjIgQAAIAAgKQgKAMgTAAQgQAAgIgJg");
	this.shape_27.setTransform(467,508.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgLQAGgMAKgHQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAPgGAMQgGALgKAHQgLAGgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIALQAIAKAMAAQANAAAIgKQAHgKAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_28.setTransform(456.4,508.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EE82B4").s().p("AgeBHIgGgCIAAgOIAFAAQAIABAFgEQAFgDADgKIAEgKIgkhjIATAAIAYBLIAXhLIATAAIgpBzQgIAZgUABg");
	this.shape_29.setTransform(446.4,510.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE82B4").s().p("AgXAzIAAhkIAQAAIABAMQAHgNAQAAIAHABIAAAQIgIgBQgQABgGAOIAABGg");
	this.shape_30.setTransform(434.5,508.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgLQAGgMAKgHQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAPgGAMQgGALgKAHQgLAGgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIALQAIAKAMAAQANAAAIgKQAHgKAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_31.setTransform(425.4,508.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EE82B4").s().p("AgNBIIAAhWIgQAAIAAgNIAQAAIAAgKQAAgRAIgIQAIgJAQAAQAGAAAFABIAAAOIgKgBQgIAAgFAFQgEAFAAAJIAAALIAVAAIAAANIgVAAIAABWg");
	this.shape_32.setTransform(417,506.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE82B4").s().p("AAYAyIgYhLIgXBLIgOAAIgdhjIARAAIAUBKIAXhKIANAAIAYBMIAThMIARAAIgdBjg");
	this.shape_33.setTransform(401.5,508.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgLQAGgMAKgHQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAPgGAMQgGALgKAHQgLAGgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIALQAIAKAMAAQANAAAIgKQAHgKAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_34.setTransform(389,508.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE82B4").s().p("AAWAzIAAhCQAAgKgEgGQgGgEgKAAQgHgBgGAFQgHAEgEAIIAABGIgQAAIAAhkIAPAAIABANQAMgOASAAQAfAAAAAjIAABCg");
	this.shape_35.setTransform(378.4,508.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_36.setTransform(366.2,506.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_37.setTransform(361.6,506.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE82B4").s().p("AgfAsQgJgJAAgNQgBgPAMgIQANgJAUAAIARAAIAAgHQAAgKgGgFQgFgGgKABQgIgBgHAFQgGAFAAAGIgRAAQAAgHAFgHQAGgHAIgEQAKgEAJAAQASAAAJAIQAKAJABAQIAAAtQAAAOADAHIAAACIgSAAQgBgDgBgIQgMANgPAAQgQAAgJgIgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAIgEQAGgFAEgGIAAgVIgOAAQgeAAAAATg");
	this.shape_38.setTransform(354.1,508.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE82B4").s().p("AglA0QgOgRAAgdIAAgLQAAgUAHgOQAGgOANgHQAMgJAQABQAVgBANAMQANANACAVIgSAAQgCgQgIgIQgIgHgNAAQgQAAgKANQgKANAAAXIAAAMQAAAWAJANQAKANAPAAQAPAAAHgHQAJgHACgRIASAAQgDAWgMAMQgOALgWAAQgXAAgPgRg");
	this.shape_39.setTransform(342.9,506.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(30));

	// Services
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAGgHAHgFQAGgEAJAAQAPAAAJAKQAIAJAAAVIAAAqIAOADIAAAQg");
	this.shape_40.setTransform(514.5,459.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00254A").s().p("AgiAmQgMgOAAgXIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_41.setTransform(503.1,459.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_42.setTransform(494.8,457);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAyQAAAGACADQACACAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_43.setTransform(488.1,458.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXgBIAMAAIAAgKQAAgHgEgEQgEgDgIAAIgIABIgFACIgCALIgVAAIAAgWQAIgFAJgEQAKgDALAAQASAAAMAJQALAJAAARIAAAoIAAAFIABAEIAIABIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgIgIgAgPAMQgEAEAAAFQAAAFADADQAEADAFAAQAGAAAEgCQAFgEADgDIAAgQIgMAAQgJAAgFAFg");
	this.shape_44.setTransform(479.6,459.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_45.setTransform(471.1,457);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_46.setTransform(462.1,459.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00254A").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEAOQACACAEABIAJABQAHgBAFgCQAEgEAAgEQAAgFgEgDQgFgDgKgDQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKAEAGAEIABAZIgTAAIgDgNIgHgDQgEgBgFAAQgGAAgEADQgEADAAAFQAAAEAEADQAEADALACQASAEAJAGQAJAIAAAMQAAAOgLAIQgMAJgSAAQgMAAgJgDg");
	this.shape_47.setTransform(451.5,459.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAFgHAHgFQAHgEAJAAQAQAAAIAKQAJAJAAAVIAAAqIAMADIAAAQg");
	this.shape_48.setTransform(440.5,459.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00254A").s().p("AgbBDIAAgPIAPgEIAAhgIgPgCIAAgRIA3AAIAAARIgOACIAABgIAOAEIAAAPg");
	this.shape_49.setTransform(431.2,457.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00254A").s().p("AgeAmQgNgOAAgXIAAgCQAAgWANgOQAMgOAXAAQAMAAAJAEQAKADAGAGIABAcIgWAAIgFgRIgFgCQgDgCgDABQgLAAgFAIQgEAJAAAMIAAACQAAAOAEAIQAEAIAKAAQAHAAAFgEQAEgFAAgHIAZAAIAAABQAAAPgLALQgMAKgSAAQgVAAgMgOg");
	this.shape_50.setTransform(418.2,459.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_51.setTransform(410.2,457);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAyQAAAGACADQACACAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_52.setTransform(403.5,458.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAyQAAAGACADQACACAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_53.setTransform(396.4,458.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00254A").s().p("AASBDIAAgPIAKgDIgGgSIgrAAIgGASIAJADIAAAPIguAAIAAgPIAKgCIAph1IAbAAIApB1IAKACIAAAPgAgOALIAdAAIgPguIAAAAg");
	this.shape_54.setTransform(386.1,457.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EE82B4").s().p("AgnAvIgDgGQgGgNgFgHQgEgFgHgDQALgKAIAAQAHAAAJATIADAGQAPgaAYgYQAZgYAXgOIADAFQgTAOgZAgQgXAegNAbIgGAFIgNAIIgEgOg");
	this.shape_55.setTransform(367.5,455.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_56.setTransform(519.6,418.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_57.setTransform(512.4,416);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQALgGAWgBIANAAIAAgKQAAgGgEgEQgEgEgHAAIgIABIgHACIgBALIgUAAIAAgWQAHgGAKgDQAJgDAMAAQARAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOALQgFAFAAAFQAAAFADADQADADAGAAQAGAAAFgDQAFgDACgDIAAgQIgNAAQgIAAgEAEg");
	this.shape_58.setTransform(504.3,418.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgPgCIAAgRIAoAAIABAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPAAAXIAAACQAAAWgKANQgKAOgSAAQgIAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgFADgCAEIAAArQACAEAFADQADACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgDACg");
	this.shape_59.setTransform(493,420);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_60.setTransform(482.3,418.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00254A").s().p("AAvBDQgOABgEgIQgGgHAAgLIAAgIQAAgJgFgGQgGgGgJAAIgWAAIAAAjIAPADIAAAQIg4AAIAAgQIAOgDIAAhgIgOgCIAAgRIAOAAIAuAAQAXAAANALQANALAAASQAAAKgGAIQgFAIgKADQAMAEAFAHQAFAJAAAMIAAAHQAAAEABADQACACAEAAIAEABIAAAQgAgTgHIATAAQAKAAAGgFQAGgFAAgJQAAgJgGgFQgFgGgLABIgTAAg");
	this.shape_61.setTransform(470.8,416.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_62.setTransform(454.5,418.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00254A").s().p("AgIA4QgHgIAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgHg");
	this.shape_63.setTransform(445.9,417.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_64.setTransform(437.3,418.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIAEABIgDAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_65.setTransform(428.5,418.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00254A").s().p("AgeAmQgNgOAAgXIAAgCQAAgVANgPQAMgOAXAAQAMAAAJAEQAKADAGAHIABAbIgWAAIgFgRIgFgCQgDgBgDAAQgLgBgFAJQgEAJAAAMIAAACQAAAOAEAIQAEAIAKAAQAHAAAFgEQAEgFAAgGIAZAAIAAAAQAAAQgLAKQgMAKgSAAQgVAAgMgOg");
	this.shape_66.setTransform(419.2,418.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgqQAAgLgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIACAOQAFgHAGgFQAHgEAJAAQAQAAAIAJQAJAKAAAVIAAAqIANADIAAAQg");
	this.shape_67.setTransform(408.3,418.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_68.setTransform(396.9,418.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00254A").s().p("AgmAyQgRgSAAgeIAAgEQAAgdARgTQASgSAaAAQAQAAAMAFQANAGAJAJIAAAbIgVAAIgDgSQgDgEgHgCQgFgDgJAAQgQAAgKANQgKANAAAUIAAAEQAAAVAKANQAKAMAPAAQAJAAAGgBQAHgDADgEIADgSIAVAAIAAAbQgJAJgNAGQgMAGgQgBQgaABgSgUg");
	this.shape_69.setTransform(385.3,416.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EE82B4").s().p("AgnAvIgDgGQgGgNgFgHQgEgGgHgCQALgKAIAAQAHAAAJATIADAHQAPgbAYgYQAZgZAXgNIADAFQgTAOgZAgQgXAegNAbIgGAFIgNAIIgEgOg");
	this.shape_70.setTransform(367.5,414.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgRIAmAAIABAPQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgLAAQgGAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_71.setTransform(549.6,377.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_72.setTransform(542.3,374.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgHAXAAIAMAAIAAgKQAAgGgEgEQgEgEgIgBIgHACIgGACIgCALIgVAAIAAgWQAIgGAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAGgCACgEIAAgPIgMAAQgJAAgFADg");
	this.shape_73.setTransform(534.2,377.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAoAAIABAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgLAOgRAAQgJAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgFADgCAEIAAArQACAEAFADQADACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgDACg");
	this.shape_74.setTransform(523,379);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_75.setTransform(512.2,377.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00254A").s().p("AAvBDQgOABgEgIQgGgHAAgLIAAgIQAAgJgGgGQgEgGgKAAIgWAAIAAAkIAPACIAAAQIg4AAIAAgQIAOgCIAAhhIgOgCIAAgRIAOAAIAuAAQAXAAANALQANALAAASQAAAKgGAIQgFAIgLADQAMAEAGAHQAFAJAAAMIAAAHQAAAEABADQACACAFAAIADABIAAAQgAgTgHIATAAQALAAAFgFQAGgFAAgJQAAgJgGgFQgFgGgLAAIgTAAg");
	this.shape_76.setTransform(500.8,375.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_77.setTransform(484.4,377.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00254A").s().p("AgeAmQgNgOAAgXIAAgBQAAgXANgOQAMgOAXAAQAMAAAJAEQAKADAGAHIABAbIgWAAIgFgRIgFgCQgDgBgDAAQgLgBgFAJQgEAJAAANIAAABQAAANAEAJQAEAIAKAAQAHAAAFgEQAEgFAAgGIAZAAIAAAAQAAAPgLALQgMAKgSAAQgVAAgMgOg");
	this.shape_78.setTransform(474.4,377.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgHAXAAIAMAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgFACIgCALIgVAAIAAgWQAIgGAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAFgCADgEIAAgPIgMAAQgJAAgFADg");
	this.shape_79.setTransform(464.4,377.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_80.setTransform(453.1,379);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00254A").s().p("AgcBBQgNgGgIgJIAAgcIAUAAIAEATQAEADAHADQAHACAIAAQAKAAAGgEQAGgFAAgIQAAgIgGgEQgFgFgNgEQgYgHgMgIQgMgLAAgQQgBgRAOgKQAOgKAVAAQAPAAANAEQAMAFAKAIIAAAcIgVAAIgEgTIgKgEQgGgBgIgBQgLABgFAEQgHAFABAHQAAAHAGAEQAGAFAPAFQAWAGAMAJQAMAKgBARQABARgOAKQgOAKgWAAQgQAAgNgEg");
	this.shape_81.setTransform(441.9,375.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_82.setTransform(428.3,374.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00254A").s().p("AATAyIgTg6IAAAAIgSA6IgWAAIgWhSIgKgBIAAgQIAuAAIAAAQIgLACIAKAtIAAAAIATg/IARAAIATA/IABAAIAJgtIgLgCIAAgQIAuAAIAAAQIgKABIgVBSg");
	this.shape_83.setTransform(417.6,377.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgHAXAAIAMAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgFACIgCALIgVAAIAAgWQAIgGAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAFgCADgEIAAgPIgMAAQgJAAgFADg");
	this.shape_84.setTransform(405,377.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgRIAmAAIABAPQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_85.setTransform(395.8,377.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00254A").s().p("AgmAyQgRgSAAgdIAAgFQAAgdARgSQASgTAaAAQAQAAAMAFQANAGAJAJIAAAbIgVAAIgDgSQgDgEgHgDQgFgCgJAAQgQAAgKANQgKANAAAUIAAAFQAAAUAKANQAKAMAPABQAJgBAGgBQAHgDADgEIADgSIAVAAIAAAbQgJAJgNAGQgMAGgQgBQgaABgSgUg");
	this.shape_86.setTransform(385.3,375.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE82B4").s().p("AgnAvIgDgGQgGgNgFgHQgEgFgHgDQALgKAIAAQAHAAAJATIADAHQAPgbAYgYQAZgZAXgNIADAEQgTAQgZAfQgXAegNAbIgGAFIgNAIIgEgOg");
	this.shape_87.setTransform(367.5,373.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00254A").s().p("AgQBFQgJgCgHgEIAFgTIANAFQAGACAHAAQAJAAAFgHQAFgGAAgKIAAgHQgEAGgGADQgGADgHAAQgTAAgKgOQgKgNAAgWIAAgCQAAgXAKgPQAKgOATAAQAIAAAGADQAGAEAFAHIACgNIAXAAIAABhQAAAUgMAMQgNALgUAAQgIAAgIgCgAgNgpQgEAJAAAOIAAACQAAAOAEAGQAFAIAJAAQAGAAAEgDQAFgCACgEIAAgrQgCgEgFgDQgEgCgGAAQgJAAgFAIg");
	this.shape_88.setTransform(598.9,338);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgqQAAgKgEgFQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIACAPQAEgIAIgEQAGgEAJAAQAPAAAJAJQAIAKAAAVIAAAqIAOADIAAAQg");
	this.shape_89.setTransform(587.6,336);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_90.setTransform(578.5,333.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00254A").s().p("AgeBJIAAgQIAMgDIAAg9IgOAAIAAgTIAOAAIAAgLQAAgRAKgJQAJgJARAAIAHAAIAIACIgCAUIgEgBIgFAAQgHAAgDADQgEAEAAAHIAAALIAVAAIAAATIgVAAIAAA9IAOADIAAAQg");
	this.shape_91.setTransform(572.3,333.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKAAQgKAAgEAJg");
	this.shape_92.setTransform(563.1,336.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKAAQgKAAgEAJg");
	this.shape_93.setTransform(552.4,336.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg+IgPgCIAAgRIAnAAIACAPQADgIAGgEQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_94.setTransform(543.3,336);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPAAAXIAAACQAAAWgKANQgLAOgSAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgDADgDAEIAAArQADAEADADQAEACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgEACg");
	this.shape_95.setTransform(533.3,337.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIABAPQAEgIAFgEQAGgEAIAAIAEAAIADABIgCAYIgLAAQgGAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_96.setTransform(523.8,336);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_97.setTransform(514.5,336.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00254A").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_98.setTransform(505.9,335);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgHAVAAIANAAIAAgJQAAgIgEgDQgEgFgIAAIgIABIgGADIgBALIgVAAIAAgXQAIgFAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgBgGQgFAGgHADQgGAEgJAAQgPAAgJgIgAgOALQgFAFAAAFQAAAFADADQADADAHAAQAGAAADgDQAFgCADgFIAAgOIgNAAQgIAAgEADg");
	this.shape_99.setTransform(497.4,336.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00254A").s().p("AAZBEIgYhZIgBAAIgYBZIgZAAIgch1IgLgBIAAgQIAyAAIAAAQIgMACIAPBJIABAAIAZhbIATAAIAaBbIAAAAIAQhJIgNgCIAAgQIAyAAIAAAQIgLABIgcB1g");
	this.shape_100.setTransform(482.8,334.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00254A").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_101.setTransform(465.4,335);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgKgEgFQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgOgCIAAgRIAnAAIABAPQAGgIAHgEQAGgEAJAAQAPAAAJAJQAIAKABAVIAAAqIAMADIAAAQg");
	this.shape_102.setTransform(455.9,336);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_103.setTransform(444.8,336.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00254A").s().p("AAiAzIAAgQIALgDIAAgpQAAgMgDgEQgEgEgHAAQgGAAgEADQgFACgCAFIAAADIAAACIAAAuIALADIAAAQIgwAAIAAgQIALgDIAAgpQAAgLgEgFQgDgEgIAAQgFAAgEACQgEACgDAEIAAA1IAMADIAAAQIg0AAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIABAOQAFgHAHgEQAIgEAJAAQAKAAAGAEQAGAEAEAJQAFgIAHgEQAIgFAKAAQAOAAAJAKQAJALAAAUIAAApIANADIAAAQg");
	this.shape_104.setTransform(430.9,336);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_105.setTransform(417,336.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00254A").s().p("AgVAwQgKgDgIgGIAAgWIATAAIAEAMQACACAEACIAJABQAHAAAFgEQAEgCAAgGQAAgEgEgDQgFgDgKgDQgSgDgJgHQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKAEAGAEIABAZIgTAAIgDgMIgHgEQgEgBgFgBQgGAAgEAEQgEADAAAEQAAAFAEADQAEADALADQASADAJAGQAJAIAAAMQAAAOgLAJQgMAIgSAAQgMAAgJgEg");
	this.shape_106.setTransform(407.3,336.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgHAXAAIAMAAIAAgJQAAgIgEgDQgEgFgIAAIgIABIgFADIgCALIgVAAIAAgXQAIgFAJgDQAKgDALAAQASAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgIgIgAgPALQgEAFAAAFQAAAFADADQAEADAFAAQAGAAAEgDQAFgCADgFIAAgOIgMAAQgJAAgFADg");
	this.shape_107.setTransform(397.2,336.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00254A").s().p("Ag5BEIAAgRIAPgCIAAhhIgPgCIAAgQIAPAAIAsAAQAYgBAOAJQANAKAAASQAAAKgFAHQgFAIgJADQAMACAGAIQAGAJAAALQAAAUgNAKQgNAKgXAAgAgPAvIAYAAQALAAAFgFQAGgFAAgJQAAgKgFgFQgFgFgKAAIgaAAgAgPgKIASAAQALAAAGgEQAGgFAAgJQAAgJgGgEQgGgFgMAAIgRAAg");
	this.shape_108.setTransform(385.5,334.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EE82B4").s().p("AgnAvIgDgGQgGgNgFgHQgEgFgHgDQALgKAIAAQAHAAAJATIADAHQAPgaAYgZQAZgZAXgNIADAEQgTAPgZAfQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_109.setTransform(367.5,332.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIABAQQAEgJAFgEQAGgEAIAAIAEAAIAEABIgDAZIgMAAQgFAAgEABQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_110.setTransform(543.3,295);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_111.setTransform(536,292.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgHQALgIAXAAIAMAAIAAgJQAAgIgEgDQgEgFgIAAIgHABIgGADIgCALIgVAAIAAgXQAIgFAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABADIAIACIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAGgCACgFIAAgOIgMAAQgJAAgFADg");
	this.shape_112.setTransform(527.9,295.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAoAAIABAMQAFgGAGgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgLAOgRAAQgJAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgEADgDAEIAAArQADAEAEADQADACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgDACg");
	this.shape_113.setTransform(516.7,296.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_114.setTransform(505.9,295);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00254A").s().p("AAvBEQgOAAgEgIQgGgHAAgLIAAgIQAAgKgGgFQgEgGgKAAIgWAAIAAAkIAPACIAAARIg4AAIAAgRIAOgCIAAhhIgOgCIAAgQIAOAAIAuAAQAXAAANAKQANAKAAATQAAAKgGAIQgFAHgLAEQAMADAGAJQAFAIAAAMIAAAHQAAAFABACQACACAFABIADAAIAAARgAgTgHIATAAQALAAAFgFQAGgEAAgKQAAgJgGgFQgFgFgLgBIgTAAg");
	this.shape_115.setTransform(494.5,293.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgJgEgFQgEgEgIAAQgEAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIACAPQAFgIAGgEQAHgEAJAAQAQAAAIAJQAJAKAAAUIAAArIAMADIAAAQg");
	this.shape_116.setTransform(477.2,295);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAIAAAOIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgOgFgIQgFgJgKAAQgKAAgEAJg");
	this.shape_117.setTransform(465.8,295.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_118.setTransform(457.5,292.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00254A").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACACQACADAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_119.setTransform(450.8,293.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgHQALgIAWAAIANAAIAAgJQAAgIgEgDQgEgFgHAAIgIABIgHADIgBALIgUAAIAAgXQAHgFAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAADIAIACIAAAQIgfAAIgCgFIgBgGQgGAGgGADQgGAEgJAAQgPAAgJgIgAgOALQgFAEAAAGQAAAFADADQADADAHAAQAFAAAFgDQAEgCADgFIAAgOIgNAAQgIAAgEADg");
	this.shape_120.setTransform(442.3,295.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00254A").s().p("AgoA8QgLgOAAgWIAAgCQAAgXALgOQAKgPATAAQAHAAAFADQAGAEAFAGIAAgkIgOgDIAAgQIAOAAIAbAAIAAB8IANADIAAAQIglAAIgCgMQgEAHgHAEQgFADgIAAQgTAAgKgNgAgTAAQgEAIAAAOIAAACQAAANAEAIQAEAHAKAAQAFAAAFgCQAEgDADgEIAAgrQgDgEgEgCQgFgDgEAAQgKAAgFAJg");
	this.shape_121.setTransform(431.4,292.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgJgEgFQgEgEgIAAQgEAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIACAPQAFgIAGgEQAHgEAJAAQAQAAAIAJQAJAKAAAUIAAArIAMADIAAAQg");
	this.shape_122.setTransform(419.6,295);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_123.setTransform(407.5,295.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAIAAAOIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgOgFgIQgFgJgKAAQgKAAgEAJg");
	this.shape_124.setTransform(396.4,295.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00254A").s().p("Ag1BEIAAgRIAPgCIAAhhIgPgCIAAgQIBrAAIAAAkIgVAAIgBgQIgrAAIAAAlIAuAAIAAAVIguAAIAAAlIANACIAAARg");
	this.shape_125.setTransform(385.2,293.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EE82B4").s().p("AgnAvIgDgGQgGgNgFgGQgEgHgHgCQALgKAIAAQAHAAAJATIADAHQAPgaAYgYQAZgaAXgNIADAEQgTAPgZAfQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_126.setTransform(367.5,291.6);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(30));

	// Rod
	this.Rod_Button = new lib.RodButton();
	this.Rod_Button.name = "Rod_Button";
	this.Rod_Button.parent = this;
	this.Rod_Button.setTransform(-120.5,359.6,1.069,1.069,0,0,0,117,225);
	new cjs.ButtonHelper(this.Rod_Button, 0, 1, 2, false, new lib.RodButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Rod_Button).to({regX:117.1,regY:225.1,x:387.4,y:364.4},11).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.5,299,870.6,602);
// library properties:
lib.properties = {
	id: '3908047CD3EF0D488E404E36600ACBC4',
	width: 1024,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Xfinity Takeover Ad_atlas_.png", id:"Xfinity Takeover Ad_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3908047CD3EF0D488E404E36600ACBC4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;