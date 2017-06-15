function MyRect(option){
	this._init(option);
}
MyRect.prototype = {
	_init: function(option){
		option = option || {};
		this.x = option.x === 0 ? 0: option.x || 100;
		this.y = option.y === 0 ? 0: option.y || 100;
		this.w = option.w || 100;
		this.h = option.h || 100;
		this.angle = option.angle === 0 ? 0: option.angle || 0;
		this.fillStyle = option.fillStyle || "yellow";
		this.strokeStyle = option.strokeStyle || "black";
		this.strokeWidth = option.strokeWidth || 2;
		this.scaleX = option.scaleX || 0;
		this.scaleY = option.scaleY || 0;
	},
	render: function(ctx){
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.scale(this.scaleX, this.scaleY);
		ctx.fillStyle = this.fillStyle;
		ctx.fillRect(0, 0, this.w, this.h);
		ctx.strokeStyle = this.strokeStyle;
		ctx.strokeWidth = this.strokeWidth;
		ctx.strokeRect(0, 0, this.w, this.h);
		ctx.restore();
	}
};