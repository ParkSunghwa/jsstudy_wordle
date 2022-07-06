$(document).ready(function(){

    // .wrap_answer start

    var correctAnswer = 'focus';

    // document.querySelector(".enter").addEventListener("click", function(){

    //     var myAnswer = document.querySelectorAll(".input");

    //     if(myAnswer[0].value == correctAnswer[0]){
    //         myAnswer[0].style.background = 'green';
    //     }


    // });
    $(".enter").click(function(){

        var myAnswer = $(".input");

        for(let i = 0; i < 5; i++){

            if(myAnswer[i].value == correctAnswer[i]){
                myAnswer[i].style.background = 'green';
            } else if(correctAnswer.includes(myAnswer[i])){
                myAnswer[i].style.background = 'yellow';
            } else{
                myAnswer[i].style.background = 'grey';
            }

        }
    });


    // .wrap_answer end


});