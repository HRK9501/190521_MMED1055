(() => {
	//stuv
	console.log('fired!');

	//select elements with JaveScript
	
	//setting up a variable using the let heyword,
	//and using a CSS selector to tind the element we want to use.
	
	//let stores the reference to element as avriable (in memory)
	let svgGraphic = document.querySelector("#badgeSVG"),
		mainHeadline = document.querySelector(".main-headline"),
		subHead = document.querySelector("#raster-vector h3"),
		swapTextButton = document.querySelector(".switch-type");


	// functions are reusable pieces of code - put these between the veriable and event handeling
	// that you can run any time
	function logMyId() {
	 console.log(this.id);

 	 this.style.opacity = 0.5;
    }

    function swapText() {
	   mainHeadline.textContent = "Now you're something else!";
	   mainHeadline.classList.toggle("selected");

	   subHead.textContent = "This one is also NEW";
	   mainHeadline.classList.toggle("selected");
    }




    // events alwats go down here
	svgGraphic.addEventListener("click", logMyId);
	swapTextButton.addEventListener("click",swapText);
})();
