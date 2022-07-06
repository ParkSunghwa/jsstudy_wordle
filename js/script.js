$(document).ready(function(){

    // .wrap_answer start

    var correctAnswer = 'focus';


    $(".enter").click(function(){

        var myAnswer = $(".input");

        for(let i = 0; i < 5; i++){

            if(myAnswer[i].value == correctAnswer[i]){
                myAnswer[i].style.background = 'green';
            } else if(correctAnswer.includes(myAnswer[i].value)){
                myAnswer[i].style.background = 'yellow';
            } else{
                myAnswer[i].style.background = 'grey';
            }

        }
    });


    // .wrap_answer end


});