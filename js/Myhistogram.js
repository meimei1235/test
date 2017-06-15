function Myhistogram(option){
	this._init(option);
}
Myhistogram.prototype = {
	_init: function(option){
		this.x = option.x || 0;
		this.y = option.y || 0;
		this.w = option.w || 20;
		this.h = option.h || 0;
		this.fillStyle = option.fillStyle || "orange";
		this.opacity = option.opacity || 1;
		this.data = option.data || [];
		var x0 = 0;
		var y0 = 0;
		this.group = new Konva.Group({
			x: this.x,
			y: this.y
		});
		this.rectGroup = new Konva.Group({
			x: 0,
			y: 0
		});
		this.group.add(this.rectGroup);
		this.textGroup = new Konva.Group({
			x: 0,
			y: 0
		});
		this.group.add(this.textGroup);
		var baseLine = new Konva.Line({
			points: [x0, y0, x0 + this.w, y0],
			strokeWidth: 1,
			stroke: "lightgreen"
		});
		this.group.add(baseLine);
		var rectWidth = this.w / this.data.length;
		var height = this.h;
		var self = this;
		this.data.forEach(function(item, index){
			var rect = new Konva.Rect({
				x: x0 + (index + 1/4)*rectWidth,
				y: y0 - item.value * height,
				width: 1/2 * rectWidth,
				height: item.value * height,
				fill: item.color,
				opacity: .8,
				cornerRadius: 10,
				shadowBlur: 10,
				shadowColor: "black",
			});
			self.rectGroup.add(rect);
			var text = new Konva.Text({
				x: x0 + index * rectWidth,
				y: y0 - item.value * height - 20,
				fontSize: 14,
				text: item.value * 100 + "%",
				fill: item.color,
				width: rectWidth,
				align: "center",
				name: "text"
			});
			self.textGroup.add(text);
			var textBottom = new Konva.Text({
				x: x0 + (index + 1/4) * rectWidth,
				y: y0,
				fontSize: 14,
				text: item.name,
				fill: item.color,
				align: "center",
				rotation: 30
			});
			self.group.add(textBottom);
		});
	},
	addToLayer: function(layer){
		layer.add(this.group);
	},
	animate_play: function(){
		var self = this;
		self.rectGroup.getChildren().each(function(item, index){
			item.y(0);
			item.height(0);
			item.to({
				duration: 1,
				y: -self.data[index].value * self.h,
				height: self.data[index].value * self.h,
			});
		});
		this.textGroup.getChildren().each(function(item, index){
			item.y(-14);
			item.to({
				duration: 1,
				y: -self.data[index].value * self.h -20
			});
		});
	}
};