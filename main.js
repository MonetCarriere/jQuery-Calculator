$(document).ready(function(){
    $(document).on('click','#operators > button',function(){
        let val1 = $('#value1').val();
        let val2 = $('#value2').val();
        if(val1.length === 0 || val2.length === 0){
            alert("You didn't put nothing in, fool.");
            return false;
        }
        let answer = 0;
        let operator = $(this).val();
        switch(operator){
            case 'add':
                answer = parseFloat(val1) + parseFloat(val2);
                break;
            case 'sub':
                answer = val1 - val2;
                break;
            case 'mul':
                answer = val1 * val2;
                break;
            case 'div':
                answer = val1 / val2;
                break;
        }
        $('#answer').val(answer);
    });
});


