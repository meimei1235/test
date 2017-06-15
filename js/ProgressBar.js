function ProgressBar(option){
	this._init(option);
}
ProgressBar.prototype = {
	_init: function(option){
		this.x = option.x || 0;
		this.y = option.y || 0;
		this.w = option.w || 0;
		this.h = option.h || 0;
		this.fillStyle = option.fillStyle || "red";
		this.strokeStyle = option.strokeStyle || "black";
		var innerRect = new Konva.Rect({
			x: this.x,
			y: this.y,
			width: 0,
			height: this.h,
			fill: this.fillStyle,
			cornerRadius: 1/2 * this.h,
			id: "innerRect",
			name: "ss"
		});
		this.innerRect = innerRect;
		var outerRect = new Konva.Rect({
			x: this.x,
			y: this.y,
			width: this.w,
			height: this.h,
			stroke: this.strokeStyle,
			strokeWidth: 4,
			cornerRadius: 1/2 * this.h,
			
		});
		this.group = new Konva.Group({
			x:0,
			y:0
		});
		this.group.add(innerRect);
		this.group.add(outerRect);
	},
	changeValue: function(val){
		if (val > 1) {
			val = 1 /100;
		} 
		var width = this.w * val;
		var innerRect = this.group.find("#innerRect");
		var innerRect = this.innerRect;
		innerRect.to({
			width: width,
			duration: .3,
			easing: Konva.Easings.EasIn
		});
	},
	addToLayer: function(layer){
		layer.add(this.group);
	}
};