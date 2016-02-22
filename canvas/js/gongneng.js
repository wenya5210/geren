function shape(canvas,canvas1,cobj,areaobj,xpobj){
    //  copy
    this.canvas=canvas;
    //  画布
    this.canvas1=canvas1;
    this.cobj=cobj;
    this.areaobj=areaobj;
    this.xpobj=xpobj;
//    保存背景颜色
    this.bgcolor="#000";
    // 边框颜色
    this.bordercolor="#000";
    //  线条宽度
    this.lineWidth=1;
    this.width=canvas1.width;
    this.height=canvas1.height;
    //
    this.type="stroke";
    this.shaps="line";
    //  存储历史内容
    this.history=[];
}
shape.prototype= {
    init: function () {
        this.xpobj.css("display","none");
        //  初始化
        this.areaobj.css("display","none");
        if (this.quyu) {
            this.history.push(this.cobj.getImageData(0, 0, this.width, this.height));
            this.quyu = null;
        }
        this.cobj.fillStyle = this.bgcolor;
        this.cobj.strokeStyle = this.bordercolor;
        this.cobj.lineWidth = this.lineWidth;
    },
    //  直线
    line: function (x, y, x1, y1) {
        this.cobj.beginPath();
        this.cobj.moveTo(x, y);
        this.cobj.lineTo(x1, y1);
        this.cobj.closePath();
        this.cobj.stroke();

    },
    //  矩形
    rect: function (x, y, x1, y1) {
        this.cobj.beginPath();
        this.cobj.rect(x, y, x1 - x, y1 - y);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    //  圆
    circle: function (x, y, x1, y1) {
        //  半径
        var r = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
        this.cobj.beginPath();
        this.cobj.arc(x, y, r, 0, Math.PI * 2);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    start: function (x, y, x1, y1) {
        var r = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
        var r1 = r / 2;
        this.cobj.beginPath();
        this.cobj.moveTo(x + r, y);
        for (var i = 1; i < 10; i++) {
            if (i % 2 == 0) {
                this.cobj.lineTo(x + Math.cos(i * 36 * Math.PI / 180) * r, y + Math.sin(i * 36 * Math.PI / 180) * r);
            } else {
                this.cobj.lineTo(x + Math.cos(i * 36 * Math.PI / 180) * r1, y + Math.sin(i * 36 * Math.PI / 180) * r1);
            }
        }
        this.cobj.closePath();
        this.cobj[this.type]();
    },
    draw: function () {
        var that = this;
        that.init();
        that.canvas.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY;
            that.init();
            that.canvas.onmousemove = function (e) {
                that.cobj.clearRect(0, 0, that.width, that.height);
                // 判断画布上有没内容 如果有 将它保存到数组中
                if (that.history.length > 0) {
                    //
                    that.cobj.putImageData(that.history[that.history.length - 1], 0, 0);
                }
                var endx = e.offsetX;
                var endy = e.offsetY;
                that.init();
                that[that.shaps](startx, starty, endx, endy);
            }
            that.canvas.onmouseup = function () {
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        }
    },
    //  铅笔
    pen: function () {
        //  半径
        var that = this;
        that.init();
        that.canvas.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY;
            that.init();
            that.cobj.beginPath();
            that.cobj.moveTo(startx, starty);
            that.cobj.stroke();
            that.canvas.onmousemove = function (e) {
                //that.cobj.clearRect(0, 0, that.width, that.height);
                // 判断画布上有没内容 如果有 将它保存到数组中
                /*if (that.history.length > 0) {
                 //
                 that.cobj.putImageData(that.history[that.history.length - 1], 0, 0);
                 }*/
                var endx = e.offsetX;
                var endy = e.offsetY;
                that.cobj.lineTo(endx, endy);
                that.cobj.stroke();
            };
            that.canvas.onmouseup = function () {
                that.cobj.closePath();
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        };
    },
    xp: function (xpobj, w, h) {
        var that = this;
        that.init();
        //  图标显示出来并 跟着鼠标走
        that.canvas.onmousemove = function (e) {
            xpobj.css("display", "block");
            var ox = e.offsetX;
            var oy = e.offsetY;
            var lefts = ox - w / 2;
            var tops = oy - h / 2;
            // 判断边界
            if (lefts < 0) {
                lefts = 0;
            }
            if (lefts > that.width - w) {
                lefts = that.width - w;
            }
            if (tops < 0) {
                tops = 0;
            }
            if (tops > that.height - h) {
                tops = that.height - h;
            }
            xpobj.css({
                left: lefts,
                top: tops
            });
        };
        that.canvas.onmousedown = function () {
            that.init();
            that.canvas.onmousemove = function (e) {
                xpobj.css("display", "block");
                var ox = e.offsetX;
                var oy = e.offsetY;
                var lefts = ox - w / 2;
                var tops = oy - h / 2;
                // 判断边界
                if (lefts < 0) {
                    lefts = 0;
                }
                if (lefts > that.width - w) {
                    lefts = that.width - w;
                }
                if (tops < 0) {
                    tops = 0;
                }
                if (tops > that.height - h) {
                    tops = that.height - h;
                }
                xpobj.css({
                    left: lefts,
                    top: tops
                });
                that.cobj.clearRect(lefts, tops, w, h);
            };
            that.canvas.onmouseup = function () {
                xpobj.css("display", "none");
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        };
    },
//    选择
    select: function (area) {
        var that = this;
        that.init();
        that.canvas.onmousedown = function (e) {
            var startx = e.offsetX;    // 开始
            var starty = e.offsetY;
            var min, max, w, h;
            that.init();
            that.canvas.onmousemove = function (e) {
                that.init();
                var endx = e.offsetX;   //  结束
                var endy = e.offsetY;
                min = startx > endx ? endx : startx;
                max = starty > endy ? endy : starty;
                w = Math.abs(endx - startx);
                h = Math.abs(endy - starty);
                area.css({
                    display: "block",
                    width: w,
                    height: h,
                    left: min,
                    top: max
                })
            };
            that.canvas.onmouseup = function () {
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
                // 保存区域
                that.quyu = that.cobj.getImageData(min, max, w, h);
                //  清空 区域
                that.cobj.clearRect(min, max, w, h);
                //  保存画布中的内容 即 选中的内容 压进数组
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.cobj.putImageData(that.quyu, min, max);
                that.drag(min,max,w,h,area);
            }

        }
    },
    drag: function (x,y,w,h,area) {
        var that = this;
        that.canvas.onmousemove = function (e) {
            var ox = e.offsetX;   //  结束
            var oy = e.offsetY;
            if (ox > x && ox < x + w &&oy > y && oy < y + h) {
                that.canvas.style.cursor = "move";
            } else {
                that.canvas.style.cursor = "default";
            }
        }
        that.canvas.onmousedown = function (e) {

            var ox = e.offsetX;   //  结束
            var oy = e.offsetY;
            var cx = ox - x;
            var cy = oy - y;
            if (ox > x && ox < x + w || oy > y && oy < y + h) {
                that.canvas.style.cursor = "move";
            } else {
                that.canvas.style.cursor = "default";
                return;
            }
            that.canvas.onmousemove = function (e) {
                that.cobj.clearRect(0,0,that.width,that.height);
                if (that.history.length!=0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                var endx = e.offsetX;   //  结束
                var endy = e.offsetY;
                var lefts = endx - cx;
                var tops = endy - cy;
                if (lefts < 0) {
                    lefts = 0;
                }
                if (lefts > that.width - w) {
                    lefts = that.width - w;
                }
                if (tops < 0) {
                    tops = 0;
                }
                if (tops > that.height - h) {
                    tops = that.height - h;
                }
                area.css({
                    left:lefts,
                    top:tops
                });
                x = lefts;
                y = tops;
                that.cobj.putImageData(that.quyu, lefts, tops);
            };
            that.canvas.onmouseup = function () {
                that.canvas.onmouseup = null;
                that.canvas.onmousemove = null;
                that.drag(x, y, w, h, area);
            }
        }
    }
}