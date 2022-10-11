
// Code By Webdevtrick ( https://webdevtrick.com )
console.clear();

const textInputEl = document.querySelector("#latex_editor");
const suggestionEl = document.querySelector(".suggestion-container");

const ENTER_KEYCODE = 13;
const TAB_KEYCODE = 9;
const BACKSPACE_KEYCODE = 8;
const UP_ARROW_KEYCODE = 38;
const DOWN_ARROW_KEYCODE = 40;
const SPACE_KEYCODE = 32;


let suggestedWord = "";
let suggestedWordsArray = [];
let currentWordIndex = 0;
let insertText = false;


textInputEl.addEventListener("input", e => {
	if (e.data != " ") {
		insertText = true;
	}
	if (insertText == false) {
		textInputEl.value = "";
	}

	let inputValue = e.target.value.split('\\');
	inputValue = "\\" + inputValue[inputValue.length-1];
	
   if (inputValue.length < 2){
      suggestedWordsArray = filterArray(latexCodes, inputValue, true);
   }
   else{
      suggestedWordsArray = filterArray(latexCodes, inputValue);
   }
	suggestedWord = suggestedWordsArray[0];

	if (suggestedWord != undefined) {
		suggestionEl.innerHTML = textInputEl.value.slice(0, textInputEl.value.length - inputValue.length).replace(/\n/g, '<br>\n') + suggestedWord;
	}

	if (inputValue.length == 0 || suggestedWordsArray.length == 0) {
		suggestionEl.innerHTML = "";
	}

	if (textInputEl.value.length == 0) {
		insertText = false;
      suggestionEl.innerHTML = "";
	}
});

textInputEl.addEventListener("keydown", e => {
	if (e.keyCode == ENTER_KEYCODE) {
		if (textInputEl.value.length == 0) return;
		let inputValue = textInputEl.value;
		let words = inputValue.split(" ");
		for (let i in words) {
			if (words[i].length != 0) {
				wordsArray.push(words[i]);
				textInputEl.value = "";
				suggestionEl.innerHTML = "";
			}
		}
		wordsArray = removeDuplicatesFromArray(wordsArray);
	}

   if (textInputEl.value.length == 0) {
      suggestionEl.innerHTML = "";
   }

	if (textInputEl.value.length != 0) {
		if (e.keyCode == UP_ARROW_KEYCODE) {
			if (currentWordIndex == 0) return;
			currentWordIndex--;
			suggestionEl.innerHTML = suggestedWordsArray[currentWordIndex];
		}

		if (e.keyCode == DOWN_ARROW_KEYCODE) {
			if (currentWordIndex == suggestedWordsArray.length - 1) return;
			currentWordIndex++;
			suggestionEl.innerHTML = suggestedWordsArray[currentWordIndex];
		}

		if (e.keyCode == BACKSPACE_KEYCODE) {
			currentWordIndex = 0;
		}
	}

	if (suggestedWord != undefined && suggestedWord != "") {
		if (e.keyCode == TAB_KEYCODE) {
			e.preventDefault();
         	let inputValue = e.target.value.split('\\');
	      	inputValue = "\\" + inputValue[inputValue.length-1];

			textInputEl.value = textInputEl.value.slice(0, textInputEl.value.length - inputValue.length) + suggestedWordsArray[currentWordIndex];
			suggestionEl.innerHTML = "";
         	renderEquation(editor.value);
		}
	}
});


function filterArray(array, item, reverse = false) {

	
	if (reverse) {
		return array
			.filter(word => compareTwoStrings(word, item))
			.sort((a, b) => b.length - a.length);
	} else {
		return array
			.filter(word => compareTwoStrings(word, item))
         .sort((a, b) => a.length - b.length);
	}
}

function removeDuplicatesFromArray(array) {
	return [...new Set(array.map(i => i))];
}

function compareTwoStrings(string, subString) {
	let temp = string.split("", subString.length).join("");
	if (subString == temp) return subString;
}
