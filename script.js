// js factory
window.onload = function() {
    var actor = document.getElementById("actor");
    var block = document.getElementById("block");
    var touch = document.querySelector("html");

    touch.addEventListener("click", jump);

    function jump(){
        if (actor.classList != "animate"){
            actor.classList.add("animate");
        }
        setTimeout(function(){
            actor.classList.remove("animate")
        }, 500);
    }

    var youDied = setInterval(function(){
        var actorsHeadMargin = parseInt(window.getComputedStyle(actor).getPropertyValue("top"));
        var obstaclesLeftMargin = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

        if (obstaclesLeftMargin>0 && obstaclesLeftMargin<20 && actorsHeadMargin>330){
            obstacle.style.animation = "none";
            obstacle.style.display = "none";
            alert("You lose!");
         }        
    }, 10);

    
}

