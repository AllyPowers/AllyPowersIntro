window.onload = function(){
	// newsRemind();
	// searchTrack();
	runShowPageContent();
	setTimeout(function() {
		showPageAway();
	},3500);
	setTimeout(function() {
		newsRemind();
	},4000);
}



// searchTrack  it also delete event listener
function searchTrack() {
	var searchControls = document.getElementById("search_input");
	searchControls.addEventListener("click",function (event) {
		var tagName = event.target.tagName;
		if (tagName == "INPUT") {
			startSearch(true);
		}
		if (tagName == "IMG") {
			// event.nextElementSibling.target.setAttribute("value","");
			event.target.previousElementSibling.value = "";
			console.log(timec);
			clearTimeout(timec);
		}
	})
}

function startSearch(falg) {
	// body...
	var progressBar = document.getElementById("progress_bar");


	timec = setTimeout(function() {
		// body...
		
		if(progressBar.style.top == "-36%"){
			progressBar.style.top = "100%";
			timec = setTimeout(arguments.callee, 1000);
		}else{
			progressBar.style.top = "-36%";
			timec = setTimeout(arguments.callee, 1000);
		}
	},1000);
}

function newsRemind(newText,newsLever) {
	var newsWrapper = document.getElementById("newsShow");
	newsWrapper.style.right = "0";


	var newsbtns = newsWrapper.lastElementChild;

	newsbtns.addEventListener("click",function(event) {
		var className = event.target.className;
		var showsP = newsWrapper.firstElementChild;
		if(className == "section_1"){
			showsP.innerHTML = "小主英明!";
			setTimeout(function() {
				newsWrapper.style.right = "-20%";
			},1000);
		}
		if (className == "section_2") {
			newsWrapper.firstElementChild.innerHTML =  "你眼睛是什么时候瞎的啊？"
			setTimeout(function() {
				newsWrapper.style.right = "-20%";
			},1000);
		}

	})

	
}

function runShowPageContent() {
	var spWrap = document.getElementById("began_show_page");
	var content = spWrap.firstElementChild.lastElementChild;
	content.style.top = "0";
	content.style.opacity = "1";
}

function showPageAway() {
	var spWrap = document.getElementById("began_show_page");
	// spWrap.style.transform-origin = "0 89%";
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "../css/pageShow.css";
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}

