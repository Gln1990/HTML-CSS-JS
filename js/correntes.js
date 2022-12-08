var scrollPosition = "";
var body = document.querySelector("body");
function autoLightBox(objeto){

	var lightboxes = document.querySelectorAll(objeto);


	lightboxes.forEach(function(item, index){

		let containerID = 'lightbox' + (index+1);
		item.setAttribute("id", containerID);

		let template = "";

		let newHTML = "";

		let imgs = item.querySelectorAll("img");


		for (i=0; i< imgs.length; i++){

			let imgID = 'lightbox' + (index+1) + '_img'+(i+1);
			let imgURL = imgs[i].getAttribute("src");
			let imgAltOriginal= imgs[i].getAttribute("alt");
			let imgTitle = "";
			let imgDescription = "";
			let imgPrev = "";
			let imgNext = "";
			
			
			if(imgAltOriginal){
				imgTitle = imgAltOriginal.split(": ")[0];
				imgDescription = imgAltOriginal.split(": ")[1];
			}
			if(i > 0 || i < (imgs.length - 1))
			{
				imgPrev = 'lightbox' + (index + 1) + '_img' + i;
				imgNext = 'lightbox' + (index + 1) + '_img' + (i + 2);
				//console.log("i:" + i + " | "  + "imgPrev:" + imgPrev + " | " + "imgNext: " + imgNext);
			}
			if(i == 0)
			{
				imgPrev = 'lightbox' + (index + 1) + '_img' + (i + imgs.length);
				//console.log("i:" + i + " | " + "imgPrev:" + imgPrev);
			}
			if(i == (imgs.length - 1))
			{
				imgNext = 'lightbox' + (index + 1) + "_img" + (i - imgs.length + 2);
				//console.log("i:" + i + " | " + "imgNext: " + imgNext);
			}

			
			template = '<li class="item"><a href="#' + imgID + '" class="thumbnail" style="background-image: url(' +  imgURL +  ')"><span class="easing">' + imgTitle + '</span></a><div class="large" id="' + imgID + '"><a href="#' + 'lightbox' + (index + 1) + '" class="overlay"></a><div class="img-area easing"><div class="img-box"><img src="' + imgURL + '" alt="' + imgAltOriginal + '"><a href="#' + imgPrev + '" class="arrow left"></a><a href="#' + imgNext + '" class="arrow right"></a></div><h3>' + imgTitle + '</h3><p>' + imgDescription + '</p></div></div></li>'

			newHTML += template;
			lightboxes[index].innerHTML = '<ul class="list">' + newHTML + '</ul>';

		};


		var links = document.querySelectorAll(".thumbnail");

		links.forEach(function(link, count){

			link.addEventListener("click", function(event){
				scrollPosition = window.pageYOffset;
			});
		});
	});
};

autoLightBox(".auto-lightbox");


window.onhashchange = function(){
	let urlImagem = location.hash;
	if (urlImagem.indexOf("_") != -1){
		body.style.overflow = "hidden";
	}else{
		body.style.overflow = "visible";
	}
	window.scrollTo(0, scrollPosition);
};