$(document).ready(function () {
    $('nav').on('click', '#topNavExpander', function (e) {
        $(this).toggleClass('is-active');
        $('#topNav').toggleClass('is-active');
    });

    /* Number To Word */
    $('#Price1,#Price2').on('keyup', function (e) {
        log(e.currentTarget.value);
        var texted_number = NumberToWord(e.currentTarget.value.split(',').join(''));
        log('texted_number:'+texted_number);
        $(e.currentTarget).parent().find('span').text(texted_number);
    })


    function NumberToWord(num) {
        return wordifyRialsInTomans(num * 10);
    }
    var percentage_elements = $('.prefixed-mask');
    var impercentage = new Inputmask({
        'alias': 'numeric',
        'prefix':'%',
        rightAlign: false

    });
    for (var i = 0; i < percentage_elements.length; i++) {
        impercentage.mask(percentage_elements[i]);
    }

    var decimal_elements = $('.currency-decimal');
    var im = new Inputmask({
        'alias': 'numeric',
        'groupSeparator': ',',
        rightAlign: false
    });
    for (var i = 0; i < decimal_elements.length; i++) {
        im.mask(decimal_elements[i]);
    }

    $('#vam').on('change',function(e){
        VamSelection(e.currentTarget.checked);
    });


    $('#AdvTypeContainer').on('change', function (e) {

    })

    function FuncEndBoxes(data){
        if(data.length>0){
            
        }
    }

    function VamSelection(data){
        if(data){
            $('#vambox').css('display','block');
        }
        else{
            $('#vambox').css('display','none');
        }
    }


    function CheckAdvTypeSelected() {
        var lstAdvType = $('#AdvTypeContainer input[type="radio"]');
        var checkedCount = 0;
        $.each(lstAdvType, function (index, item) {
            if (item.checked) {
                checkedCount++;
            }
        });
        if (checkedCount == 1) {
            return true;
        } else {
            return false;
        }
    }

    
    /* Accouding */
    // Listen for click on the document
document.addEventListener('click', function (event) {
  
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('accordion-toggle')) return;
    
    // Get the target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    
    // Prevent default link behavior
    event.preventDefault();
    
    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    content.classList.toggle('active');
  })

      /* End According */


    function log(e) {
        console.log(e);
    }
});
$('#add-home-step-0').on('change','input[type=radio][name="advtype"]',function(e){
    console.log(this.value);
    var messages = {    
        'simple'    :  'ثبت در تلگرام',
        'bronze'    :   'هزینه ثبت آگهی : ۱۰،۰۰۰ تومان<br/>۷ روز در صدر جستجوهای منطقه<br/>ثبت در کانال تلگرام و اینستاگرام',
        'gold'      :   'هزینه ثبت آگهی : ۲۰،۰۰۰ تومان<br/>۱۴ روز در صدر جستجوهای استان<br/>ثبت در کانال تلگرام و اینستاگرام'
    };
    $('#Message').html(messages[this.value]);
    
});