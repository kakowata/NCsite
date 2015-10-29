function smartRollover() {
		if(document.getElementsByTagName) {
				var images = document.getElementsByTagName("img");
				for(var i=0; i < images.length; i++) {  
						if(images[i].getAttribute("src").match("-off."))
						{
								images[i].onmouseover = function() {
										this.setAttribute("src", this.getAttribute("src").replace("-off.", "-on."));
								}
								images[i].onmouseout = function() {
										this.setAttribute("src", this.getAttribute("src").replace("-on.", "-off."));
								}
						}
				}
		}
}
if(window.addEventListener) {
 		window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
		window.attachEvent("onload", smartRollover);
}