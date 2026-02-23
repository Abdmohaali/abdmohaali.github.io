let gambleBtn = document.querySelector("#gambleBtn");
let totalMoney = "$" + 500;
let reels = [document.querySelector("#symbolContainer1"),
document.querySelector("#symbolContainer2"),
document.querySelector("#symbolContainer3")
]
let symbols = ["🍒", "❤️", "🎶"]

gambleBtn.addEventListener("click", function shuffle(symbols){
    let currentIndex = symbols.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [reels[currentIndex], reels[randomIndex]] = 
        [reels[randomIndex], reels[currentIndex]];
    }

    if(reels[0] == reels[1] && reels[1] == reels[2]){
        totalMoney *= 3;
    } else {
        totalMoney -= 100;
    }

    if(totalMoney == 0){
        console.log("You Lose, womp womp");
    }
});

// totalMoney.addEventListener("input", function(){

// });







