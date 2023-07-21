
let strongElements = document.getElementsByTagName("strong");

function highlight() {
    //Write your code here
    // console.log("checking");

	for(let i = 0; i < strongElements.length; i++){
		strongElements[i].style.color = "green";
	}

}


function return_normal() {
    //Write your code here


	for(let i = 0; i < strongElements.length; i++){
		strongElements[i].style.color = "black";
	}
    
}
