function CircleText(option){
	this._init(option);
}
CircleText.prototype = {
	_init: function(option){
		this.x = option.x || 0;
		this.y = option.y || 0;
		this.innerRadius = option.innerRadius || 0;
		this.outerRadius = option.outerRadius || 0;
		this.innerStyle = option.innerStyle || "blue";
		this.outerStyle = option.outerStyle || "#ccc";
		this.strokeWidth = 2;
		this.text = option.text || "canvas";
		this.group = new Konva.Group({
			x: this.x,
			y: this.y
		});
		var innerCircle = new Konva.Circle({
			x: 0,
			y: 0,
			radius: this.innerRadius,
			fill: this.innerStyle,
			opacity: .6
		});
		this.group.add(innerCircle);
		var outerRing = new Konva.Ring({
			x: 0,
			y: 0,
			innerRadius: this.innerRadius,
			outerRadius: this.outerRadius,
			fill: this.outerStyle,
			opacity: .3
		});
		this.group.add(outerRing);
		var text = new Konva.Text({
			x: 0 - this.outerRadius,
			y: -7,
			width: this.outerRadius * 2,
			fill: "#fff",
			fontSize: 17,
			text: this.text,
			align: "center",
			fontStyle: "bold"
		});
		this.group.add(text);
	},
	addToLayer: function(layer){
		layer.add(this.group);
	}
};