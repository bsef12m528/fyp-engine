
    function reserRadioChecks() {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
    }


//defining class for quiz questions
function Person(question, attemptedAnswer, category, subCategory) {

    // Add object properties like this
    this.question = question;
    this.attemptedAnswer = attemptedAnswer;
    this.category = category;
    this.subCategory = subCategory;
}


function populateArray()
{
    var p = new Person();
    p.question = "In real life do you often find yourself as imaginative thinker?";
    p.attemptedAnswer = "";
    p.category = "R";
    p.subCategory = "Doctor";

    arr.push(p);

    var p2 = new Person();
    p2.question = "Do you welcome work that deals more with potential opportunities?";
    p2.attemptedAnswer = "";
    p2.category = "I";
    p2.subCategory = "Computer Scientist";

    arr.push(p2);


    var p3 = new Person();
    p3.question = "During deliberations are you more content with room for discussion?";
    p3.attemptedAnswer = "";
    p3.category = "A";
    p3.subCategory = "Artist";

    arr.push(p3);

    var p4 = new Person();
    p4.question = "During conversations with associates do you have more of a tendency to Speak and then reflect?";
    p4.attemptedAnswer = "";
    p4.category = "S";
    p4.subCategory = "Engineer";

    arr.push(p4);

    var p5 = new Person();
    p5.question = "When faced with a challenge at work, do you rely on instinct to get you through it?";
    p5.attemptedAnswer = "";
    p5.category = "E";
    p5.subCategory = "Manager";

    arr.push(p5);
}


function previous_click()
{
        
}

function next_click()
{
    var answer = $('input[name=option]:checked').val();
    if ($("input[name='option']").is(':checked')) {
        arr[current].attemptedAnswer = answer;
        current++;

        $("#errorDiv").hide();
        $("#quiz-container").hide();
        reserRadioChecks();
        update_question();
        update_progressBar();
        $("#quiz-container").fadeIn(1000);
    }
    else
    {
        $("#errorDiv").fadeIn(500);
        return;
    }
}

function update_progressBar()
{
    var x = document.getElementById("completeness");
    x.innerHTML = (current + 1) + "/" + (arr.length + 1) ;

    var y = (current) / arr.length * 100;

    $('#progress-bar').css('width', y + '%').attr('aria-valuenow', y);
    if(current==arr.length-1)
    {
        $("#finish-button").show();
        $("#next-button").hide();
    }

}

function update_question()
{
    $("#question").html(arr[current].question);
}



// ---- Implementation after finishing result  ----//
function generate_results()
{
        
}


populateArray();
update_progressBar();