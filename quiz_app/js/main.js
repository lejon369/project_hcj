const myBtn = document.querySelector(".myBtn button");
const ruleBox = document.querySelector(".ruleBox");
const exitbuttons = document.querySelector(".buttons .exitBtn");
const ContinueBtn = document.querySelector(".buttons .continuebtn");
const option_list = document.querySelector(".myOptions");
const timeCount = document.querySelector(".timeCount .seconds");
const timeline = document.querySelector(".questions .time_line");
const Questions = document.querySelector(".questions");

myBtn.onclick = () => {
    ruleBox.classList.add("activeInfo");
};
exitbuttons.onclick = () => {
    ruleBox.classList.remove("activeInfo");
};
ContinueBtn.onclick = () => {
    ruleBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuizs");
    showQuestions(0);
    startTimer(timeValue);
    startTimerLine(0)
};

const nextBtn = document.querySelector(".nextBtn");
const result_Box = document.querySelector(".result_Box");
const restart_quiz = document.querySelector(".butoon .reset1");
const quit_quiz = document.querySelector(".butoon .quit");

let que_count = 0;
let counter;
let timeValue = 15;
let counterLine;
let widthValue = 0;
let userScore = 0;

nextBtn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++
        showQuestions(que_count);
        clearInterval(counter);
        startTimer(timeValue);
        nextBtn.style.display = "none";
        clearInterval(counterLine);
        startTimerLine(widthValue);
    } else {
        sHowResultBox();
        console.log("You have Completd Your Task 👌 ");
    }
};
function showQuestions(index) {

    const que_text = document.querySelector('.text'),
        option_list = document.querySelector(".myOptions"),
        option_tag = '<div class="options">' + questions[index].option[0] + '</div>'
            + '<div class="options">' + questions[index].option[1] + '</div>'
            + '<div class="options">' + questions[index].option[2] + '</div>'
            + '<div class="options">' + questions[index].option[3] + '</div>';

    let que_tag = "<span>" + questions[index].numb + '.' + questions[index].qustion + "</span>";

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const total_que = document.querySelector(".total_que");
    let total_quetag = '<p>' + questions[index].numb + ' of 5</p>';
    total_que.innerHTML = total_quetag;

    const opTion = option_list.querySelectorAll(".options");
    for (let i = 0; i < opTion.length; i++) {
        opTion[i].setAttribute("onclick", "optionSelected(this)");

    }

}
let tickIcon = '<div class="tick icon"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="tick icon"><i class="fa-regular fa-circle-xmark"></i></div>';
function optionSelected(ans) {
    clearInterval(counterLine);
    clearInterval(counter);
    let userAns = ans.textContent;
    let correctAns = questions[que_count].ans;
    let allPoints = option_list.children.length;

    if (userAns == correctAns) {
        userScore +=1;
        console.log(userScore);
        ans.classList.add("correct");
        ans.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        ans.classList.add("incorrect");
        ans.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allPoints; i++) {
             if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "options correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
             }
        }
    }

    for (let i = 0; i < allPoints; i++) {
        option_list.children[i].classList.add("disabled");
        nextBtn.style.display = "block";
    }
}


function sHowResultBox() {
    ruleBox.classList.remove("activeInfo");
    Questions.classList.remove("activeInfo");
    result_Box.classList.add("ActiveResult");
}




function startTimer(time) {
    counter = setInterval(timer, 1000 );
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

function startTimerLine(timeCou) {
    counterLine = setInterval(timers, 50);
    function timers() {
        timeCou += 1;
        timeline.style.width = timeCou + "px";
        if (timeCou > 319) {
            clearInterval(counterLine);
        }
    }
}



