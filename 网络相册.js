function handleEvent(evt) {
			var event = event? event : evt;
			var target = event.target? event.target: event.srcElement;
			for (var i = 0; i < images.length; i++) {
				if (images[i] == target) break;
			}
			setTimeout(function() {go(i);}, 200);
		}
		function go(i) {
			document.getElementById("showpic").src = images[i].src;
			document.getElementById("show").style.display = "";
			var next = (i+1) % images.length;
			var prev = (i-1+images.length) % images.length;
			document.getElementById("prev").onclick = function() {
				setTimeout(go(prev), 200);
			};
			document.getElementById("next").onclick = function() {
				setTimeout(go(next), 200);
			};
		}
		function hide() {
			document.getElementById("show").style.display = "none";
		}
		var images = [];
		function init() {
			var imgArr = document.getElementsByTagName("img");
			for (var i = 0; i < imgArr.length; i++) {
				if (imgArr[i].className == "img") {
					images.push(imgArr[i]);
					addEventListener(imgArr[i], "mouseover", handleEvent);
				}
			}
		}
		function addEventListener(ele, type, func) {
			if (ele.addEventListener) {
				ele.addEventListener(type, func, false);
			} else {
				ele.attachEvent("on"+type, func);
			}
		}