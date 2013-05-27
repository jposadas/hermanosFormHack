var url = "https://docs.google.com/a/stanford.edu/forms/d/1Jn6odwjBrKJCEIdqnZxUyDDMDRYtjm5_2UThxfDSFmw/viewform";

var win = window.open(url);
var inputClass = "ss-q-short";

var inputArray = win.document.getElementsByClassName(inputClass);

var length = inputArray.length;
var inputString = "FUCKKKK KIKKKEEEE!!!"

for(var i = 0; i < length; i++) { 
	inputArray[i].value = inputString;
}