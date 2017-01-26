console.log('js connect');

var input = $('#NAME'); // ref both INPUT & msg DIV into variables
var msg = $('#name-error');

console.log(msg);


// change event when i change the input's value

input.change( function() { 
	// if my input's value's len is < 4 char
	// I will remove hidden class (show)
	// else i will add hidden class (hide)
	
	var length = input.val().length;  // get input's value

	if (length < 4) msg.removeClass('hidden');
	else msg.addClass('hidden');
});

/*
$('#username-id').change( function() {
	console.log('test change pass');

});

*/

$('#cb-id').change(function(){
  // console.clear();
  
  // get whether checked is true / false
  var cb = $('#cb-id').prop('checked');
  
  // console.log('cb is ' + cb);
  
  if (cb) $('#submit-id').prop('disabled', false);
  else $('#submit-id').prop('disabled', true);
});



var cb = $('#cb-id');
var submit = $('#submit-id');

cb.change(function() {
	if (cb.prop('checked') ) submit.prop('disabled', false);
	else submit.prop('disabled', true);
});






