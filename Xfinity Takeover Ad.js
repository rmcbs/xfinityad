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


(lib.LearnMoreBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAwIAAhfIA6AAIAAAKIguAAIAAAfIApAAIAAAKIgpAAIAAAhIAvAAIAAALg");
	this.shape.setTransform(118.4,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAwIgVgnIgVAAIAAAnIgNAAIAAhfIAgAAQAPAAAJAHQAJAIAAAOQAAAJgFAGQgFAGgJADIAXApIAAABgAgVAAIATAAQAJAAAFgFQAGgFAAgIQAAgJgFgFQgGgFgJAAIgTAAg");
	this.shape_1.setTransform(107.2,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAsQgJgGgFgKQgEgLAAgNIAAgGQAAgOAEgKQAFgLAJgGQAJgFAKAAQALAAAJAFQAJAGAFAKQAEALAAAOIAAAFQAAAOgEALQgFAKgJAGQgIAFgMAAQgKAAgJgFgAgSgcQgHAJAAAQIAAAGQAAAQAHAKQAHAJALAAQAMAAAHgJQAHgIAAgRIAAgGQAAgRgHgJQgHgJgMAAQgLAAgHAJg");
	this.shape_2.setTransform(94.6,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjAwIAAgmIABgnIgfBNIgJAAIgfhNIABAnIAAAmIgNAAIAAhfIARAAIAeBNIAfhNIARAAIAABfg");
	this.shape_3.setTransform(80.8,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYAwIgvhJIAABJIgNAAIAAhfIANAAIAvBJIAAhJIANAAIAABfg");
	this.shape_4.setTransform(60,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVAwIgVgnIgVAAIAAAnIgNAAIAAhfIAgAAQAPAAAJAHQAJAIAAAOQAAAJgFAGQgFAGgJADIAXApIAAABgAgVAAIATAAQAJAAAFgFQAGgFAAgIQAAgJgFgFQgGgFgJAAIgTAAg");
	this.shape_5.setTransform(48.2,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdAwIgJgZIgnAAIgJAZIgNAAIAkhfIAKAAIAlBfgAgPAMIAfAAIgQgrg");
	this.shape_6.setTransform(35.9,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAwIAAhfIA7AAIAAAKIgvAAIAAAfIApAAIAAAKIgpAAIAAAhIAwAAIAAALg");
	this.shape_7.setTransform(24.6,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAwIAAhfIANAAIAABUIAsAAIAAALg");
	this.shape_8.setTransform(13.8,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE82B4").s().p("AraCzQhLAAg0g1Qg0g0AAhKIAAAAQAAhJA0g1QA0g0BLAAIW1AAQBLAAAzA0QA1A1AABJIAAAAQAABKg1A0QgzA1hLAAg");
	this.shape_9.setTransform(67.5,13.3,0.742,0.742);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF69AF").s().p("AraCzQhLAAg0g1Qg0g0AAhKIAAAAQAAhJA0g1QA0g0BLAAIW1AAQBLAAAzA0QA1A1AABJIAAAAQAABKg1A0QgzA1hLAAg");
	this.shape_10.setTransform(67.5,13.3,0.742,0.742);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAAJIgqAAIAAAcIAlAAIAAAIIglAAIAAAfIAqAAIAAAJg");
	this.shape_11.setTransform(113.6,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATArIgTgjIgTAAIAAAjIgLAAIAAhVIAcAAQAOAAAIAGQAHAHAAANQABAIgFAGQgEAFgIADIAVAlIAAAAgAgTAAIARAAQAIAAAFgEQAFgFAAgHQAAgIgEgFQgGgEgIAAIgRAAg");
	this.shape_12.setTransform(103.4,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAnQgIgFgEgJQgFgJAAgMIAAgGQAAgMAFgKQAEgJAIgFQAIgFAJAAQAKAAAIAFQAIAFAFAJQAEAKAAAMIAAAFQAAAMgEAKQgFAJgIAFQgHAFgLAAQgJAAgIgFgAgQgZQgGAIAAAOIAAAGQAAAPAGAIQAGAJAKAAQALAAAGgIQAGgIABgPIAAgGQAAgPgHgIQgGgJgLAAQgKAAgGAJg");
	this.shape_13.setTransform(92,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgArIAAghIABgkIgdBFIgIAAIgchFIABAkIAAAhIgLAAIAAhVIAPAAIAbBFIAchFIAPAAIAABVg");
	this.shape_14.setTransform(79.5,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWArIgrhBIAABBIgLAAIAAhVIALAAIArBCIAAhCIALAAIAABVg");
	this.shape_15.setTransform(60.8,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATArIgSgjIgUAAIAAAjIgMAAIAAhVIAdAAQAOAAAIAGQAHAHABANQAAAIgFAGQgEAFgIADIAUAlIAAAAgAgTAAIARAAQAIAAAFgEQAFgFAAgHQAAgIgEgFQgFgEgJAAIgRAAg");
	this.shape_16.setTransform(50.1,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaArIgIgWIgjAAIgIAWIgMAAIAhhVIAJAAIAhBVgAgOALIAdAAIgPgng");
	this.shape_17.setTransform(38.9,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAAJIgqAAIAAAcIAlAAIAAAIIglAAIAAAfIAqAAIAAAJg");
	this.shape_18.setTransform(28.7,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZArIAAhVIALAAIAABMIAoAAIAAAJg");
	this.shape_19.setTransform(19,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10,p:{scaleX:0.742,scaleY:0.742,x:67.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10,p:{scaleX:0.671,scaleY:0.671,x:67.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.1,26.6);


// stage content:
(lib.XfinityTakeoverAd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://bit.ly/2zAAbj0", "_blank");
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

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
	var mask_graphics_0 = new cjs.Graphics().p("AB4ZKMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_15 = new cjs.Graphics().p("AB4ZKMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_16 = new cjs.Graphics().p("AB4ZKMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_17 = new cjs.Graphics().p("AB4ZKMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_18 = new cjs.Graphics().p("AB4ZnMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_19 = new cjs.Graphics().p("AB4bYMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_20 = new cjs.Graphics().p("AB4dJMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_21 = new cjs.Graphics().p("AB4e6MAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_22 = new cjs.Graphics().p("EAB4AgqMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_23 = new cjs.Graphics().p("EAB4AibMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_24 = new cjs.Graphics().p("EAB4AkMMAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_25 = new cjs.Graphics().p("EAB4Al9MAAAgyTMAu4AAAMAAAAyTg");
	var mask_graphics_26 = new cjs.Graphics().p("EAB4AnuMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_27 = new cjs.Graphics().p("EAB4ApfMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_28 = new cjs.Graphics().p("EAB4ArQMAAAgyUMAu4AAAMAAAAyUg");
	var mask_graphics_29 = new cjs.Graphics().p("EAB4AtBMAAAgyUMAu4AAAMAAAAyUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:312,y:99}).wait(15).to({graphics:mask_graphics_15,x:312,y:99}).wait(1).to({graphics:mask_graphics_16,x:312,y:121.6}).wait(1).to({graphics:mask_graphics_17,x:312,y:144.2}).wait(1).to({graphics:mask_graphics_18,x:312,y:163.9}).wait(1).to({graphics:mask_graphics_19,x:312,y:175.2}).wait(1).to({graphics:mask_graphics_20,x:312,y:186.5}).wait(1).to({graphics:mask_graphics_21,x:312,y:197.8}).wait(1).to({graphics:mask_graphics_22,x:312,y:209}).wait(1).to({graphics:mask_graphics_23,x:312,y:220.3}).wait(1).to({graphics:mask_graphics_24,x:312,y:231.6}).wait(1).to({graphics:mask_graphics_25,x:312,y:242.9}).wait(1).to({graphics:mask_graphics_26,x:312,y:254.2}).wait(1).to({graphics:mask_graphics_27,x:312,y:265.5}).wait(1).to({graphics:mask_graphics_28,x:312,y:276.8}).wait(1).to({graphics:mask_graphics_29,x:312,y:288.1}).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00254A").s().p("AgnChIApj0IhNAYIAJg3ICGgvIAIAAIg2FCg");
	this.shape_1.setTransform(592.8,522.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00254A").s().p("AgWCjQgbAAgXgMQgVgMgNgWQgNgWAAgaIA+AAQAAAUAKALQALALAQABQAWAAAOgQQAOgRADgdQADgZgLgPQgKgNgUgBQgYAAgTAQIg0gMIAsijICwAAIgJA2Ih7AAIgVBFQAUgMAaAAQAoAAAYAeQAWAcgDAwQgDAggQAZQgQAagbANQgYAOgcAAIgEgBg");
	this.shape_2.setTransform(569.2,522.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00254A").s().p("Ah2ChICikOIiZAAIAIgzIDcAAIgFAnIijEag");
	this.shape_3.setTransform(545.8,522.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00254A").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_4.setTransform(519.9,522.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00254A").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_5.setTransform(499.4,535.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00254A").s().p("AgWCjQgbAAgXgMQgVgMgNgWQgNgWAAgaIA+AAQAAAUAKALQALALAQABQAVAAAPgQQAOgRADgdQADgZgLgPQgKgNgUgBQgXAAgUAQIg0gMIAsijICwAAIgJA2Ih7AAIgVBFQATgMAbAAQApAAAXAeQAWAcgDAwQgDAggQAZQgQAagbANQgYAOgcAAIgEgBg");
	this.shape_6.setTransform(484,522.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00254A").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_7.setTransform(459.3,522.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00254A").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_8.setTransform(434.7,522.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00254A").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_9.setTransform(414.3,535.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00254A").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_10.setTransform(397.8,522.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00254A").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_11.setTransform(374.1,522.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00254A").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_12.setTransform(349.1,522.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE82B4").s().p("AgHBBQgCgCAAgEQAAgFACgDQADgCAEAAQAFAAADACQACADAAAFQAAAEgCACQgDADgFAAQgEAAgDgDgAgIAcIAAhfIARAAIgCBfg");
	this.shape_13.setTransform(602.2,486.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_14.setTransform(594.7,488);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_15.setTransform(586.2,486.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE82B4").s().p("AgfArQgKgIAAgNQAAgPANgIQALgJAVAAIARAAIAAgIQAAgJgFgFQgGgFgKAAQgJAAgGAEQgGAFAAAHIgRAAQgBgIAGgHQAFgHAKgEQAIgEAKAAQASAAAKAIQAKAJAAAQIAAAsQAAAOAEAJIAAABIgSAAQgCgDgBgHQgMAMgQAAQgOAAgKgJgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAHgEQAHgFAEgGIAAgVIgNAAQgfABAAASg");
	this.shape_16.setTransform(578.2,488);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE82B4").s().p("AA1AzIAAhBQAAgLgFgFQgFgGgLAAQgKABgGAFQgGAGgBAJIAABCIgRAAIAAhBQAAgWgVAAQgRAAgGAPIAABIIgRAAIAAhjIAQAAIAAALQALgNATAAQAVAAAHAQQAFgHAIgFQAIgEALAAQAhAAAAAiIAABDg");
	this.shape_17.setTransform(564.7,487.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE82B4").s().p("AgIBEIAAhjIAQAAIAABjgAgHgyQgCgEAAgEQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAEgCAEQgDACgFAAQgEAAgDgCg");
	this.shape_18.setTransform(554.1,486.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_19.setTransform(548.4,486.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE82B4").s().p("AgTAvQgJgDgGgJQgFgHAAgJIARAAQABAIAGAGQAHAFAJAAQAKAAAGgEQAGgEAAgGQAAgIgGgDQgFgEgMgDQgNgDgHgDQgIgDgEgGQgEgFAAgIQAAgMALgJQAKgIAQAAQARAAAKAIQALAJAAAOIgRAAQAAgHgGgFQgGgFgJAAQgJAAgFAEQgFAEAAAHQAAAGAFADQAEADAMADQANADAIAEQAIADAEAFQAEAGAAAIQAAANgLAJQgLAIgRAAQgLAAgJgFg");
	this.shape_20.setTransform(540.7,488);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE82B4").s().p("AgqBDIAAiGIBUAAIAAAPIhCAAIAAAsIA5AAIAAANIg5AAIAAAwIBDAAIAAAOg");
	this.shape_21.setTransform(530.9,486.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_22.setTransform(515.4,488);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_23.setTransform(505.4,488);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_24.setTransform(497.5,487.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE82B4").s().p("AgpBDIAAiGIBTAAIAAAPIhBAAIAAAuIA4AAIAAAOIg4AAIAAA7g");
	this.shape_25.setTransform(489.1,486.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_26.setTransform(475.9,487.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EE82B4").s().p("AgeAqQgJgKAAgSIAAhAIASAAIAABAQAAAXASAAQATAAAGgPIAAhIIARAAIAABjIgQAAIAAgKQgKAMgTAAQgQAAgIgJg");
	this.shape_27.setTransform(467,488);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_28.setTransform(456.4,488);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EE82B4").s().p("AgeBGIgGgBIAAgOIAFABQAIAAAFgEQAFgEADgJIAEgKIgkhiIATAAIAYBKIAXhKIATAAIgpByQgIAZgUAAg");
	this.shape_29.setTransform(446.4,490);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_30.setTransform(434.5,487.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_31.setTransform(425.4,488);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EE82B4").s().p("AgNBIIAAhWIgQAAIAAgNIAQAAIAAgKQAAgRAIgIQAIgJAQAAQAGAAAFABIAAAOIgKgBQgIAAgFAFQgEAFAAAJIAAALIAVAAIAAANIgVAAIAABWg");
	this.shape_32.setTransform(417,485.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE82B4").s().p("AAYAyIgYhLIgXBLIgOAAIgdhjIARAAIAUBKIAXhKIANAAIAYBMIAThMIARAAIgdBjg");
	this.shape_33.setTransform(401.5,487.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_34.setTransform(389,488);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE82B4").s().p("AAWAzIAAhCQAAgLgEgEQgGgGgKAAQgHABgGAEQgHAEgEAIIAABGIgQAAIAAhjIAPAAIABAMQAMgOASAAQAfAAAAAjIAABCg");
	this.shape_35.setTransform(378.4,487.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_36.setTransform(366.2,485.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_37.setTransform(361.6,485.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE82B4").s().p("AgfArQgJgIAAgNQgBgPAMgIQANgJAUAAIARAAIAAgIQAAgJgGgFQgFgFgKAAQgIAAgHAEQgGAFAAAHIgRAAQAAgIAFgHQAGgHAIgEQAKgEAJAAQASAAAJAIQAKAJABAQIAAAsQAAAOADAJIAAABIgSAAQgBgDgBgHQgMAMgPAAQgQAAgJgJgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAIgEQAGgFAEgGIAAgVIgOAAQgeABAAASg");
	this.shape_38.setTransform(354.1,488);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE82B4").s().p("AglA0QgOgRAAgdIAAgMQAAgSAHgPQAGgOANgHQAMgJAQABQAVgBANAMQANAMACAWIgSAAQgCgRgIgHQgIgHgNAAQgQAAgKAMQgKANAAAXIAAANQAAAWAJANQAKANAPAAQAPAAAHgHQAJgGACgSIASAAQgDAWgMAMQgOAMgWgBQgXAAgPgRg");
	this.shape_39.setTransform(342.9,486.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(30));

	// Services
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgKgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgQIAoAAIACAOQAFgIAGgEQAHgEAJAAQAQAAAIAKQAJAJAAAUIAAArIAMADIAAAQg");
	this.shape_40.setTransform(524.5,449.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00254A").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgIgKgBQgKABgEAIg");
	this.shape_41.setTransform(513.1,449.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_42.setTransform(504.7,447.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_43.setTransform(498.1,448.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgHQALgHAWAAIANAAIAAgKQAAgHgEgFQgEgDgHAAIgIAAIgHADIgBALIgUAAIAAgXQAHgEAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAADIAIACIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAFAAAFgCQAEgDADgFIAAgPIgNAAQgIAAgEAFg");
	this.shape_44.setTransform(489.5,449.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_45.setTransform(481.1,447.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_46.setTransform(472,449.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00254A").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEAOQACACAEAAIAJABQAHAAAFgCQAEgEAAgFQAAgEgEgEQgFgDgKgCQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKAEAGAEIABAZIgTAAIgDgNIgHgDQgEgCgFABQgGAAgEACQgEAEAAAEQAAAFAEADQAEADALACQASAEAJAHQAJAGAAANQAAAOgLAIQgMAJgSAAQgMAAgJgDg");
	this.shape_47.setTransform(461.5,449.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgKgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgQIAoAAIACAOQAEgIAIgEQAGgEAJAAQAPAAAJAKQAJAJgBAUIAAArIAOADIAAAQg");
	this.shape_48.setTransform(450.5,449.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00254A").s().p("AgbBEIAAgQIAOgEIAAhfIgOgDIAAgQIA3AAIAAAQIgPADIAABfIAPAEIAAAQg");
	this.shape_49.setTransform(441.1,447.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00254A").s().p("AgeAmQgNgPAAgVIAAgDQAAgVANgPQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgQIgFgCQgDgBgDgBQgLABgFAIQgEAIAAANIAAADQAAANAEAIQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAPgLAKQgMALgSAAQgVAAgMgOg");
	this.shape_50.setTransform(428.1,449.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_51.setTransform(420.1,447.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_52.setTransform(413.5,448.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_53.setTransform(406.4,448.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00254A").s().p("AASBEIAAgQIAJgCIgGgTIgqAAIgGATIAJACIAAAQIgtAAIAAgQIAJgCIAph0IAbAAIAoB0IAKACIAAAQgAgPALIAfAAIgQgvIAAAAg");
	this.shape_54.setTransform(396.1,447.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgGQgFgHgGgBQAKgLAIAAQAHAAAJATIADAGQAPgZAYgYQAYgZAYgOIAEAFQgVAPgYAeQgXAfgNAbIgHAFIgLAIIgGgOg");
	this.shape_55.setTransform(377.4,446.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIABAOQAEgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_56.setTransform(529.6,408.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_57.setTransform(522.3,406.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXAAIAMAAIAAgLQAAgHgEgEQgEgDgIAAIgIABIgFACIgCALIgVAAIAAgWQAIgFAJgEQAKgDALAAQASAAAMAJQALAJAAARIAAAoIAAAFIABAEIAIABIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgIgIgAgPAMQgEAEAAAFQAAAFADADQAEADAGAAQAFAAAEgCQAFgEADgDIAAgQIgMAAQgJAAgFAFg");
	this.shape_58.setTransform(514.2,408.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_59.setTransform(503,410.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_60.setTransform(492.2,408.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00254A").s().p("AAvBDQgNAAgGgGQgFgIAAgLIAAgIQAAgJgGgGQgEgGgKAAIgWAAIAAAjIAPAEIAAAPIg4AAIAAgPIAPgEIAAhfIgPgDIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAHgLAEQAMAEAGAHQAFAJAAAMIAAAHQAAAEACADQABACAFABIADAAIAAAQgAgTgHIATAAQALAAAFgFQAGgEAAgKQAAgJgGgFQgFgGgLABIgTAAg");
	this.shape_61.setTransform(480.8,406.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_62.setTransform(464.4,408.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_63.setTransform(455.8,407.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_64.setTransform(447.2,408.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_65.setTransform(438.4,408.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00254A").s().p("AgeAmQgNgPAAgVIAAgDQAAgVANgPQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgQIgFgCQgDgCgDABQgLAAgFAIQgEAIAAANIAAADQAAANAEAIQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAPgLAKQgMALgSAAQgVAAgMgOg");
	this.shape_66.setTransform(429.2,408.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAGgIAHgEQAGgEAJAAQAPAAAJAKQAIAJAAAVIAAAqIAOADIAAAQg");
	this.shape_67.setTransform(418.2,408.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00254A").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_68.setTransform(406.8,408.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00254A").s().p("AglAzQgRgTgBgeIAAgDQABgdARgUQARgSAagBQAQABAMAFQANAGAIAKIAAAaIgUAAIgCgSQgFgEgFgCQgHgCgIAAQgRAAgJAMQgKANAAAVIAAADQAAAVAKANQAJAMARAAQAIAAAHgCQAGgCAEgEIACgSIAUAAIAAAbQgIAJgNAGQgMAGgQAAQgaAAgRgTg");
	this.shape_69.setTransform(395.3,406.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgCQAKgLAIAAQAHAAAJATIADAGQAPgaAYgXQAYgZAYgOIAEAFQgVAPgYAfQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_70.setTransform(377.4,405.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_71.setTransform(559.5,367.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_72.setTransform(552.3,365.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgIAAIgIABIgGACIgBALIgVAAIAAgWQAIgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAGAAADgCQAFgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_73.setTransform(544.2,367.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAEgGAGgEQAGgDAIAAQASAAALAOQALAPgBAXIAAACQABAWgLANQgLAOgSAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgDADgDAEIAAArQADAEADADQAEACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgEACg");
	this.shape_74.setTransform(532.9,369.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_75.setTransform(522.2,367.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00254A").s().p("AAvBDQgOAAgFgGQgFgIAAgLIAAgIQAAgKgFgFQgGgGgJAAIgVAAIAAAjIAOAEIAAAPIg4AAIAAgPIAPgEIAAhgIgPgCIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAHgKAEQAMAEAFAHQAFAJAAAMIAAAHQAAAEACADQACACADAAIAEABIAAAQgAgSgHIASAAQAKAAAHgFQAFgEAAgKQAAgJgFgFQgGgGgLABIgSAAg");
	this.shape_76.setTransform(510.7,365.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_77.setTransform(494.4,367.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00254A").s().p("AgeAmQgNgOAAgXIAAgCQAAgWANgOQAMgOAXAAQAMAAAJAEQAKADAGAHIABAaIgWAAIgFgQIgFgCQgDgCgDABQgLAAgFAIQgEAJAAAMIAAACQAAAOAEAIQAEAIAKAAQAHAAAFgEQAEgFAAgGIAZAAIAAAAQAAAPgLALQgMAKgSAAQgVAAgMgOg");
	this.shape_78.setTransform(484.3,367.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgHAAIgJABIgGACIgBALIgUAAIAAgWQAHgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgFAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAGAAAEgCQAEgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_79.setTransform(474.3,367.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPAAAXIAAACQAAAWgKANQgLAOgSAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgEADgDAEIAAArQADAEAEADQADACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgDACg");
	this.shape_80.setTransform(463.1,369.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00254A").s().p("AgbBAQgNgFgJgJIAAgcIAVAAIACATQAEADAIADQAGACAIAAQAMAAAGgEQAFgFAAgIQAAgIgFgFQgGgEgNgEQgYgHgMgJQgNgKAAgQQAAgQAOgLQAOgKAWgBQAOAAANAGQAMAEAJAIIAAAbIgUAAIgDgSIgLgEQgGgCgIAAQgKAAgHAFQgFAFgBAHQAAAHAHAFQAGAEAPAFQAWAGALAJQANALAAAQQAAASgPAJQgNALgXAAQgOgBgNgFg");
	this.shape_81.setTransform(451.9,365.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_82.setTransform(438.2,365.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00254A").s().p("AATAyIgTg6IAAAAIgSA6IgWAAIgWhSIgKgBIAAgQIAuAAIAAAQIgLACIAKAtIAAAAIATg/IARAAIATA/IABAAIAJgtIgLgCIAAgQIAuAAIAAAQIgKABIgVBSg");
	this.shape_83.setTransform(427.6,367.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgHAAIgJABIgGACIgBALIgUAAIAAgWQAHgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAFAAAFgCQAEgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_84.setTransform(414.9,367.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_85.setTransform(405.7,367.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00254A").s().p("AglAyQgRgSgBgeIAAgDQABgeARgTQARgSAagBQAQABAMAFQANAGAIAJIAAAbIgUAAIgCgSQgFgEgFgCQgHgDgIAAQgRAAgJANQgKANAAAVIAAADQAAAVAKANQAJAMARAAQAIAAAHgBQAGgDAEgEIACgSIAUAAIAAAbQgIAJgNAGQgMAGgQAAQgaAAgRgUg");
	this.shape_86.setTransform(395.3,365.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgDQAKgKAIAAQAHAAAJATIADAGQAPgaAYgYQAYgYAYgOIAEAFQgVAOgYAgQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_87.setTransform(377.4,364);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00254A").s().p("AgQBFQgJgCgHgEIAFgTIANAFQAGACAHAAQAJAAAFgHQAFgGAAgKIAAgHQgEAGgGADQgGADgHAAQgTAAgKgOQgKgNAAgWIAAgCQAAgXAKgPQAKgOATAAQAIAAAGADQAGAEAFAHIACgNIAXAAIAABhQAAAUgMAMQgNALgUAAQgIAAgIgCgAgNgpQgEAJAAAOIAAACQAAAOAEAGQAFAIAJAAQAGAAAEgDQAFgCACgEIAAgrQgCgEgFgDQgEgCgGAAQgJAAgFAIg");
	this.shape_88.setTransform(608.8,328.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAFgHAHgFQAHgEAJAAQAQAAAIAJQAJAKAAAVIAAAqIAMADIAAAQg");
	this.shape_89.setTransform(597.6,326.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_90.setTransform(588.5,324.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00254A").s().p("AgfBJIAAgQIAOgDIAAg9IgQAAIAAgTIAQAAIAAgLQAAgRAJgJQAJgJARAAIAIAAIAIACIgDAUIgEgBIgFAAQgHAAgDADQgDAEAAAHIAAALIATAAIAAATIgTAAIAAA9IAMADIAAAQg");
	this.shape_91.setTransform(582.3,324.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_92.setTransform(573,326.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_93.setTransform(562.4,326.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_94.setTransform(553.3,326.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAoAAIABAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgLAOgRAAQgJAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgFADgCAEIAAArQACAEAFADQADACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgDACg");
	this.shape_95.setTransform(543.2,328.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_96.setTransform(533.8,326.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_97.setTransform(524.5,326.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00254A").s().p("AgIA4QgHgIAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgHg");
	this.shape_98.setTransform(515.9,325.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQAMgGAWgBIAMAAIAAgKQAAgGgEgFQgEgDgHAAIgIABIgGACIgCALIgUAAIAAgWQAHgGAJgDQAKgDAMAAQARAAAMAJQAMAJgBARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgIgIgAgPALQgEAFAAAFQAAAFADADQAEADAFAAQAHAAAEgDQAFgDACgDIAAgQIgMAAQgJABgFADg");
	this.shape_99.setTransform(507.3,326.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00254A").s().p("AAZBDIgYhYIgBAAIgYBYIgZAAIgch0IgLgBIAAgRIAyAAIAAARIgMACIAPBJIABAAIAZhcIATAAIAaBcIAAAAIAQhJIgNgCIAAgRIAyAAIAAARIgLABIgcB0g");
	this.shape_100.setTransform(492.7,324.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00254A").s().p("AgIA4QgHgIAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgHg");
	this.shape_101.setTransform(475.4,325.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgqQAAgLgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIACAOQAFgHAGgFQAHgEAJAAQAQAAAIAJQAJAKAAAVIAAAqIANADIAAAQg");
	this.shape_102.setTransform(465.9,326.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_103.setTransform(454.7,326.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00254A").s().p("AAiAzIAAgQIALgDIAAgpQAAgLgDgFQgEgEgHAAQgGAAgEACQgFADgCAFIAAACIAAADIAAAuIALADIAAAQIgwAAIAAgQIALgDIAAgpQAAgLgEgFQgDgEgIAAQgFAAgEACQgEACgDAEIAAA1IAMADIAAAQIg0AAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIABANQAFgHAHgEQAIgEAJAAQAKAAAGAEQAGAFAEAIQAFgIAHgEQAIgFAKAAQAOAAAJAKQAJALAAAUIAAApIANADIAAAQg");
	this.shape_104.setTransform(440.9,326.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_105.setTransform(427,326.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00254A").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEANQACADAEABIAJABQAHAAAFgDQAEgEAAgEQAAgFgEgDQgFgDgKgDQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKADAGAFIABAZIgTAAIgDgNIgHgDQgEgCgFAAQgGABgEADQgEADAAAFQAAAEAEADQAEADALACQASAEAJAGQAJAIAAAMQAAAOgLAJQgMAIgSAAQgMAAgJgDg");
	this.shape_106.setTransform(417.2,326.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQALgGAWgBIANAAIAAgKQAAgGgEgFQgEgDgHAAIgIABIgHACIgBALIgUAAIAAgWQAHgGAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOALQgFAFAAAFQAAAFADADQADADAHAAQAFAAAFgDQAEgDADgDIAAgQIgNAAQgIABgEADg");
	this.shape_107.setTransform(407.2,326.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00254A").s().p("Ag5BDIAAgQIAPgDIAAhgIgPgCIAAgRIAPAAIAsAAQAYABAOAIQANAKAAASQAAAKgFAHQgFAHgJAEQAMACAGAJQAGAIAAALQAAATgNAKQgNALgXgBgAgPAvIAYAAQALgBAFgEQAGgEAAgKQAAgKgFgFQgFgFgKAAIgaAAgAgPgKIASAAQALAAAGgEQAGgFAAgIQAAgKgGgFQgGgDgMAAIgRAAg");
	this.shape_108.setTransform(395.5,324.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgGgGgCQAKgKAIAAQAHAAAJATIADAGQAPgaAYgYQAYgZAYgNIAEAFQgVAOgYAgQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_109.setTransform(377.4,323);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgRIAnAAIACAPQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_110.setTransform(553.2,285.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_111.setTransform(546,283.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgGACIgBALIgUAAIAAgWQAHgGAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgJgIgAgOALQgFAEAAAGQAAAFADADQADADAHAAQAGAAAEgDQAEgDADgDIAAgPIgNAAQgIAAgEADg");
	this.shape_112.setTransform(537.9,285.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAEgGAGgEQAGgDAIAAQASAAALAOQALAPgBAXIAAACQABAWgLANQgLAOgSAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgDADgDAEIAAArQADAEADADQAEACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgEACg");
	this.shape_113.setTransform(526.6,287.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_114.setTransform(515.9,285.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00254A").s().p("AAvBDQgOABgFgIQgFgHAAgLIAAgIQAAgJgFgGQgGgGgJAAIgVAAIAAAjIAOADIAAAQIg4AAIAAgQIAPgDIAAhgIgPgCIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAIgLADQANAEAFAHQAFAJAAAMIAAAHQAAAEACADQACACADAAIAEABIAAAQgAgSgHIASAAQAKAAAHgFQAFgFAAgJQAAgJgFgFQgGgGgLAAIgSAAg");
	this.shape_115.setTransform(504.4,283.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgRIAnAAIABAPQAFgHAIgFQAGgEAJAAQAPAAAJAJQAIAKAAAVIAAAqIAOADIAAAQg");
	this.shape_116.setTransform(487.2,285.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_117.setTransform(475.8,285.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_118.setTransform(467.4,283.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00254A").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgIg");
	this.shape_119.setTransform(460.8,284.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXgBIAMAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgFACIgCALIgVAAIAAgWQAIgGAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAFgDADgDIAAgPIgMAAQgJAAgFADg");
	this.shape_120.setTransform(452.2,285.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00254A").s().p("AgoA8QgLgOAAgWIAAgCQAAgXALgOQAKgPATAAQAHAAAFADQAGAEAFAGIAAgkIgOgDIAAgQIAOAAIAbAAIAAB8IANADIAAAQIglAAIgCgMQgEAHgHAEQgFADgIAAQgTAAgKgNgAgTAAQgEAIAAAOIAAACQAAANAEAIQAEAHAKAAQAFAAAFgCQAEgDADgEIAAgrQgDgEgEgCQgFgDgEAAQgKAAgFAJg");
	this.shape_121.setTransform(441.3,283.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgRIAnAAIABAPQAFgHAIgFQAGgEAJAAQAPAAAJAJQAIAKAAAVIAAAqIAOADIAAAQg");
	this.shape_122.setTransform(429.6,285.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_123.setTransform(417.5,285.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_124.setTransform(406.3,285.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00254A").s().p("Ag1BDIAAgQIAPgDIAAhgIgPgCIAAgRIBrAAIAAAlIgVAAIgBgQIgrAAIAAAmIAuAAIAAAUIguAAIAAAkIANADIAAAQg");
	this.shape_125.setTransform(395.1,283.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgDQAKgKAIAAQAHAAAJATIADAHQAPgbAYgYQAYgZAYgNIAEAEQgVAQgYAfQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_126.setTransform(377.4,281.9);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(30));

	// Learn More Button
	this.button_1 = new lib.LearnMoreBtn();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(470.2,561.7,1,1,0,0,0,67.5,13.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.LearnMoreBtn(), 3);

	var maskedShapeInstanceList = [this.button_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(30));

	// Rod
	this.Rod_Button = new lib.RodButton();
	this.Rod_Button.name = "Rod_Button";
	this.Rod_Button.parent = this;
	this.Rod_Button.setTransform(-120.5,359.6,1.069,1.069,0,0,0,117,225);
	this.Rod_Button.alpha = 0.281;
	new cjs.ButtonHelper(this.Rod_Button, 0, 1, 2, false, new lib.RodButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Rod_Button).to({regX:117.1,regY:225.1,x:449.2,y:354.7,alpha:1},11).wait(19));

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