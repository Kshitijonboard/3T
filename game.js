var start=false;

$("h1").click(function (){
    if(!start){
        $("h1").text("Player 1 turn");
        resetaudio();
    }
    start=true;
});
$("h1").click(function (){
    $("h1").text("Player 1 turn");
    
    if(resetGame){
        resetaudio();
        reset();
        start=true;
        turn=1;
        resetGame=0;
        alreadyWinned=0;
    }
    
});


var turn=1;
var resetGame=0;
var alreadyWinned=0;
$(".box").click(function(){
    if(start===true && alreadyWinned===0){
    console.log(this.id+" listener worked");
    if(isEmpty(this.id)){
        if(turn%2===0){
            $(this).text("O");
            $("h1").text("Player 1 turn");
            clickaudio();
            btnAnimation(this.id);
        }else{
            $(this).text("X");
            $("h1").text("Player 2 turn");
            clickaudio();
            btnAnimation(this.id);
        }
        turn++;
        if(winningCondition()){
            
            if(turn%2===0){
                $("h1").html("Player 1 won <br>Tap To Restart");
                winDrawAudio();
            }else{
                $("h1").html("Player 2 won <br>Tap To Restart");
                winDrawAudio();
            }
            
            resetGame=1;
            alreadyWinned=1;
        }else{
            if(turn===10){
                $("h1").html("Match Draw <br>Tap To Restart");
                winDrawAudio();
                resetGame=1;
                alreadyWinned=1;
            }
        }
    }else{
        console.log("space already occupied");
    }
}
});




function isEmpty(identity){
    if($("#"+identity).text()===""){
        console.log("isEmpty function initilized");
        return true;
    }else{
        return false;
    }
}


function winningCondition() {
    console.log("winningCondition function initialized");
    if ($("#box1").text().trim() === $("#box2").text().trim() && $("#box2").text().trim() === $("#box3").text().trim() && $("#box1").text().trim()!="") {
        return true;
    } else if ($("#box4").text().trim() === $("#box5").text().trim() && $("#box5").text().trim() === $("#box6").text().trim() && $("#box4").text().trim()!="") {
        return true;
    } else if ($("#box7").text().trim() === $("#box8").text().trim() && $("#box8").text().trim() === $("#box9").text().trim() && $("#box7").text().trim()!="") {
        return true;
    }
    
   
    if ($("#box1").text().trim() === $("#box4").text().trim() && $("#box4").text().trim() === $("#box7").text().trim() && $("#box7").text().trim()!="") {
        return true;
    } else if ($("#box2").text().trim() === $("#box5").text().trim() && $("#box5").text().trim() === $("#box8").text().trim() && $("#box8").text().trim()!="") {
        return true;
    } else if ($("#box3").text().trim() === $("#box6").text().trim() && $("#box6").text().trim() === $("#box9").text().trim() && $("#box9").text().trim()!="") {
        return true;
    }
    
    
    if ($("#box1").text().trim() === $("#box5").text().trim() && $("#box5").text().trim() === $("#box9").text().trim() && $("#box1").text().trim()!="") {
        return true;
    } else if ($("#box3").text().trim() === $("#box5").text().trim() && $("#box5").text().trim() === $("#box7").text().trim() && $("#box3").text().trim()!="") {
        return true;
    }
    
    return false;
}


function reset(){
    console.log("reset function called");
    for(var i=1;i<10;i++){
        $("#box"+i).text("");
    }
}


function resetaudio(){
    var audio= new Audio('./start.mp3');
    audio.play();
}

function clickaudio(){
    var audio= new Audio('./click.mp3');
    audio.play();
}
function winDrawAudio(){
    var audio= new Audio('./windraw.mp3');
    audio.play();
}


function btnAnimation(id){
    $(id).css("backgroundColor","#706868");
    setTimeout(function(){
        $(id).css("backgroundColor","white");
    },1000);
}