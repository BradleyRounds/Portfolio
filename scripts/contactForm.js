'use strict';

var patternText = /^([^0-9]*)$/,
  //EMAIL REGEX
	patternEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
  formStyle,
  active,
	input_1,
  input_2,
  input_3,
  input_4;


function testFormInputs(input, boolean) {
	var substring = input.substr(-1),
		input = input.substring(0, 5),
		InputSelectorValid = input + '-for' + substring + 'T',
		InputSelectorError = input + '-for' + substring + 'F';

	//console.log('Input: ',input);
	//console.log('Input #: ', substring);
	//console.log('New Input: ',input);
	//console.log('InputSelectorValid: ', InputSelectorValid);
	//console.log('InputSelectorError: ', InputSelectorError);
			
	if (boolean) {
		if ($('#' + InputSelectorError).prop('checked')) {$('#' + InputSelectorError).trigger("click"); }
		if (!($('#' + InputSelectorValid).prop('checked'))) {$('#' + InputSelectorValid).trigger("click"); }
	} else {
		if ($('#' + InputSelectorValid).prop('checked')) {$('#' + InputSelectorValid).trigger("click"); }
		if (!($('#' + InputSelectorError).prop('checked'))) {$('#' + InputSelectorError).trigger("click"); }

		$('#' + input).next().find('p').css('text-decoration', 'line-through');
	}
}
function resetFormStyle() {
	$('#formNextButton').removeAttr('style');
  $('#logoImg, nav').animate({top: '0'}, 'slow');
	$('form input').removeAttr('style');
	$('form .contact-button').removeAttr('style');
	$('form .contact-button-trigger').removeAttr('style');
	$('form .tip').removeAttr('style');
	$('form .error').removeAttr('style');
	$('form .label-text').removeAttr('style');
	$('form .validation-master').removeAttr('style');
	$('.nav-dot p').removeAttr('style');
}
function stopTab(e) {
	var evt = e || window.event;
	
	if (evt.keyCode === 9) {
		evt.preventDefault();
	}
}
function preventTab(input) {
	if ($('button#formNextButton').click()) {$(input).focus(); }
	$(input).keypress(function (event) {
		if (event.keyCode === 9) {
			$(input).focus();
		}
	});
}

function checkSize() {
  console.log('Media Querry', window.matchMedia("(max-width: 831px)").media, 'Active');
  
  //If Mobile Size
  if (window.matchMedia("(max-width: 831px)").matches) {
    console.log('Mobile Form Active');

    if (formStyle === 'Fancy') {
      //Move Form Up when keybord appears
      $('form input').css('top', '45%');
      $('form textarea').css('top', '50%');
      $('form .contact-button').css('top', '45%');
      $('form .contact-button-trigger').css('top', '45%');
      $('form .error').css('top', '58%');
    }
  }
}

$("#input-1, #input-2, #input-3, #input-4, input[type='submit']").focus(function () {
  if ($('.error p').text() !== '')
    $('.error').css('border', '1px solid red').show();
  active = document.activeElement;

  if (formStyle === 'Fancy') {
    $('.tip').hide();
    $('#logoImg, nav').animate({top: '-142px'}, 'slow');
    $('#formNextButton').css('opacity', '1');

    $('form .label-text').css('top', '30%');
    $('form .validation-master').css('right', '18.5%');
  }
});

//Moble 'Tab'
$('#formNextButton').click(function () {
  if (active.id !== 'input-4') {$(active).next().next().focus(); } else {$('#input-4').focus(); }
});

//---------------- INVALID Validation-Master Animation --------------------
$('#input-for1F').click(function () {
  if ($(this).prop("checked")) {
    $('.box1 .boxA').addClass('boxA_Error');
    $('.box1 .boxC').css('opacity', '0');
    $('.box1 .boxB').addClass('boxB_Error');
  } else {
    $('.box1 .boxA').removeClass('boxA_Error');
    $('.box1 .boxC').css('opacity', '1');
    $('.box1 .boxB').removeClass('boxB_Error');
  }
});
$('#input-for2F').click(function () {
  if ($(this).prop("checked")) {
    $('.box2 .boxA').addClass('boxA_Error');
    $('.box2 .boxC').css('opacity', '0');
    $('.box2 .boxB').addClass('boxB_Error');
  } else {
    $('.box2 .boxA').removeClass('boxA_Error');
    $('.box2 .boxC').css('opacity', '1');
    $('.box2 .boxB').removeClass('boxB_Error');
  }
});
$('#input-for3F').click(function () {
  if ($(this).prop("checked")) {
    $('.box3 .boxA').addClass('boxA_Error');
    $('.box3 .boxC').css('opacity', '0');
    $('.box3 .boxB').addClass('boxB_Error');
  } else {
    $('.box3 .boxA').removeClass('boxA_Error');
    $('.box3 .boxC').css('opacity', '1');
    $('.box3 .boxB').removeClass('boxB_Error');
  }
});
$('#input-for4F').click(function () {
  if ($(this).prop("checked")) {
    $('.box4 .boxA').addClass('boxA_Error');
    $('.box4 .boxC').css('opacity', '0');
    $('.box4 .boxB').addClass('boxB_Error');
  } else {
    $('.box4 .boxA').removeClass('boxA_Error');
    $('.box4 .boxC').css('opacity', '1');
    $('.box4 .boxB').removeClass('boxB_Error');
  }
});
//---------------- VALID Validation-Master Animation --------------------
$('#input-for1T').click(function () {
  if ($(this).prop("checked")) {
    $('.box1 .boxA').addClass('boxA_Valid');
    $('.box1 .boxC').addClass('boxC_Valid');
    $('.box1 .boxB').addClass('boxB_Valid');
  } else {
    $('.box1 .boxA').removeClass('boxA_Valid');
    $('.box1 .boxC').removeClass('boxC_Valid');
    $('.box1 .boxB').removeClass('boxB_Valid');
  }
});
$('#input-for2T').click(function () {
  if ($(this).prop("checked")) {
    $('.box2 .boxA').addClass('boxA_Valid');
    $('.box2 .boxC').addClass('boxC_Valid');
    $('.box2 .boxB').addClass('boxB_Valid');
  } else {
    $('.box2 .boxA').removeClass('boxA_Valid');
    $('.box2 .boxC').removeClass('boxC_Valid');
    $('.box2 .boxB').removeClass('boxB_Valid');
  }
});
$('#input-for3T').click(function () {
  if ($(this).prop("checked")) {
    $('.box3 .boxA').addClass('boxA_Valid');
    $('.box3 .boxC').addClass('boxC_Valid');
    $('.box3 .boxB').addClass('boxB_Valid');
  } else {
    $('.box3 .boxA').removeClass('boxA_Valid');
    $('.box3 .boxC').removeClass('boxC_Valid');
    $('.box3 .boxB').removeClass('boxB_Valid');
  }
});
$('#input-for4T').click(function () {
  if ($(this).prop("checked")) {
    $('.box4 .boxA').addClass('boxA_Valid');
    $('.box4 .boxC').addClass('boxC_Valid');
    $('.box4 .boxB').addClass('boxB_Valid');
  } else {
    $('.box4 .boxA').removeClass('boxA_Valid');
    $('.box4 .boxC').removeClass('boxC_Valid');
    $('.box4 .boxB').removeClass('boxB_Valid');
  }
});

//TIP ERROR MESSAGE 
function clearErrorTip(msg) {
  var sel = $('form div.error');
  sel.find("p:contains('" + msg + "')")
     .next()
     .remove();
  sel.find("p:contains('" + msg + "')")
     .remove();

  if (sel.children().length === 0) {sel.removeAttr('style').hide(); }
}
function setErrorTip(msg) {
  $('form div.error').css('border', '1px solid red')
                     .show()
                     .append("<p class='nomargin'>" + msg + '</p><br>');
}

//Validation - Tip
$("input[id^='input-for']").click(function (e) {
  var target = e.currentTarget,
    error1 = "Name field must be only letters.",
    error2 = "Emails must contain an @ sign and a domain.",
    error3 = "Subject field must be only letters.",
    error4 = "Message must be longer than 10 characters.";

  clearErrorTip(error1);
  clearErrorTip(error2);
  clearErrorTip(error3);
  clearErrorTip(error4);

  if (target.id === 'input-for1F' && target.checked) {setErrorTip(error1); }
  if (target.id === 'input-for2F' && target.checked) {setErrorTip(error2); }
  if (target.id === 'input-for3F' && target.checked) {setErrorTip(error3); }
  if (target.id === 'input-for4F' && target.checked) {setErrorTip(error4); }

  target.attr('checked', false);
});

//ON NEXT FOCUS TEST INPUT
$("input[type='checkbox'], textarea").focus(function () {
  if ($('#input-1').val().length > 0) {
    input_1  = patternText.test($('#input-1').val());
  } else {input_1 = false; }

  testFormInputs('input-1', input_1);
  if (window.matchMedia("(max-width:501px)").matches !== true) {
    $('#input-1').next()
                 .find('p')
                 .text($('#input-1').val())
                 .css('transform', 'translateX(-150px)');
  }
  if ($('#input-2').val().length > 0) {
    input_2  = patternEmail.test($('#input-2').val());
  } else {input_2 = false; }

  testFormInputs('input-2', input_2);
  if (window.matchMedia("(max-width:501px)").matches !== true) {
    $('#input-2').next().find('p')
                        .text($('#input-2').val())
                        .css('transform', 'translateX(-150px)');
  }
  if ($('#input-3').val().length > 0) {
    input_3  = patternText.test($('#input-3').val());
  } else {input_3 = false; }

  testFormInputs('input-3', input_3);
  if (window.matchMedia("(max-width:501px)").matches !== true) {
    $('#input-3').next().find('p')
                        .text($('#input-3').val())
                        .css('transform', 'translateX(-150px)');
  }
});
$('#input-4').focus(function () {
  $('#formNextButton').hide();
});

//VALIDATION TESTS
$('#input-4').keypress(function (e) {
  if (e.keyCode === 32 || e.keyCode === 0) {
    if ($('#input-4').val().length > 10) {
      input_4 = ($('#input-4').val().length > 10);
      testFormInputs('input-4', input_4);

      if ((input_1) && (input_2) && (input_3) && (input_4)) {
        $('#input-4').next()
                     .find('p')
                     .css('transform', 'translateX(-150px)');
        $('.tip').html("All Fields Valid");
        $("input[type='submit']").fadeIn();
      } else {
        $('.tip').css('opacity', '1')
                 .text("Please fix the errors to submit");
        $('form .error').show();
      }
    }
  }
});

$("input[type='submit']").click(function (e) {
  e.preventDefault();
  $('form').validate();

  console.log('Validates? :', $('form').valid());
  if ($('form').valid()) {
    $('form').hide();
    $('#SubmitingDelay').fadeIn('fast');
    setTimeout(function () {$('form').submit(); }, 5000);
  }
});


$(document).mouseup(function (e) {
  var target = $('body');
  if (target.is(e.target)) {resetFormStyle(); }
});

$(document).ready(function () {
  formStyle = $("input[name='form-style']:checked").attr('value');
  console.log('Form:', formStyle);
  
	//Reset the Form Control Checkboxes on page load
	var i, controlBoxes = $("body input[type='checkbox']");
	for (i = 0; i < controlBoxes.length - 1; i++) {
    controlBoxes.prop('checked', false);
	}
  
	checkSize();
	$(window).resize(checkSize);
});