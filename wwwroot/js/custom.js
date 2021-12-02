
if($("body").hasClass('.sticky')) {
    var stickyOffset = $('.sticky').offset().top;
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= stickyOffset) sticky.addClass('navbar-fixed');
        else sticky.removeClass('navbar-fixed');
    });
}



var currentDate = new Date();
        
$("#copyrightYear").text(currentDate.getFullYear());


function isAuthen() {
    return ("@User.Identity.IsAuthenticated").toLowerCase() === "true";
}

function redirectXhrFail(xhr, redirectUrl) {
    if (xhr.status === 401) {
        window.location = redirectUrl;
    }
}

function toDateObj(date) {
    var dateArr = date.split("/");
    return (parseInt(dateArr[2])) + "/" + dateArr[1] + "/" + dateArr[0]; 
}

function getDay(date) {
    var dateArr = date.split("/");
    return dateArr[0]; 
}

function getMonth(date, local = "en-US") {
    var dateArr = date.split("/");


    var monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July","August",
        "September", "October", "November", "December"
    ];

    if(local.toLowerCase() == "th-th"){
        monthNames = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
            "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
            "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
    }
    
    var month = monthNames[parseInt(dateArr[1]) - 1];
    return month; 
}

function mbToKb(mb){

    return mb * 1024;
}

function getYear(date) {
    var dateArr = date.split("/");
    return dateArr[2]; 
}

function validate(selector) {
    $(".error-detail").remove()
    //alert("xx")
    var result = true;
    $(".warningMessage").html("");
    if (_.isNil(selector) || selector === "") {
        selector = "body";
    }
    $(selector).find(".input-require,.validate-container-number,.validate-decimal,.validate-number,.validate-typeBay,.validate-container").each(function () {
        var inputVal = $(this).val();
        var characterReg = /^([a-zA-Z]{4})+([0-9]{7})$/;
        var regdDecimal = /^-{0,1}\d*\.{0,1}\d+$/;
        var regNumber = /^[0-9]*$/;
        var regBay = /^[A-Z]{1}\d*\-[0-9]{2}$/;
        var notVal = false;


        if (typeof $.fn.multiselect !== 'undefined') {
            var multiVal = $(this).parents(".form-group:first").find('select[multiple]').val();

            if ($.isArray(multiVal)) {
                notVal = multiVal.length == 0
            } else {
                notVal = $(this).val() == "";
            }

        } else {
            notVal = $(this).val() == "";
        }

        if ($(this).hasClass('input-require') && !$(this).parent(".form-group").hasClass('hide') && notVal) {
            result = false;

            if (typeof $.fn.multiselect !== 'undefined') {
                if ($(this).parents(".form-group:first").find('.ms-options-wrap').hasClass('ms-options-wrap')) {
                    $(this).parents(".form-group:first").find('.ms-options-wrap').after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>')
                } else {
                    $(this).after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>');
                }
            } else if ($(this).hasClass('validate-input-file')) {
                $(this).parents(".file-input-new").after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>')
            } else if ($(this).hasClass('validate-input-group')) {
                $(this).parents(".input-group").after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>')
            } else if ($(this).hasClass('validate-input-editor')) {
                $(this).siblings( ".note-editor" ).after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>')
            } else if($(this).siblings("i").hasClass("fas")) {
                $(this).parent().after('<div class="col-12"><span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span></div>');
            } else {
                $(this).after('<span class="error-detail">Please input ' + $(this).attr("validate-name") + '</span>');
            }
        }
        else if ($(this).hasClass('validate-container-number') && !characterReg.test(inputVal)) {
            result = false;
            $(this).after('<span class="error-detail">Please Check Container Format </span>')
        }
        else if ($(this).hasClass('validate-decimal') && !regdDecimal.test(inputVal) && $(this).val() != "") {
            result = false;
            $(this).after('<span class="error-detail">Please Check  Decimal Format </span>')

        }
        else if ($(this).hasClass('validate-number') && !regNumber.test(inputVal) && $(this).val() != "") {
            result = false;
            $(this).after('<span class="error-detail">Please Check  Number Format</span>')

        }
        else if ($(this).hasClass('validate-typeBay') && !regBay.test(inputVal) && $(this).val() != "") {
            result = false;
            $(this).after('<span class="error-detail">Please Check  Location Format </span>')

        }
        else if ($(this).hasClass('validate-container') && !characterReg.test(inputVal) && $(this).val() != "") {
            result = false;
            $(this).after('<span class="error-detail">Please Check  Container Format</span>')

        }
        else {
            //alert("xx5")
        }
    })

    return result;
}

function getRecordId(index, pagination) {
    return parseInt((index + 1) + (pagination.pageSize * (pagination.pageNumber - 1)));
}
