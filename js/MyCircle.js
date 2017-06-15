function MyCircle(option){
	this._init(option);
}
MyCircle.prototype = {
	_init: function(option){
		option = option || {};
		this.x = option.x === 0 ? 0: option.x || 100;
		this.y = option.y === 0 ? 0: option.y || 100;
		this.angle = option.angle === 0 ? 0: option.angle || 0;
		this.fillStyle = option.fillStyle || "silver";
		this.strokeStyle = option.strokeStyle || "red";
		this.strokeWidth = option.strokeWidth || 2;
		this.opacity = option.opacity || 1;
		this.scaleX = option.scaleX || 1;
		this.scaleY = option.scaleY || 1;
		this.counterclockwise = option.counterclockwise ===true ? true: option.counterclockwise || false;
		this.startAngle = (option.startAngle === 0? 0: option.startAngle || 0) * Math.PI / 180;
		this.endAngle = (option.endAngle === 0? 0: option.endAngle || 0) * Math.PI / 180;
		/*this.startAngle = this.startAngle * Math.PI / 180;
		this.endAngle = this.endAngle * Math.PI / 180;*/
		this.r = option.r || 100;
	},
	render: function(ctx){
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.scale(this.scaleX, this.scaleY);
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.globalAlpha = this.opacity;
		ctx.fillStyle = this.fillStyle;
		ctx.strokeStyle = this.strokeStyle;
		ctx.moveTo(0, 0);
		ctx.arc(0, 0, this.r, this.startAngle, this.endAngle, this.counterclockwise);
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	}
};