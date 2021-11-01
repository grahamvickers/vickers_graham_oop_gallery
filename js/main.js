(()=>{
    "use strict"

    console.log("We  are smokin'!");

	// below is the landing gallery script:

    (function landingGallery() {
		let count = 0;
		let img = ["brisket","chicken_platter","sausage"];

		const back = document.querySelector("#back");
		const frwd = document.querySelector("#frwd");
		let foodImg = document.querySelector("#imgGallery");

		    function frwdImg()	{
			count++;
				if (count == img.length) {
					count = 0;
				}		
				TweenMax.to(foodImg, 1, {autoAlpha:0, onComplete:done}); 
			}
		
			function backImg() {
				count--;
				if (count < 0) {
					count = img.length - 1;
				}	
				TweenMax.to(foodImg, 1, {autoAlpha:0, onComplete:done});
			}
		
			function done() {	
					let gallSrcset = 
					`images/${img[count]}.jpg`;
					let gallsSrc = `images/${img[count]}.jpg`;
					foodImg.src = gallsSrc;
					foodImg.srcset = gallSrcset;
					TweenMax.to(foodImg, 1, {autoAlpha:1}); 		
			}

		back.addEventListener("click", frwdImg, false); 
		frwd.addEventListener("click", backImg, false);

	})()

	// Below is the Photo Gallery (portfolio area):

    var portfolio = document.querySelector("#portfolioCon");

	class Content {
		constructor(img, title, recipe, bio){
			this.img = img;
			this.title = title; 
			this.recipe = recipe;
			this.bio = bio;
		}
		portfolioPiece() {
			return (`
					<img src="./images/${this.img}" />
					<h3>${this.title}</h3>
					<h4>${this.recipe}</h4>
					<p>${this.bio}</p>
			`);
		}
	}

	class Item extends Content {
		constructor() {
			super("steak.jpg", "It's getting hot in here!", "Charcoal grilled rib-eye steak", "This is the best steak ever")
		}
		populate() {
			console.log("populate");
		}
	}



	let steak = new Item();

	steak.populate();
	steak.portfolioPiece();

	portfolio.innerHTML = steak.portfolioPiece();




	// v2 of loading in portfolio data:

	// let items = [
	// 	{img: 'steak.jpg', title: "It's getting hot in here!", recipe: "Charcoal grilled rib-eye steak", bio: "This is the best steak ever"},
	// 	{img: '', title: "", recipe: "", bio: ""},
	// 	{img: '', title: "", recipe: "", bio: ""}
	// ]

	// console.log(items);

})();