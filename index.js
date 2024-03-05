let card = document.querySelectorAll(".reviewCards");
let icon = document.getElementById("icon");


let count = 0;


card.forEach(function(cards, index){
    cards.style.left = `${index * 100}%`;
});

function myfun() {
    card.forEach(function(curval) {
        curval.style.transform = `translateX(-${count * 100}%)`;
    });
}

setInterval(function() {
    count++;
    if (card.length == count) {
        count = 0;
    }
    myfun();
}, 2000);
icon.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("mode");
    if(icon.className == "fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"
        icon.style.color="white"
    }else{
        icon.className="fa-solid fa-moon"
        icon.style.color="black"

    }
    
})


    
    
