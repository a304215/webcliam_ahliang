
function checkSubmitForm(thisone){
	var startYear = 2017;
	var startMonth = 12;
	var dateObj = new Date();
	var thisYear = dateObj.getFullYear();
	var thisMonth = dateObj.getMonth()+1;
	var inputY = $("#uiY").val();
	var inputM = $("#uiM").val();
	var inputFileCode = $("#uiFileCode").val();
	$("#inputY").val(inputY);	
	$("#inputFileCode").val(inputFileCode);
	if(inputY == startYear){
		if (inputM < startMonth){
			inputM = startMonth;			
		}
	}else if(inputY == thisYear){
		if (inputM > thisMonth){
			inputM = thisMonth;			
		}
	}
	$("#inputM").val(inputM);
	thisone.form.submit();
}