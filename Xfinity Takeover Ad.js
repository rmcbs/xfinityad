(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Xfinity Takeover Ad_atlas_", frames: [[2054,0,300,600],[0,0,2052,3909],[0,3911,2052,3909],[0,7822,689,243]]}
];


// symbols:



(lib.Artboard1 = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LeftArmUp2 = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeftArmUp = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.RMCBSREVERSE = function() {
	this.spriteSheet = ss["Xfinity Takeover Ad_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.RodButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LeftArmUp();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.123,0.123);

	this.instance_1 = new lib.LeftArmUp2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,5,0.122,0.122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.4,482.7);


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
			window.open("https://www.completebasementsystems.net/?utm_source=xfinity", "_blank");
		}
		this.rod_button.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.completebasementsystems.net/?utm_source=xfinity", "_blank");
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Logo
	this.instance = new lib.RMCBSREVERSE();
	this.instance.parent = this;
	this.instance.setTransform(344,21,0.381,0.381);

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnChIApj0IhNAYIAJg3ICGgvIAIAAIg2FCg");
	this.shape.setTransform(592.8,522.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCjQgbAAgXgMQgVgMgNgWQgNgWAAgaIA+AAQAAAUAKALQALALAQABQAWAAAOgQQAOgRADgdQADgZgLgPQgKgNgUgBQgYAAgTAQIg0gMIAsijICwAAIgJA2Ih7AAIgVBFQAUgMAaAAQAoAAAYAeQAWAcgDAwQgDAggQAZQgQAagbANQgYAOgcAAIgEgBg");
	this.shape_1.setTransform(569.2,522.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2ChICikOIiZAAIAIgzIDcAAIgFAnIijEag");
	this.shape_2.setTransform(545.8,522.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_3.setTransform(519.9,522.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_4.setTransform(499.4,535.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWCjQgbAAgXgMQgVgMgNgWQgNgWAAgaIA+AAQAAAUAKALQALALAQABQAVAAAPgQQAOgRADgdQADgZgLgPQgKgNgUgBQgXAAgUAQIg0gMIAsijICwAAIgJA2Ih7AAIgVBFQATgMAbAAQApAAAXAeQAWAcgDAwQgDAggQAZQgQAagbANQgYAOgcAAIgEgBg");
	this.shape_5.setTransform(484,522.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_6.setTransform(459.3,522.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_7.setTransform(434.7,522.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_8.setTransform(414.3,535.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_9.setTransform(397.8,522.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_10.setTransform(374.1,522.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_11.setTransform(349.1,522.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE82B4").s().p("AgHBBQgCgCAAgEQAAgFACgDQADgCAEAAQAFAAADACQACADAAAFQAAAEgCACQgDADgFAAQgEAAgDgDgAgIAcIAAhfIARAAIgCBfg");
	this.shape_12.setTransform(602.2,486.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_13.setTransform(594.7,488);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_14.setTransform(586.2,486.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE82B4").s().p("AgfArQgKgIAAgNQAAgPANgIQALgJAVAAIARAAIAAgIQAAgJgFgFQgGgFgKAAQgJAAgGAEQgGAFAAAHIgRAAQgBgIAGgHQAFgHAKgEQAIgEAKAAQASAAAKAIQAKAJAAAQIAAAsQAAAOAEAJIAAABIgSAAQgCgDgBgHQgMAMgQAAQgOAAgKgJgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAHgEQAHgFAEgGIAAgVIgNAAQgfABAAASg");
	this.shape_15.setTransform(578.2,488);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE82B4").s().p("AA1AzIAAhBQAAgLgFgFQgFgGgLAAQgKABgGAFQgGAGgBAJIAABCIgRAAIAAhBQAAgWgVAAQgRAAgGAPIAABIIgRAAIAAhjIAQAAIAAALQALgNATAAQAVAAAHAQQAFgHAIgFQAIgEALAAQAhAAAAAiIAABDg");
	this.shape_16.setTransform(564.7,487.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE82B4").s().p("AgIBEIAAhjIAQAAIAABjgAgHgyQgCgEAAgEQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAEgCAEQgDACgFAAQgEAAgDgCg");
	this.shape_17.setTransform(554.1,486.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE82B4").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_18.setTransform(548.4,486.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE82B4").s().p("AgTAvQgJgDgGgJQgFgHAAgJIARAAQABAIAGAGQAHAFAJAAQAKAAAGgEQAGgEAAgGQAAgIgGgDQgFgEgMgDQgNgDgHgDQgIgDgEgGQgEgFAAgIQAAgMALgJQAKgIAQAAQARAAAKAIQALAJAAAOIgRAAQAAgHgGgFQgGgFgJAAQgJAAgFAEQgFAEAAAHQAAAGAFADQAEADAMADQANADAIAEQAIADAEAFQAEAGAAAIQAAANgLAJQgLAIgRAAQgLAAgJgFg");
	this.shape_19.setTransform(540.7,488);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE82B4").s().p("AgqBDIAAiGIBUAAIAAAPIhCAAIAAAsIA5AAIAAANIg5AAIAAAwIBDAAIAAAOg");
	this.shape_20.setTransform(530.9,486.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_21.setTransform(515.4,488);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE82B4").s().p("AgdAmQgNgNAAgXIAAgCQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALANAAAYIAAAGIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgFIAKAIQgMATgaAAQgTAAgNgOgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_22.setTransform(505.4,488);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_23.setTransform(497.5,487.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE82B4").s().p("AgpBDIAAiGIBTAAIAAAPIhBAAIAAAuIA4AAIAAAOIg4AAIAAA7g");
	this.shape_24.setTransform(489.1,486.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_25.setTransform(475.9,487.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EE82B4").s().p("AgeAqQgJgKAAgSIAAhAIASAAIAABAQAAAXASAAQATAAAGgPIAAhIIARAAIAABjIgQAAIAAgKQgKAMgTAAQgQAAgIgJg");
	this.shape_26.setTransform(467,488);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_27.setTransform(456.4,488);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EE82B4").s().p("AgeBGIgGgBIAAgOIAFABQAIAAAFgEQAFgEADgJIAEgKIgkhiIATAAIAYBKIAXhKIATAAIgpByQgIAZgUAAg");
	this.shape_28.setTransform(446.4,490);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EE82B4").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_29.setTransform(434.5,487.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_30.setTransform(425.4,488);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EE82B4").s().p("AgNBIIAAhWIgQAAIAAgNIAQAAIAAgKQAAgRAIgIQAIgJAQAAQAGAAAFABIAAAOIgKgBQgIAAgFAFQgEAFAAAJIAAALIAVAAIAAANIgVAAIAABWg");
	this.shape_31.setTransform(417,485.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EE82B4").s().p("AAYAyIgYhLIgXBLIgOAAIgdhjIARAAIAUBKIAXhKIANAAIAYBMIAThMIARAAIgdBjg");
	this.shape_32.setTransform(401.5,487.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE82B4").s().p("AggAlQgNgOAAgXIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAAQAIAKQAIALAMAAQANAAAIgLQAHgKAAgRQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_33.setTransform(389,488);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE82B4").s().p("AAWAzIAAhCQAAgLgEgEQgGgGgKAAQgHABgGAEQgHAEgEAIIAABGIgQAAIAAhjIAPAAIABAMQAMgOASAAQAfAAAAAjIAABCg");
	this.shape_34.setTransform(378.4,487.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_35.setTransform(366.2,485.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE82B4").s().p("AgHBHIAAiNIAQAAIAACNg");
	this.shape_36.setTransform(361.6,485.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE82B4").s().p("AgfArQgJgIAAgNQgBgPAMgIQANgJAUAAIARAAIAAgIQAAgJgGgFQgFgFgKAAQgIAAgHAEQgGAFAAAHIgRAAQAAgIAFgHQAGgHAIgEQAKgEAJAAQASAAAJAIQAKAJABAQIAAAsQAAAOADAJIAAABIgSAAQgBgDgBgHQgMAMgPAAQgQAAgJgJgAgXAUQAAAIAFAFQAGAEAIAAQAHAAAIgEQAGgFAEgGIAAgVIgOAAQgeABAAASg");
	this.shape_37.setTransform(354.1,488);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE82B4").s().p("AglA0QgOgRAAgdIAAgMQAAgSAHgPQAGgOANgHQAMgJAQABQAVgBANAMQANAMACAWIgSAAQgCgRgIgHQgIgHgNAAQgQAAgKAMQgKANAAAXIAAANQAAAWAJANQAKANAPAAQAPAAAHgHQAJgGACgSIASAAQgDAWgMAMQgOAMgWgBQgXAAgPgRg");
	this.shape_38.setTransform(342.9,486.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00254A").s().p("AgnChIApj0IhNAYIAJg3ICGguIAIAAIg2FBg");
	this.shape_39.setTransform(594.2,523.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00254A").s().p("AgWCjQgbAAgWgMQgXgMgMgWQgMgWAAgaIA8AAQABAUALALQAJALASABQAUAAAPgQQAOgRADgdQADgZgKgPQgLgNgUgBQgYAAgTAQIgzgMIArijICvAAIgIA2Ih7AAIgVBFQATgMAaAAQAqAAAWAeQAXAcgDAwQgDAggQAZQgQAagaANQgZAOgcAAIgEgBg");
	this.shape_40.setTransform(570.6,523.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00254A").s().p("Ah2ChICikOIiZAAIAIgzIDcAAIgFAnIijEag");
	this.shape_41.setTransform(547.2,523.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00254A").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_42.setTransform(521.3,523.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00254A").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_43.setTransform(500.8,536.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00254A").s().p("AgWCjQgbAAgWgMQgXgMgMgWQgMgWAAgaIA8AAQABAUALALQAJALASABQAUAAAPgQQAOgRADgdQADgZgKgPQgLgNgUgBQgYAAgTAQIgzgMIArijICvAAIgIA2Ih7AAIgVBFQATgMAaAAQAqAAAWAeQAXAcgEAwQgCAggQAZQgQAagaANQgZAOgcAAIgEgBg");
	this.shape_44.setTransform(485.4,523.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00254A").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_45.setTransform(460.7,523.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00254A").s().p("AgUCmQgsgBgagZQgbgYACgpQAEg1A8gbQghgaACgpQACgcAOgVQAPgWAZgLQAYgLAdAAQApABAZAYQAZAYgDAoQgDAvg0AbQATAMAJATQAJATgBAXQgDArggAaQggAagtAAIgEAAgAgiAjQgOAOgDAVQgDATAKAMQAJANASAAQAUABAOgOQAOgNADgVQADgTgKgNQgJgMgSgBIAAAAQgUAAgOANgAgFhlQgNAMgCATQgCASAIAMQAHALAPABQARAAAMgMQANgNACgUQACgSgIgLQgHgLgQAAIgBAAQgRAAgKAMg");
	this.shape_46.setTransform(436.1,523.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00254A").s().p("AgXAaQgLgKAAgPQAAgNAKgLQAJgKAPAAQAOgBALAKQAKAKAAAOQABAOgKAKQgLAKgOAAIgBAAQgOAAgJgIg");
	this.shape_47.setTransform(415.7,536.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00254A").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_48.setTransform(399.2,523.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00254A").s().p("AgXCmQgqgBgXgcQgWgbgBgxQAAgRACgQIAJg8QALhBAggjQAfgiAxABQAqABAXAcQAXAbABAxQAAARgCAQIgJA7QgLBCggAjQgfAhgvAAIgDAAgAgkgtIgLBKQgDAXAAAQQgBAtAfABQAsADANhJIALhOQADgTAAgOQAAgsgfgCIgCAAQgqAAgMBEg");
	this.shape_49.setTransform(375.5,523.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00254A").s().p("AgUCmQgrgBgbgZQgcgZABgqIA+AAQgBASALALQAKAMATAAQAVABAPgNQAQgNADgVQACgWgKgMQgLgLgVgBIglAAIAIgxIAeAAQAWAAAPgNQAQgMACgWQACgSgJgKQgJgLgSAAQgSgBgMALQgNAKgDAQIg+ABQACgnAfgZQAggZAsAAQAuABAaAZQAbAYgDApQgDAug3AaQAVAJAKAUQAKATgBAXQgBAdgRAXQgQAWgcAMQgaALgeAAIgCAAg");
	this.shape_50.setTransform(350.5,523.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00254A").s().p("AgGBBQgDgDAAgDQAAgFADgDQACgDAEABQAFgBADADQACADAAAFQAAADgCADQgDADgFAAQgEAAgCgDgAgHAdIgBhgIARAAIgCBgg");
	this.shape_51.setTransform(602.8,486.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00254A").s().p("AgdAnQgNgOAAgWIAAgDQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALAMAAAYIAAAHIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgGIAKAJQgMATgaAAQgTAAgNgNgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_52.setTransform(595.3,488.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00254A").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_53.setTransform(586.8,487.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00254A").s().p("AgfArQgKgIAAgNQAAgQAMgHQAMgJAVAAIARAAIAAgIQAAgIgGgGQgFgFgKgBQgIABgHAEQgGAFAAAHIgSAAQABgIAFgHQAGgHAIgEQAKgEAKAAQARAAAKAIQAJAJABAPIAAAtQAAAOADAJIAAABIgSAAQgBgDgBgHQgMAMgPAAQgQAAgJgJgAgXAUQAAAIAFAFQAFAEAJAAQAHAAAIgEQAGgEAEgHIAAgVIgOAAQgeABAAASg");
	this.shape_54.setTransform(578.8,488.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00254A").s().p("AA1AzIAAhBQAAgLgFgFQgFgGgLAAQgKABgGAFQgGAGgBAJIAABCIgRAAIAAhBQAAgWgVAAQgRABgGAOIAABIIgRAAIAAhjIAQAAIAAALQALgNATAAQAVAAAHAQQAFgHAIgFQAIgEALAAQAhAAAAAiIAABDg");
	this.shape_55.setTransform(565.3,488.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00254A").s().p("AgIBEIAAhjIAQAAIAABjgAgHgyQgCgDAAgFQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAEgCAEQgDACgFAAQgEAAgDgCg");
	this.shape_56.setTransform(554.7,486.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00254A").s().p("AgCA4QgGgHAAgNIAAg9IgSAAIAAgNIASAAIAAgYIAQAAIAAAYIATAAIAAANIgTAAIAAA9QAAAHADACQACAEAGAAIAIgCIAAAOQgHACgGAAQgLAAgFgHg");
	this.shape_57.setTransform(549,487.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00254A").s().p("AgTAwQgJgFgGgIQgFgHAAgJIARAAQABAJAGAFQAHAFAJAAQAKAAAGgEQAGgEAAgGQAAgIgGgDQgFgEgMgDQgNgDgHgDQgIgEgEgFQgEgGAAgHQAAgMALgJQAKgIAQAAQARAAAKAIQALAJAAAOIgRAAQAAgHgGgFQgGgFgJAAQgJAAgFAEQgFAEAAAHQAAAGAFADQAEADAMADQANADAIAEQAIADAEAFQAEAGAAAIQAAANgLAJQgLAIgRAAQgLAAgJgEg");
	this.shape_58.setTransform(541.3,488.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00254A").s().p("AgqBDIAAiGIBUAAIAAAPIhCAAIAAAsIA6AAIAAANIg6AAIAAAwIBDAAIAAAOg");
	this.shape_59.setTransform(531.5,486.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00254A").s().p("AgdAnQgNgOAAgWIAAgDQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALAMAAAYIAAAHIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgGIAKAJQgMATgaAAQgTAAgNgNgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_60.setTransform(516,488.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00254A").s().p("AgdAnQgNgOAAgWIAAgDQAAgOAGgMQAGgMAKgHQAKgGALAAQAUAAALANQALAMAAAYIAAAHIhDAAQAAAOAIAKQAJAJALAAQAJAAAHgEQAGgEAFgGIAKAJQgMATgaAAQgTAAgNgNgAgPgdQgHAHgCANIAxAAIAAgBQAAgNgHgHQgGgHgLAAQgJAAgHAIg");
	this.shape_61.setTransform(506,488.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00254A").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_62.setTransform(498.1,488.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00254A").s().p("AgpBDIAAiGIBTAAIAAAPIhBAAIAAAuIA3AAIAAAOIg3AAIAAA7g");
	this.shape_63.setTransform(489.7,486.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00254A").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_64.setTransform(476.5,488.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00254A").s().p("AgeAqQgJgKAAgSIAAhAIASAAIAABAQAAAXASAAQATAAAGgPIAAhIIASAAIAABjIgRAAIAAgKQgKAMgSAAQgQAAgJgJg");
	this.shape_65.setTransform(467.6,488.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00254A").s().p("AggAlQgNgNAAgYIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAARAIAJQAIALAMAAQANAAAIgLQAHgJAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_66.setTransform(457,488.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00254A").s().p("AgeBGIgGgBIAAgOIAFABQAIAAAFgEQAFgDADgKIAEgKIgkhiIATAAIAYBKIAXhKIATAAIgpBzQgIAYgUAAg");
	this.shape_67.setTransform(447,490.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00254A").s().p("AgXAzIAAhjIAQAAIABALQAHgNAQAAIAHABIAAAQIgIgBQgQAAgGAPIAABGg");
	this.shape_68.setTransform(435.1,488.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00254A").s().p("AggAlQgNgNAAgYIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAARAIAJQAIALAMAAQANAAAIgLQAHgJAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_69.setTransform(426,488.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00254A").s().p("AgNBIIAAhWIgQAAIAAgNIAQAAIAAgKQAAgRAIgIQAIgJAQAAQAGAAAFABIAAAOIgKgBQgIAAgFAFQgEAFAAAJIAAALIAVAAIAAANIgVAAIAABWg");
	this.shape_70.setTransform(417.6,486.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00254A").s().p("AAYAyIgYhLIgXBLIgOAAIgdhjIARAAIAUBKIAXhKIANAAIAYBMIAThMIARAAIgdBjg");
	this.shape_71.setTransform(402.1,488.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00254A").s().p("AggAlQgNgNAAgYIAAAAQAAgPAGgMQAGgMAKgGQAKgGANAAQAUAAANAOQANAOAAAXIAAABQAAAOgGAMQgGAMgKAGQgLAHgNAAQgTAAgNgPgAgUgbQgIAKAAASQAAARAIAJQAIALAMAAQANAAAIgLQAHgJAAgSQAAgRgHgKQgIgKgNAAQgMAAgIAKg");
	this.shape_72.setTransform(389.6,488.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00254A").s().p("AAWAzIAAhCQAAgKgEgFQgGgGgKAAQgHABgHAEQgGAEgEAIIAABGIgRAAIAAhjIAQAAIABAMQAMgOARAAQAgAAAAAjIAABCg");
	this.shape_73.setTransform(379,488.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00254A").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_74.setTransform(366.8,486.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00254A").s().p("AgIBHIAAiNIAQAAIAACNg");
	this.shape_75.setTransform(362.2,486.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00254A").s().p("AgfArQgKgIAAgNQAAgQANgHQALgJAVAAIARAAIAAgIQAAgIgFgGQgGgFgKgBQgJABgGAEQgGAFAAAHIgRAAQgBgIAGgHQAFgHAKgEQAJgEAJAAQASAAAJAIQALAJAAAPIAAAtQAAAOAEAJIAAABIgSAAQgCgDgBgHQgMAMgQAAQgOAAgKgJgAgXAUQAAAIAFAFQAFAEAJAAQAHAAAHgEQAIgEADgHIAAgVIgNAAQgfABAAASg");
	this.shape_76.setTransform(354.7,488.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00254A").s().p("AglA0QgOgRAAgcIAAgNQAAgSAHgPQAGgOANgHQAMgJAPAAQAWABANALQANAMACAWIgSAAQgCgRgIgGQgHgIgPAAQgQAAgKAMQgJANAAAXIAAANQAAAWAJANQAKANAPAAQAOAAAJgHQAHgHADgQIASAAQgDAVgNAMQgNAMgWAAQgXgBgPgRg");
	this.shape_77.setTransform(343.5,486.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Services
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgKgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgQIAoAAIACAOQAFgIAGgEQAHgEAJAAQAQAAAIAKQAJAJAAAUIAAArIAMADIAAAQg");
	this.shape_78.setTransform(524.5,449.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00254A").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgIgKgBQgKABgEAIg");
	this.shape_79.setTransform(513.1,449.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_80.setTransform(504.7,447.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_81.setTransform(498.1,448.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgHQALgHAWAAIANAAIAAgKQAAgHgEgFQgEgDgHAAIgIAAIgHADIgBALIgUAAIAAgXQAHgEAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAADIAIACIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAFAAAFgCQAEgDADgFIAAgPIgNAAQgIAAgEAFg");
	this.shape_82.setTransform(489.5,449.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_83.setTransform(481.1,447.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_84.setTransform(472,449.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00254A").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEAOQACACAEAAIAJABQAHAAAFgCQAEgEAAgFQAAgEgEgEQgFgDgKgCQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKAEAGAEIABAZIgTAAIgDgNIgHgDQgEgCgFABQgGAAgEACQgEAEAAAEQAAAFAEADQAEADALACQASAEAJAHQAJAGAAANQAAAOgLAIQgMAJgSAAQgMAAgJgDg");
	this.shape_85.setTransform(461.5,449.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgrQAAgKgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgQIAoAAIACAOQAEgIAIgEQAGgEAJAAQAPAAAJAKQAJAJgBAUIAAArIAOADIAAAQg");
	this.shape_86.setTransform(450.5,449.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00254A").s().p("AgbBEIAAgQIAOgEIAAhfIgOgDIAAgQIA3AAIAAAQIgPADIAABfIAPAEIAAAQg");
	this.shape_87.setTransform(441.1,447.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00254A").s().p("AgeAmQgNgPAAgVIAAgDQAAgVANgPQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgQIgFgCQgDgBgDgBQgLABgFAIQgEAIAAANIAAADQAAANAEAIQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAPgLAKQgMALgSAAQgVAAgMgOg");
	this.shape_88.setTransform(428.1,449.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_89.setTransform(420.1,447.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_90.setTransform(413.5,448.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_91.setTransform(406.4,448.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00254A").s().p("AASBEIAAgQIAJgCIgGgTIgqAAIgGATIAJACIAAAQIgtAAIAAgQIAJgCIAph0IAbAAIAoB0IAKACIAAAQgAgPALIAfAAIgQgvIAAAAg");
	this.shape_92.setTransform(396.1,447.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgGQgFgHgGgBQAKgLAIAAQAHAAAJATIADAGQAPgZAYgYQAYgZAYgOIAEAFQgVAPgYAeQgXAfgNAbIgHAFIgLAIIgGgOg");
	this.shape_93.setTransform(377.4,446.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIABAOQAEgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_94.setTransform(529.6,408.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_95.setTransform(522.3,406.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXAAIAMAAIAAgLQAAgHgEgEQgEgDgIAAIgIABIgFACIgCALIgVAAIAAgWQAIgFAJgEQAKgDALAAQASAAAMAJQALAJAAARIAAAoIAAAFIABAEIAIABIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgIgIgAgPAMQgEAEAAAFQAAAFADADQAEADAGAAQAFAAAEgCQAFgEADgDIAAgQIgMAAQgJAAgFAFg");
	this.shape_96.setTransform(514.2,408.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_97.setTransform(503,410.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_98.setTransform(492.2,408.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00254A").s().p("AAvBDQgNAAgGgGQgFgIAAgLIAAgIQAAgJgGgGQgEgGgKAAIgWAAIAAAjIAPAEIAAAPIg4AAIAAgPIAPgEIAAhfIgPgDIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAHgLAEQAMAEAGAHQAFAJAAAMIAAAHQAAAEACADQABACAFABIADAAIAAAQgAgTgHIATAAQALAAAFgFQAGgEAAgKQAAgJgGgFQgFgGgLABIgTAAg");
	this.shape_99.setTransform(480.8,406.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_100.setTransform(464.4,408.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00254A").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_101.setTransform(455.8,407.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_102.setTransform(447.2,408.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_103.setTransform(438.4,408.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00254A").s().p("AgeAmQgNgPAAgVIAAgDQAAgVANgPQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgQIgFgCQgDgCgDABQgLAAgFAIQgEAIAAANIAAADQAAANAEAIQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAPgLAKQgMALgSAAQgVAAgMgOg");
	this.shape_104.setTransform(429.2,408.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAGgIAHgEQAGgEAJAAQAPAAAJAKQAIAJAAAVIAAAqIAOADIAAAQg");
	this.shape_105.setTransform(418.2,408.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00254A").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_106.setTransform(406.8,408.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00254A").s().p("AglAzQgRgTgBgeIAAgDQABgdARgUQARgSAagBQAQABAMAFQANAGAIAKIAAAaIgUAAIgCgSQgFgEgFgCQgHgCgIAAQgRAAgJAMQgKANAAAVIAAADQAAAVAKANQAJAMARAAQAIAAAHgCQAGgCAEgEIACgSIAUAAIAAAbQgIAJgNAGQgMAGgQAAQgaAAgRgTg");
	this.shape_107.setTransform(395.3,406.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgCQAKgLAIAAQAHAAAJATIADAGQAPgaAYgXQAYgZAYgOIAEAFQgVAPgYAfQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_108.setTransform(377.4,405.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_109.setTransform(559.5,367.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_110.setTransform(552.3,365.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgIAAIgIABIgGACIgBALIgVAAIAAgWQAIgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAGAAADgCQAFgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_111.setTransform(544.2,367.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAEgGAGgEQAGgDAIAAQASAAALAOQALAPgBAXIAAACQABAWgLANQgLAOgSAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgDADgDAEIAAArQADAEADADQAEACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgEACg");
	this.shape_112.setTransform(532.9,369.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_113.setTransform(522.2,367.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00254A").s().p("AAvBDQgOAAgFgGQgFgIAAgLIAAgIQAAgKgFgFQgGgGgJAAIgVAAIAAAjIAOAEIAAAPIg4AAIAAgPIAPgEIAAhgIgPgCIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAHgKAEQAMAEAFAHQAFAJAAAMIAAAHQAAAEACADQACACADAAIAEABIAAAQgAgSgHIASAAQAKAAAHgFQAFgEAAgKQAAgJgFgFQgGgGgLABIgSAAg");
	this.shape_114.setTransform(510.7,365.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_115.setTransform(494.4,367.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00254A").s().p("AgeAmQgNgOAAgXIAAgCQAAgWANgOQAMgOAXAAQAMAAAJAEQAKADAGAHIABAaIgWAAIgFgQIgFgCQgDgCgDABQgLAAgFAIQgEAJAAAMIAAACQAAAOAEAIQAEAIAKAAQAHAAAFgEQAEgFAAgGIAZAAIAAAAQAAAPgLALQgMAKgSAAQgVAAgMgOg");
	this.shape_116.setTransform(484.3,367.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgHAAIgJABIgGACIgBALIgUAAIAAgWQAHgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgFAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAGAAAEgCQAEgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_117.setTransform(474.3,367.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPAAAXIAAACQAAAWgKANQgLAOgSAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgEADgDAEIAAArQADAEAEADQADACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgDACg");
	this.shape_118.setTransform(463.1,369.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00254A").s().p("AgbBAQgNgFgJgJIAAgcIAVAAIACATQAEADAIADQAGACAIAAQAMAAAGgEQAFgFAAgIQAAgIgFgFQgGgEgNgEQgYgHgMgJQgNgKAAgQQAAgQAOgLQAOgKAWgBQAOAAANAGQAMAEAJAIIAAAbIgUAAIgDgSIgLgEQgGgCgIAAQgKAAgHAFQgFAFgBAHQAAAHAHAFQAGAEAPAFQAWAGALAJQANALAAAQQAAASgPAJQgNALgXAAQgOgBgNgFg");
	this.shape_119.setTransform(451.9,365.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_120.setTransform(438.2,365.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00254A").s().p("AATAyIgTg6IAAAAIgSA6IgWAAIgWhSIgKgBIAAgQIAuAAIAAAQIgLACIAKAtIAAAAIATg/IARAAIATA/IABAAIAJgtIgLgCIAAgQIAuAAIAAAQIgKABIgVBSg");
	this.shape_121.setTransform(427.6,367.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgHgEgEQgEgDgHAAIgJABIgGACIgBALIgUAAIAAgWQAHgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAFAAAFgCQAEgEADgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_122.setTransform(414.9,367.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEADQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_123.setTransform(405.7,367.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00254A").s().p("AglAyQgRgSgBgeIAAgDQABgeARgTQARgSAagBQAQABAMAFQANAGAIAJIAAAbIgUAAIgCgSQgFgEgFgCQgHgDgIAAQgRAAgJANQgKANAAAVIAAADQAAAVAKANQAJAMARAAQAIAAAHgBQAGgDAEgEIACgSIAUAAIAAAbQgIAJgNAGQgMAGgQAAQgaAAgRgUg");
	this.shape_124.setTransform(395.3,365.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgDQAKgKAIAAQAHAAAJATIADAGQAPgaAYgYQAYgYAYgOIAEAFQgVAOgYAgQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_125.setTransform(377.4,364);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00254A").s().p("AgQBFQgJgCgHgEIAFgTIANAFQAGACAHAAQAJAAAFgHQAFgGAAgKIAAgHQgEAGgGADQgGADgHAAQgTAAgKgOQgKgNAAgWIAAgCQAAgXAKgPQAKgOATAAQAIAAAGADQAGAEAFAHIACgNIAXAAIAABhQAAAUgMAMQgNALgUAAQgIAAgIgCgAgNgpQgEAJAAAOIAAACQAAAOAEAGQAFAIAJAAQAGAAAEgDQAFgCACgEIAAgrQgCgEgFgDQgEgCgGAAQgJAAgFAIg");
	this.shape_126.setTransform(608.8,328.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAFgHAHgFQAHgEAJAAQAQAAAIAJQAJAKAAAVIAAAqIAMADIAAAQg");
	this.shape_127.setTransform(597.6,326.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_128.setTransform(588.5,324.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00254A").s().p("AgfBJIAAgQIAOgDIAAg9IgQAAIAAgTIAQAAIAAgLQAAgRAJgJQAJgJARAAIAIAAIAIACIgDAUIgEgBIgFAAQgHAAgDADQgDAEAAAHIAAALIATAAIAAATIgTAAIAAA9IAMADIAAAQg");
	this.shape_129.setTransform(582.3,324.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_130.setTransform(573,326.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_131.setTransform(562.4,326.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIAEABIgDAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_132.setTransform(553.3,326.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00254A").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAoAAIABAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgLAOgRAAQgJAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgFADgCAEIAAArQACAEAFADQADACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgDACg");
	this.shape_133.setTransform(543.2,328.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAOQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgMAAQgFAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_134.setTransform(533.8,326.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_135.setTransform(524.5,326.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00254A").s().p("AgIA4QgHgIAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgHg");
	this.shape_136.setTransform(515.9,325.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQAMgGAWgBIAMAAIAAgKQAAgGgEgFQgEgDgHAAIgIABIgGACIgCALIgUAAIAAgWQAHgGAJgDQAKgDAMAAQARAAAMAJQAMAJgBARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgIgIgAgPALQgEAFAAAFQAAAFADADQAEADAFAAQAHAAAEgDQAFgDACgDIAAgQIgMAAQgJABgFADg");
	this.shape_137.setTransform(507.3,326.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00254A").s().p("AAZBDIgYhYIgBAAIgYBYIgZAAIgch0IgLgBIAAgRIAyAAIAAARIgMACIAPBJIABAAIAZhcIATAAIAaBcIAAAAIAQhJIgNgCIAAgRIAyAAIAAARIgLABIgcB0g");
	this.shape_138.setTransform(492.7,324.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00254A").s().p("AgIA4QgHgIAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgHg");
	this.shape_139.setTransform(475.4,325.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00254A").s().p("AAFAzIAAgQIAMgDIAAgqQAAgLgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIACAOQAFgHAGgFQAHgEAJAAQAQAAAIAJQAJAKAAAVIAAAqIANADIAAAQg");
	this.shape_140.setTransform(465.9,326.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_141.setTransform(454.7,326.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00254A").s().p("AAiAzIAAgQIALgDIAAgpQAAgLgDgFQgEgEgHAAQgGAAgEACQgFADgCAFIAAACIAAADIAAAuIALADIAAAQIgwAAIAAgQIALgDIAAgpQAAgLgEgFQgDgEgIAAQgFAAgEACQgEACgDAEIAAA1IAMADIAAAQIg0AAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIABANQAFgHAHgEQAIgEAJAAQAKAAAGAEQAGAFAEAIQAFgIAHgEQAIgFAKAAQAOAAAJAKQAJALAAAUIAAApIANADIAAAQg");
	this.shape_142.setTransform(440.9,326.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_143.setTransform(427,326.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00254A").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEANQACADAEABIAJABQAHAAAFgDQAEgEAAgEQAAgFgEgDQgFgDgKgDQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKADAGAFIABAZIgTAAIgDgNIgHgDQgEgCgFAAQgGABgEADQgEADAAAFQAAAEAEADQAEADALACQASAEAJAGQAJAIAAAMQAAAOgLAJQgMAIgSAAQgMAAgJgDg");
	this.shape_144.setTransform(417.2,326.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQALgGAWgBIANAAIAAgKQAAgGgEgFQgEgDgHAAIgIABIgHACIgBALIgUAAIAAgWQAHgGAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgJgIgAgOALQgFAFAAAFQAAAFADADQADADAHAAQAFAAAFgDQAEgDADgDIAAgQIgNAAQgIABgEADg");
	this.shape_145.setTransform(407.2,326.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00254A").s().p("Ag5BDIAAgQIAPgDIAAhgIgPgCIAAgRIAPAAIAsAAQAYABAOAIQANAKAAASQAAAKgFAHQgFAHgJAEQAMACAGAJQAGAIAAALQAAATgNAKQgNALgXgBgAgPAvIAYAAQALgBAFgEQAGgEAAgKQAAgKgFgFQgFgFgKAAIgaAAgAgPgKIASAAQALAAAGgEQAGgFAAgIQAAgKgGgFQgGgDgMAAIgRAAg");
	this.shape_146.setTransform(395.5,324.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgGgGgCQAKgKAIAAQAHAAAJATIADAGQAPgaAYgYQAYgZAYgNIAEAFQgVAOgYAgQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_147.setTransform(377.4,323);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00254A").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgRIAnAAIACAPQADgHAGgFQAFgEAHAAIAFAAIADABIgCAYIgLAAQgGAAgEACQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_148.setTransform(553.2,285.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_149.setTransform(546,283.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00254A").s().p("AgmAsQgIgIAAgOQAAgOALgIQAMgGAVgBIANAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgGACIgBALIgUAAIAAgWQAHgGAKgDQAJgDALAAQASAAAMAJQAMAJAAARIAAApIAAAEIAAAEIAIABIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgJgIgAgOALQgFAEAAAGQAAAFADADQADADAHAAQAGAAAEgDQAEgDADgDIAAgPIgNAAQgIAAgEADg");
	this.shape_150.setTransform(537.9,285.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00254A").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAmAAIACAMQAEgGAGgEQAGgDAIAAQASAAALAOQALAPgBAXIAAACQABAWgLANQgLAOgSAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgDADgDAEIAAArQADAEADADQAEACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgEACg");
	this.shape_151.setTransform(526.6,287.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00254A").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_152.setTransform(515.9,285.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00254A").s().p("AAvBDQgOABgFgIQgFgHAAgLIAAgIQAAgJgFgGQgGgGgJAAIgVAAIAAAjIAOADIAAAQIg4AAIAAgQIAPgDIAAhgIgPgCIAAgRIAPAAIAtAAQAXAAANALQANALAAASQAAAKgFAIQgGAIgLADQANAEAFAHQAFAJAAAMIAAAHQAAAEACADQACACADAAIAEABIAAAQgAgSgHIASAAQAKAAAHgFQAFgFAAgJQAAgJgFgFQgGgGgLAAIgSAAg");
	this.shape_153.setTransform(504.4,283.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgRIAnAAIABAPQAFgHAIgFQAGgEAJAAQAPAAAJAJQAIAKAAAVIAAAqIAOADIAAAQg");
	this.shape_154.setTransform(487.2,285.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_155.setTransform(475.8,285.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00254A").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_156.setTransform(467.4,283.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00254A").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACADQACACAEAAIAFAAIAFgBIACATIgJADIgJAAQgNAAgIgIg");
	this.shape_157.setTransform(460.8,284.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00254A").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXgBIAMAAIAAgKQAAgGgEgEQgEgEgIgBIgIACIgFACIgCALIgVAAIAAgWQAIgGAJgDQAKgDAMAAQARAAAMAJQALAJAAARIAAApIAAAEIABAEIAIABIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAHAAADgDQAFgDADgDIAAgPIgMAAQgJAAgFADg");
	this.shape_158.setTransform(452.2,285.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00254A").s().p("AgoA8QgLgOAAgWIAAgCQAAgXALgOQAKgPATAAQAHAAAFADQAGAEAFAGIAAgkIgOgDIAAgQIAOAAIAbAAIAAB8IANADIAAAQIglAAIgCgMQgEAHgHAEQgFADgIAAQgTAAgKgNgAgTAAQgEAIAAAOIAAACQAAANAEAIQAEAHAKAAQAFAAAFgCQAEgDADgEIAAgrQgDgEgEgCQgFgDgEAAQgKAAgFAJg");
	this.shape_159.setTransform(441.3,283.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00254A").s().p("AAGAzIAAgQIALgDIAAgqQAAgLgEgEQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgRIAnAAIABAPQAFgHAIgFQAGgEAJAAQAPAAAJAJQAIAKAAAVIAAAqIAOADIAAAQg");
	this.shape_160.setTransform(429.6,285.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00254A").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_161.setTransform(417.5,285.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00254A").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgJgKABQgKgBgEAJg");
	this.shape_162.setTransform(406.3,285.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00254A").s().p("Ag1BDIAAgQIAPgDIAAhgIgPgCIAAgRIBrAAIAAAlIgVAAIgBgQIgrAAIAAAmIAuAAIAAAUIguAAIAAAkIANADIAAAQg");
	this.shape_163.setTransform(395.1,283.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE82B4").s().p("AgoAvIgCgGQgGgNgEgHQgFgFgGgDQAKgKAIAAQAHAAAJATIADAHQAPgbAYgYQAYgZAYgNIAEAEQgVAQgYAfQgXAegNAbIgHAFIgLAIIgGgOg");
	this.shape_164.setTransform(377.4,281.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAGAzIAAgQIALgDIAAgrQAAgJgEgFQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgOgCIAAgRIAnAAIABAPQAGgIAHgEQAGgEAJAAQAPAAAJAJQAIAKAAAUIAAArIANADIAAAQg");
	this.shape_165.setTransform(525.2,450.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgiAmQgMgPAAgWIAAgBQAAgWAMgPQANgOAVAAQAWAAANAOQAMAPAAAWIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAIAAAOIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgOgFgIQgFgJgKAAQgKAAgEAJg");
	this.shape_166.setTransform(513.8,450.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_167.setTransform(505.5,448.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACACQACADAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_168.setTransform(498.8,449.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgmAsQgIgIAAgOQAAgOALgHQAMgIAVAAIANAAIAAgJQAAgIgEgDQgEgFgIAAIgIABIgFADIgCALIgVAAIAAgXQAIgFAJgDQAKgDALAAQASAAAMAJQALAJABARIAAApIAAAEIAAADIAIACIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgJgIgAgPALQgEAEAAAGQAAAFADADQAEADAGAAQAFAAAEgDQAFgCADgFIAAgOIgNAAQgIAAgFADg");
	this.shape_169.setTransform(490.3,450.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_170.setTransform(481.8,448.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_171.setTransform(472.8,450.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgVAwQgKgDgIgGIAAgWIATAAIAEAMQACACAEABIAJACQAHgBAFgDQAEgCAAgGQAAgEgEgEQgFgCgKgDQgSgDgJgHQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKADAGAFIABAZIgTAAIgDgMIgHgEQgEgBgFgBQgGAAgEADQgEAEAAAEQAAAFAEADQAEADALADQASADAJAGQAJAHAAANQAAAOgLAJQgMAIgSAAQgMAAgJgEg");
	this.shape_172.setTransform(462.2,450.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAFAzIAAgQIAMgDIAAgrQAAgJgEgFQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIABAPQAFgIAHgEQAHgEAJAAQAQAAAIAJQAJAKAAAUIAAArIAMADIAAAQg");
	this.shape_173.setTransform(451.2,450.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgbBEIAAgRIAOgCIAAhhIgOgCIAAgQIA3AAIAAAQIgPACIAABhIAPACIAAARg");
	this.shape_174.setTransform(441.9,448.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgeAmQgNgPAAgWIAAgBQAAgXANgOQAMgOAXAAQAMAAAJADQAKAEAGAHIABAbIgWAAIgFgQIgFgDQgDgCgDAAQgLAAgFAJQgEAIAAAOIAAABQAAANAEAJQAEAIAKAAQAHAAAFgEQAEgFAAgGIAZAAIAAAAQAAAQgLAJQgMALgSAAQgVAAgMgOg");
	this.shape_175.setTransform(428.9,450.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_176.setTransform(420.9,448.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACACQACADAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_177.setTransform(414.2,449.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgIA3QgHgHAAgQIAAgzIgPAAIAAgTIAPAAIAAgZIAaAAIAAAZIARAAIAAATIgRAAIAAAzQAAAFACACQACADAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_178.setTransform(407.1,449.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AASBEIAAgRIAJgBIgFgTIgrAAIgGATIAJABIAAARIguAAIAAgRIAKgBIAph0IAbAAIAoB0IALABIAAARgAgOALIAdAAIgPgvIAAAAg");
	this.shape_179.setTransform(396.8,448.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgnAvIgDgGQgGgNgFgGQgFgHgGgCQALgKAIAAQAHAAAJATIADAHQAPgaAYgYQAZgaAXgNIADAEQgTAPgZAfQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_180.setTransform(378.2,446.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIABAQQAEgJAFgEQAGgEAIAAIAEAAIAEABIgDAZIgMAAQgFAAgEABQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_181.setTransform(530.3,409.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_182.setTransform(523.1,407);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgHQAMgIAWABIAMAAIAAgKQAAgIgEgDQgEgFgHAAIgIABIgHADIgBALIgUAAIAAgXQAHgEAJgEQAKgDAMAAQARAAAMAJQAMAJgBARIAAAoIAAAFIABADIAIACIAAAQIgfAAIgCgFIgBgGQgGAGgGADQgGAEgJAAQgPAAgIgIgAgPALQgEAEAAAGQAAAFADADQAEADAFAAQAGAAAFgDQAFgCACgFIAAgOIgMAAQgJAAgFADg");
	this.shape_183.setTransform(515,409.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAoAAIABAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPABAXIAAACQgBAWgKANQgKAOgSAAQgIAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgEADgDAEIAAArQADAEAEADQADACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgDACg");
	this.shape_184.setTransform(503.7,411.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_185.setTransform(493,409.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAvBEQgOAAgEgIQgGgHAAgLIAAgIQAAgKgGgFQgEgGgKAAIgWAAIAAAkIAPACIAAARIg4AAIAAgRIAOgCIAAhgIgOgDIAAgQIAOAAIAuAAQAXAAANAKQANAKAAATQAAAKgGAIQgFAHgKAEQALADAGAJQAFAIAAAMIAAAHQAAAFABACQADACAEABIADAAIAAARgAgTgHIATAAQALAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgLgBIgTAAg");
	this.shape_186.setTransform(481.5,407.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_187.setTransform(465.2,409.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgIA3QgHgHAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACAUIgJACIgJAAQgNABgIgJg");
	this.shape_188.setTransform(456.6,408.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_189.setTransform(448,409.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIACAQQADgJAGgEQAFgEAHAAIAFAAIAEABIgDAZIgMAAQgFAAgEABQgEADgCAEIAAAwIANADIAAAQg");
	this.shape_190.setTransform(439.2,409.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgWIAAgCQAAgXANgOQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgPIgFgDQgDgBgDgBQgLAAgFAJQgEAIAAAOIAAACQAAAMAEAJQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAQgLAJQgMALgSAAQgVAAgMgOg");
	this.shape_191.setTransform(429.9,409.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAFAzIAAgQIAMgDIAAgrQAAgJgEgFQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg+IgPgCIAAgRIAoAAIACAPQAEgHAIgFQAGgEAJAAQAPAAAJAKQAJAJgBAUIAAArIAOADIAAAQg");
	this.shape_192.setTransform(419,409.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgiAmQgMgPAAgWIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAWgMAPQgNAOgWAAQgVAAgNgOgAgOgWQgFAIAAAOIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgOgFgIQgFgJgKAAQgKAAgEAJg");
	this.shape_193.setTransform(407.6,409.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgmAzQgRgTAAgdIAAgFQAAgdARgSQASgUAaABQAQgBAMAGQANAGAJAKIAAAaIgVAAIgDgSQgEgEgFgDQgGgBgJAAQgQAAgKAMQgKANAAAUIAAAFQAAAUAKANQAKANAPAAQAIAAAIgDQAGgCADgEIADgSIAVAAIAAAbQgJAJgNAGQgMAFgQAAQgaAAgSgSg");
	this.shape_194.setTransform(396,407.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgnAvIgDgGQgGgNgFgGQgFgHgGgBQALgLAIAAQAHAAAJATIADAHQAPgaAYgYQAZgaAXgNIADAEQgTAPgZAfQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_195.setTransform(378.2,405.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIABAQQAEgJAFgEQAGgEAIAAIAEAAIADABIgCAZIgLAAQgGAAgEACQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_196.setTransform(560.3,368.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_197.setTransform(553,366);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgHQALgIAXABIAMAAIAAgKQAAgHgEgFQgEgEgIAAIgIABIgFADIgCALIgVAAIAAgXQAIgEAJgEQAKgDAMAAQARAAAMAJQALAJAAARIAAAoIAAAFIABADIAIACIAAAQIgfAAIgCgFIgCgGQgFAGgGADQgGAEgJAAQgPAAgIgIgAgPAMQgEADAAAGQAAAFADADQAEADAFAAQAHAAADgCQAFgEADgEIAAgPIgMAAQgJABgFAEg");
	this.shape_198.setTransform(544.9,368.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_199.setTransform(533.7,370);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_200.setTransform(522.9,368.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAvBEQgNgBgGgGQgFgIAAgLIAAgIQAAgJgGgGQgEgGgKAAIgWAAIAAAkIAPADIAAAQIg4AAIAAgQIAOgDIAAhgIgOgDIAAgQIAOAAIAuAAQAXAAANAKQANAKAAATQAAAKgGAIQgFAIgLADQAMADAGAJQAFAIAAAMIAAAHQAAAFABACQACACAFABIADAAIAAARgAgTgHIATAAQALAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgLgBIgTAAg");
	this.shape_201.setTransform(511.5,366.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_202.setTransform(495.1,368.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgeAmQgNgPAAgVIAAgDQAAgVANgPQAMgOAXAAQAMAAAJADQAKAEAGAGIABAbIgWAAIgFgPIgFgDQgDgBgDgBQgLAAgFAJQgEAIAAANIAAADQAAANAEAIQAEAIAKAAQAHAAAFgEQAEgEAAgIIAZAAIAAABQAAAPgLAKQgMALgSAAQgVAAgMgOg");
	this.shape_203.setTransform(485.1,368.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgHQALgIAXABIAMAAIAAgKQAAgHgEgFQgEgEgIAAIgIABIgFADIgCALIgVAAIAAgXQAIgEAJgEQAKgDALAAQASAAAMAJQALAJAAARIAAAoIAAAFIABADIAIACIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgIgIgAgPAMQgEADAAAGQAAAFADADQAEADAFAAQAGAAAEgCQAFgEADgEIAAgPIgMAAQgJABgFAEg");
	this.shape_204.setTransform(475.1,368.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgHAAgGgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_205.setTransform(463.8,370);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgcBAQgNgFgIgJIAAgcIAUAAIADATQAFADAHADQAHACAHAAQAMAAAFgFQAGgEAAgIQAAgHgGgGQgFgEgNgEQgYgHgMgIQgMgLAAgQQgBgRAOgJQAPgLAUgBQAPABANAFQAMAEAKAIIAAAbIgVAAIgEgSIgKgEQgHgCgHABQgKgBgHAFQgFAFAAAHQAAAHAGAFQAGAEAPAFQAWAGAMAJQAMALgBAQQAAARgOALQgNAJgXABQgPAAgNgGg");
	this.shape_206.setTransform(452.6,366.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAhpIgOgDIAAgQIAoAAIAAB8IANADIAAAQg");
	this.shape_207.setTransform(439,366);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AATAyIgTg6IAAAAIgSA6IgWAAIgWhSIgKgBIAAgQIAuAAIAAAQIgLACIAKAtIAAAAIATg/IARAAIATA/IABAAIAJgtIgLgCIAAgQIAuAAIAAAQIgKABIgVBSg");
	this.shape_208.setTransform(428.3,368.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgHQALgIAXABIAMAAIAAgKQAAgHgEgFQgEgEgIAAIgIABIgFADIgCALIgVAAIAAgXQAIgEAJgEQAKgDALAAQASAAAMAJQALAJAAARIAAAoIAAAFIABADIAIACIAAAQIgfAAIgCgFIgCgGQgEAGgHADQgGAEgJAAQgPAAgIgIgAgPAMQgEADAAAGQAAAFADADQAEADAFAAQAGAAAEgCQAFgEADgEIAAgPIgMAAQgJABgFAEg");
	this.shape_209.setTransform(415.7,368.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg+IgOgCIAAgRIAmAAIABAQQAEgJAFgEQAGgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_210.setTransform(406.5,368.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgmAzQgRgTAAgeIAAgDQAAgdARgTQASgUAaAAQAQAAAMAGQANAGAJAKIAAAaIgVAAIgDgSQgEgEgFgDQgGgBgJAAQgQAAgKAMQgKANAAAVIAAADQAAAVAKANQAKANAPAAQAIgBAIgCQAGgCADgEIADgSIAVAAIAAAbQgJAJgNAGQgMAFgQABQgagBgSgSg");
	this.shape_211.setTransform(396,366.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgnAvIgDgGQgGgNgFgGQgFgHgGgBQALgLAIAAQAHAAAJATIADAGQAPgZAYgYQAZgaAXgNIADAFQgTAPgZAeQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_212.setTransform(378.2,364.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgQBFQgJgCgHgEIAFgTIANAFQAGACAHAAQAJAAAFgHQAFgGAAgKIAAgHQgEAGgGADQgGADgHAAQgTAAgKgOQgKgNAAgWIAAgCQAAgXAKgPQAKgOATAAQAIAAAGADQAGAEAFAHIACgNIAXAAIAABhQAAAUgMAMQgNALgUAAQgIAAgIgCgAgNgpQgEAJAAAOIAAACQAAAOAEAGQAFAIAJAAQAGAAAEgDQAFgCACgEIAAgrQgCgEgFgDQgEgCgGAAQgJAAgFAIg");
	this.shape_213.setTransform(609.6,329.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAGAzIAAgQIALgDIAAgrQAAgKgEgEQgEgEgJAAQgEAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAFgIAIgEQAGgEAJAAQAPAAAJAKQAIAJAAAUIAAArIAOADIAAAQg");
	this.shape_214.setTransform(598.3,327.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_215.setTransform(589.2,324.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgeBJIAAgQIAMgDIAAg9IgOAAIAAgTIAOAAIAAgLQAAgRAKgJQAJgJARAAIAHAAIAIACIgCAUIgEgBIgFAAQgGAAgEADQgDAEgBAHIAAALIAUAAIAAATIgUAAIAAA9IAOADIAAAQg");
	this.shape_216.setTransform(583,324.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_217.setTransform(573.8,327.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAANAFAJQAEAIAKAAQALAAAEgIQAFgJAAgNIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_218.setTransform(563.1,327.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIACAPQADgJAGgEQAFgEAHAAIAFAAIADABIgCAZIgMAAQgFAAgEACQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_219.setTransform(554,327.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgyBGIAAgQIANgDIAAhkIgOgCIAAgRIAnAAIABAMQAFgGAFgEQAGgDAIAAQATAAAKAOQAKAPAAAXIAAACQAAAWgKANQgLAOgRAAQgJAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgDguQgEADgDAEIAAArQADAEAEADQADACAGAAQAKAAAFgIQAEgGAAgOIAAgCQAAgOgEgJQgFgIgKAAQgGAAgDACg");
	this.shape_220.setTransform(544,329);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg9IgPgDIAAgQIAnAAIABAPQAEgJAGgEQAFgEAHAAIAFAAIADABIgCAZIgLAAQgGAAgEACQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_221.setTransform(534.5,327.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_222.setTransform(525.2,327.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_223.setTransform(516.6,326);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgmAsQgIgIAAgOQAAgOALgHQAMgHAVAAIANAAIAAgKQAAgHgEgFQgEgDgHAAIgIABIgHACIgBALIgUAAIAAgWQAHgFAKgEQAJgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAADIAIACIAAAQIgfAAIgCgFIgBgFQgFAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQADADAHAAQAGAAAEgCQAEgDADgFIAAgPIgNAAQgIAAgEAFg");
	this.shape_224.setTransform(508.1,327.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAZBEIgYhYIgBAAIgYBYIgZAAIgch1IgLgBIAAgQIAyAAIAAAQIgMACIAPBJIABAAIAZhbIATAAIAaBbIAAAAIAQhJIgNgCIAAgQIAyAAIAAAQIgLABIgcB1g");
	this.shape_225.setTransform(493.5,325.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_226.setTransform(476.1,326);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AAGAzIAAgQIALgDIAAgrQAAgKgEgEQgEgEgJAAQgDAAgFACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgOgDIAAgQIAnAAIABAOQAFgIAHgEQAHgEAJAAQAQAAAIAKQAJAJAAAUIAAArIAMADIAAAQg");
	this.shape_227.setTransform(466.6,327.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_228.setTransform(455.5,327.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AAiAzIAAgQIALgDIAAgpQAAgMgDgDQgEgFgHAAQgGAAgEACQgFADgCAEIAAADIAAADIAAAuIALADIAAAQIgwAAIAAgQIALgDIAAgpQAAgLgEgEQgDgFgIAAQgFAAgEACQgEACgDAEIAAA1IAMADIAAAQIg0AAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIABANQAFgIAHgDQAIgEAJAAQAKAAAGAEQAGAEAEAJQAFgIAHgFQAIgEAKAAQAOAAAJAKQAJAKAAAVIAAApIANADIAAAQg");
	this.shape_229.setTransform(441.6,327.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_230.setTransform(427.7,327.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgVAxQgKgEgIgGIAAgXIATAAIAEAOQACABAEABIAJABQAHAAAFgCQAEgEAAgFQAAgEgEgEQgFgDgKgCQgSgEgJgGQgJgHAAgMQAAgNAKgJQALgJATAAQAKAAALADQAKAEAGAEIABAZIgTAAIgDgNIgHgDQgEgCgFABQgGAAgEACQgEAEAAAEQAAAFAEADQAEADALACQASAEAJAHQAJAGAAANQAAAOgLAIQgMAJgSAAQgMAAgJgDg");
	this.shape_231.setTransform(418,327.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgmAsQgIgIAAgOQAAgOALgHQAMgHAVAAIANAAIAAgKQAAgHgEgFQgEgDgIAAIgIABIgFACIgCALIgVAAIAAgWQAIgFAJgEQAKgDALAAQASAAAMAJQAMAJAAARIAAAoIAAAFIAAADIAIACIAAAQIgfAAIgCgFIgCgFQgEAFgHAEQgGADgJAAQgPAAgJgIgAgOAMQgFAEAAAFQAAAFADADQAEADAGAAQAFAAAEgCQAFgDADgFIAAgPIgNAAQgIAAgEAFg");
	this.shape_232.setTransform(407.9,327.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("Ag5BEIAAgQIAPgEIAAhfIgPgDIAAgQIAPAAIAsAAQAYAAAOAJQANAJAAATQAAAJgFAHQgFAHgJAFQAMABAGAJQAGAIAAALQAAAUgNAJQgNALgXAAgAgPAuIAYAAQALABAFgFQAGgFAAgJQAAgKgFgFQgFgFgKAAIgaAAgAgPgKIASAAQALAAAGgFQAGgEAAgIQAAgKgGgFQgGgDgMAAIgRAAg");
	this.shape_233.setTransform(396.2,325.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgnAvIgDgGQgGgNgFgGQgFgHgGgBQALgLAIAAQAHAAAJATIADAGQAPgZAYgYQAZgZAXgOIADAFQgTAPgZAeQgXAfgNAbIgGAEIgNAJIgEgOg");
	this.shape_234.setTransform(378.2,323.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AghAzIAAgQIANgDIAAg9IgOgDIAAgQIAmAAIABAOQAEgHAFgFQAGgEAIAAIAEAAIADABIgCAYIgLAAQgGABgEACQgEACgCAEIAAAwIANADIAAAQg");
	this.shape_235.setTransform(554,286);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_236.setTransform(546.7,283.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAXAAIAMAAIAAgLQAAgGgEgFQgEgDgIAAIgIABIgFACIgCALIgVAAIAAgWQAIgFAJgEQAKgDAMAAQARAAAMAJQALAJAAARIAAAoIAAAFIABAEIAIABIAAAQIgfAAIgCgFIgCgFQgFAFgGAEQgGADgJAAQgPAAgIgIgAgPAMQgEAEAAAFQAAAFADADQAEADAFAAQAHAAADgCQAFgEADgDIAAgQIgMAAQgJAAgFAFg");
	this.shape_237.setTransform(538.6,286.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgzBGIAAgQIAOgDIAAhkIgPgCIAAgRIAnAAIACAMQAEgGAHgEQAFgDAIAAQASAAALAOQALAPAAAXIAAACQAAAWgLANQgKAOgTAAQgIAAgFgDQgGgDgEgGIAAAdIAMADIAAAQgAgEguQgEADgCAEIAAArQACAEAEADQAEACAGAAQAKAAAEgIQAFgGAAgOIAAgCQAAgOgFgJQgEgIgKAAQgGAAgEACg");
	this.shape_238.setTransform(527.4,287.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgeAmQgNgOAAgVIAAgDQAAgWAMgPQANgOATAAQAVAAALAMQALANAAAUIAAAOIg7AAIAAABQABAKAGAGQAFAGAKAAQAJAAAFgBIANgGIAIARQgGAFgKADQgKADgMAAQgVAAgNgOgAgKgYQgEAFgBAKIAAAAIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgGAAgFAGg");
	this.shape_239.setTransform(516.6,286.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAvBDQgNAAgGgGQgFgIAAgLIAAgIQAAgJgGgGQgEgGgKAAIgWAAIAAAjIAPAEIAAAPIg4AAIAAgPIAOgEIAAhfIgOgDIAAgRIAOAAIAuAAQAXAAANALQANALAAASQAAAKgGAIQgFAHgLAEQAMAEAGAHQAFAJAAAMIAAAHQAAAFABACQACACAFABIADAAIAAAQgAgTgHIATAAQALAAAFgFQAGgEAAgKQAAgJgGgFQgFgGgLABIgTAAg");
	this.shape_240.setTransform(505.2,284.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAFAzIAAgQIAMgDIAAgqQAAgLgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIACAOQAFgIAGgEQAHgEAJAAQAQAAAIAKQAJAJAAAVIAAAqIAMADIAAAQg");
	this.shape_241.setTransform(487.9,286);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_242.setTransform(476.5,286.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgZBIIAAgQIANgDIAAg9IgOgDIAAgQIAoAAIAABQIANADIAAAQgAgMgzIAAgUIAaAAIAAAUg");
	this.shape_243.setTransform(468.2,283.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgIA4QgHgIAAgRIAAgyIgPAAIAAgTIAPAAIAAgYIAaAAIAAAYIARAAIAAATIgRAAIAAAyQAAAGACACQACADAEAAIAFAAIAFgBIACATIgJADIgJABQgNgBgIgHg");
	this.shape_244.setTransform(461.5,285);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AglAsQgJgIAAgOQAAgOALgIQALgGAWAAIANAAIAAgLQAAgGgEgFQgEgDgHAAIgIABIgHACIgBALIgUAAIAAgWQAHgFAKgEQAJgDAMAAQARAAAMAJQAMAJAAARIAAAoIAAAFIAAAEIAIABIAAAQIgfAAIgCgFIgBgFQgGAFgGAEQgGADgJAAQgPAAgIgIgAgOAMQgFAEAAAFQAAAFADADQADADAGAAQAGAAAFgCQAFgEACgDIAAgQIgNAAQgIAAgEAFg");
	this.shape_245.setTransform(453,286.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgoA8QgLgOAAgWIAAgCQAAgXALgOQAKgPATAAQAHAAAFADQAGAEAFAGIAAgkIgOgDIAAgQIAOAAIAbAAIAAB8IANADIAAAQIglAAIgCgMQgEAHgHAEQgFADgIAAQgTAAgKgNgAgTAAQgEAIAAAOIAAACQAAANAEAIQAEAHAKAAQAFAAAFgCQAEgDADgEIAAgrQgDgEgEgCQgFgDgEAAQgKAAgFAJg");
	this.shape_246.setTransform(442.1,284);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AAFAzIAAgQIAMgDIAAgqQAAgLgEgEQgEgEgIAAQgFAAgEACQgEACgDAEIAAA1IALADIAAAQIgzAAIAAgQIANgDIAAg9IgPgDIAAgQIAoAAIACAOQAFgIAGgEQAHgEAJAAQAQAAAIAKQAJAJAAAVIAAAqIAMADIAAAQg");
	this.shape_247.setTransform(430.3,286);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgiApQgJgKAAgWIAAgoIgLgDIAAgQIALAAIAbAAIAAA8QAAALAEAEQADAFAIAAQAFAAAFgCQAEgCADgEIAAg1IgMgDIAAgQIAMAAIAbAAIAABQIAMADIAAAQIgjAAIgCgMQgFAHgHADQgGAEgJAAQgQAAgJgKg");
	this.shape_248.setTransform(418.2,286.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgiAmQgMgOAAgXIAAgBQAAgXAMgOQANgOAVAAQAWAAANAOQAMAOAAAXIAAABQAAAXgMAOQgNAOgWAAQgVAAgNgOgAgOgWQgFAJAAANIAAABQAAAOAFAIQAEAIAKAAQALAAAEgIQAFgIAAgOIAAgBQAAgNgFgJQgFgIgKAAQgKAAgEAIg");
	this.shape_249.setTransform(407.1,286.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("Ag1BDIAAgPIAPgEIAAhfIgPgDIAAgRIBrAAIAAAmIgVAAIgBgQIgrAAIAAAlIAuAAIAAATIguAAIAAAlIANAEIAAAPg");
	this.shape_250.setTransform(395.9,284.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgnAvIgDgGQgGgNgFgHQgFgFgGgCQALgLAIAAQAHAAAJATIADAGQAPgaAYgXQAZgZAXgOIADAFQgTAPgZAfQgXAegNAbIgGAFIgNAIIgEgOg");
	this.shape_251.setTransform(378.2,282.7);

	var maskedShapeInstanceList = [this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]}).wait(30));

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

	// Layer_3
	this.instance_1 = new lib.RodButton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124.2,355.4,1,1,0,0,0,126.7,241.3);
	this.instance_1.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.RodButton(), 3);

	this.rod_button = new lib.RodButton();
	this.rod_button.name = "rod_button";
	this.rod_button.parent = this;
	this.rod_button.setTransform(444.7,355.3,1,1,0,0,0,126.7,241.3);
	new cjs.ButtonHelper(this.rod_button, 0, 1, 2, false, new lib.RodButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.rod_button}]},11).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:444.7,y:355.3,alpha:1},11).wait(19));

	// Layer_11
	this.instance_2 = new lib.Artboard1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(324,0);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.247)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_252.setTransform(474,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_252},{t:this.instance_2}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261.1,300,874.9,600);
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