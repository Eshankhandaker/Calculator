
var resultField = $("#result");

function insertNumber (number) {
	var existingNumber = resultField.val();

	resultField.val(existingNumber + number)
}


function clearResult () {
	// body... 
	resultField.val('')
}


function calculate() {
	
var  result = eval(resultField.val())

resultField.val(result)

}

function deleteNumber () {
var presentValue =	resultField.val();
	if (presentValue!='') {
		resultField.val(presentValue.slice(0, -1));
	}
}



function percent () {
	var anyNumber = resultField.val();
	per = anyNumber * 1/100;
	resultField.val(per)

}