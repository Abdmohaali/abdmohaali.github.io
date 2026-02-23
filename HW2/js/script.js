let gambleBtn = document.querySelector("#gambleBtn");
let totalMoney = "$" + 500;
let reels = [document.querySelector("#symbolContainer1"),
document.querySelector("#symbolContainer2"),
document.querySelector("#symbolContainer3")
]
let symbols = ["🍒", "❤️", "🎶"]

gambleBtn.addEventListener("click", function shuffle(reels){
    let currentIndex = reels.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [reels[currentIndex], reels[randomIndex]] = 
        [reels[randomIndex], reels[currentIndex]];
    }
});





