/**
 * CanvasAPI provides an api for drawing objects within the dom.
 */
function CanvasAPI(config)
{
	CanvasAPI.superclass.constructor.apply(this, arguments);
}

CanvasAPI.NAME = "canvasAPI";

CanvasAPI.ATTRS = {
	parent: {
		getter: function()
		{
			return this._parent;
		},

		setter: function(value)
		{
			if(Y.Lang.isString(value))
			{
				this._parent = document.getElementById(value);
			}
			else
			{
				this._parent = value;
			}
			return this._parent;
		}
	},

	canvas: {
		getter: function() {
			if(!this._canvas)
			{
				this._setCanvas();
			}
			return this._canvas;
		}
	},

	context: {
		getter: function() {
			if(!this._context)
			{
				this._context = this.get("canvas").getContext("2d");
			}
			return this._context;
		}
	}

};

Y.extend(CanvasAPI, Y.Base, {
	_setCanvas: function()
	{
		var parent = this.get("parent");
		this._canvas = document.createElement("canvas");
		this._canvas.width = parseInt(this._parent.style.width, 10) || parent.width;
		this._canvas.height = parseInt(this._parent.style.height, 10) || parent.height;
		this._context = this._canvas.getContext("2d");
		parent.appendChild(this._canvas);
	},

	_canvas: null,

	_context: null,

	circle: function(obj)
	{
		var x = obj.x || 0,
			y = obj.y || 0,
			radius = obj.radius,
			startAngle = obj.startAngle || 0,
			endAngle =  obj.endAngle || 360,
			anticlockwise = obj.anticlockwise || false,
			sc = obj.strokeColor,
			lw = obj.lineWidth,
			fc = obj.fillColor,
			ctx = this.get("context"); 
		obj.startAngle *= (Math.PI/180);
		obj.endAngle *= (Math.PI/180);
		ctx.beginPath();
		ctx.arc(x + radius, y + radius, radius, startAngle, endAngle, anticlockwise);
		if(sc)
		{
			ctx.lineWidth = lw;
			ctx.strokeStyle = sc;
			ctx.stroke();
		}
		if(fc)
		{
			ctx.fillStyle = fc;
			ctx.fill();
		}
	},

	rectangle: function(obj)
	{
		var w = obj.width,
			h = obj.height,
			x = obj.x || 0,
			y = obj.y || 0,
			lw = obj.lineWidth || 1,
			fc = obj.fillColor,
			sc = obj.strokeColor,
			ctx = this.get("context");
			if(fc)
			{
				ctx.fillStyle = fc;
				ctx.fillRect(x, y, w, h);
			}
			if(sc)
			{
				ctx.strokeStyle = sc;
				ctx.lineWidth = lw;
				ctx.strokeRect(x, y, w, h);
			}
	}
});

Y.CanvasAPI = CanvasAPI;
