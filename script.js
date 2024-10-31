let box1 = document.getElementById('box_1');
let box2 = document.getElementById('box_2');
let box3 = document.getElementById('box_3');
let box4 = document.getElementById('box_4');
let box5 = document.getElementById('box_5');
let box6 = document.getElementById('box_6');
let box7 = document.getElementById('box_7');
let box8 = document.getElementById('box_8');
let box9 = document.getElementById('box_9');

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let submit_btn = document.getElementById('submit_button');
let participation_div = document.getElementById('participation_div');
let blur_bg = document.getElementById('blur_bg');
let turn = document.getElementById('turn');
let turn_result_text = document.getElementById('turn_result_text');
let reset_btn = document.getElementById('reset_btn');

var player1_name;
var player2_name;

console.log(player1.value);
submit_btn.addEventListener('click',()=>{
    player1_name = player1.value;
    player2_name = player2.value;
    if(player1_name == " " || player2_name == " "){
        alert("Please enter participant's name");
    }else{
        blur_bg.style.top = '-100%';
    }
})

let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let game_over = 0;

let active_participant = 1;

function switch_turn(active_participant) {
    if(active_participant == 1){
        return -1;
    }else if(active_participant == -1){
        return 1;
    }
}

function update_box(box){
    if(active_participant == 1){
        box.innerText = 'X';
    }
    else if(active_participant == -1){
        box.innerText = 'O';
    }
}

function update_turn(){
    if(active_participant == 1){
        turn.innerText = `${player1_name}'s`;
        turn_result_text.innerHTML = '&nbspturn';
    }else if(active_participant == -1){
        turn.innerText = `${player2_name}'s`;
        turn_result_text.innerHTML = '&nbspturn';
    }
}

function getWinner(arr) {
    function xWon(arr) {
        let flag = 0;
        if((arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) ||
            (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) ||
            (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) ||
            (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) ||
            (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) ||
            (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) ||
            (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) ||
            (arr[2][0] == 1 && arr[1][1] == 1 && arr[0][2] == 1))
        {
            flag = 1;
        }
        return flag;
    }
    
    function yWon(arr) {
        let flag = 0;
        if( (arr[0][0] == -1 && arr[0][1] == -1 && arr[0][2] == -1) ||
            (arr[1][0] == -1 && arr[1][1] == -1 && arr[1][2] == -1) ||
            (arr[2][0] == -1 && arr[2][1] == -1 && arr[2][2] == -1) ||
            (arr[0][0] == -1 && arr[1][0] == -1 && arr[2][0] == -1) ||
            (arr[0][1] == -1 && arr[1][1] == -1 && arr[2][1] == -1) ||
            (arr[0][2] == -1 && arr[1][2] == -1 && arr[2][2] == -1) ||
            (arr[0][0] == -1 && arr[1][1] == -1 && arr[2][2] == -1) ||
            (arr[2][0] == -1 && arr[1][1] == -1 && arr[0][2] == -1))
        {
            flag = 1;
        }
        return flag;
    }
    
    // check who won
    if(xWon(arr) == 1){
        return 1;
    }else if(yWon(arr) == 1){
        return -1;
    }else{
        return 0;
    }
}

function check_winner(arr){
    let winner = getWinner(arr);
    if(winner == 0){
        game_over = 0;
        return 0;
    }else if(winner == 1){
        game_over = 1;
        turn.innerText = `${player1_name}`;
        turn_result_text.innerHTML = '&nbspwon';
        return 1;
    }else if(winner == -1){
        game_over = 1;
        turn.innerText = `${player1_name}`;
        turn_result_text.innerHTML = '&nbspwon';
        return 1;
    }
}

// function box_click(){
//     active_participant = switch_turn(active_participant);
//     console.log(active_participant);
// }
box1.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[0][0] == 0) {
            arr[0][0] = active_participant;
            update_box(box1);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked");
        }
    }else{
        alert("Game over and winner declared");
    }
});
box2.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[0][1] == 0) {
            arr[0][1] = active_participant;
            update_box(box2);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box3.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[0][2] == 0) {
            arr[0][2] = active_participant;
            update_box(box3);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box4.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[1][0] == 0) {
            arr[1][0] = active_participant;
            update_box(box4);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box5.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[1][1] == 0) {
            arr[1][1] = active_participant;
            update_box(box5);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box6.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[1][2] == 0) {
            arr[1][2] = active_participant;
            update_box(box6);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box7.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[2][0] == 0) {
            arr[2][0] = active_participant;
            update_box(box7);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box8.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[2][1] == 0) {
            arr[2][1] = active_participant;
            update_box(box8);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});
box9.addEventListener("click",()=>{
    if(game_over == 0){
        if (arr[2][2] == 0) {
            arr[2][2] = active_participant;
            update_box(box9);
            let status = check_winner(arr);
            if(status == 1){
                return;
            }else{
                // do nothing
            }
            active_participant = switch_turn(active_participant);
            update_turn();
            console.log(arr);
        } else {
            alert("Already Marked")
        }
    }else{
        alert("Game over and winner declared");
    }
});


reset_btn.addEventListener("click",()=>{
    active_participant = 1;
    turn.innerText = '';
    turn_result_text.innerHTML = '';
    arr[0][0] = 0;
    arr[0][1] = 0;
    arr[0][2] = 0;
    arr[1][0] = 0;
    arr[1][1] = 0;
    arr[1][2] = 0;
    arr[2][0] = 0;
    arr[2][1] = 0;
    arr[2][2] = 0;

    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    box4.innerText = '';
    box5.innerText = '';
    box6.innerText = '';
    box7.innerText = '';
    box8.innerText = '';
    box9.innerText = '';

    game_over = 0;
    player1.value = " ";
    player2.value = " ";

    blur_bg.style.top = '50%';
})
