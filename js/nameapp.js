$(function () {
    var pnl, pnlc = 0;
    
   
    function pnlL() {       
        pnl = $('.panel').length;
        $('.pnlLength').text('( ' + pnl + ' )');

        var rmvChkL = $('#removechk').length;
        if (rmvChkL > 1) { $('#remove').show(); }
    }
    pnlL();
    
    

    $('#countrie').find('option').each(function () {
        var flagval = $(this).val();
        $(this).append('<span class="flag ' + flagval + '"></span>');
    });

    //Handles menu drop down
    $('.print-settings').click(function (e) {
        e.stopPropagation();
    });

    //convert
    $("select[name='countries']").msDropdown();

    $('#add').click(function () {
        $('.panel:last').clone().insertAfter(".panel:last");
        pnlL();        
    });

    $('#copy').click(function () {
        var copychkd = $('#copychk:checked').val();
        if (copychkd == 'copy') {
             $('#copychk:checked').parent().parent().parent().parent().parent().clone().insertAfter(".panel:last");
        }
        pnlL();      
    });
    $('#remove').click(function () {
        var remvchkd = $('#removechk:checked').val();
        if (remvchkd == 'remove') {
            $('#removechk:checked').parent().parent().parent().parent().parent().parent().hide();
        }
        pnlL();      
    });
   
});