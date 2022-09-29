if(screen.width>=1000){
    document.querySelector(".hbreak").remove()
}

const themechange = document.querySelector(".change-btn")

themechange.addEventListener("click",function(){
    

    document.querySelector(".dark-mode").classList.toggle("light")
    document.querySelector("body").classList.toggle("light")
    if(document.querySelector("body").classList.contains("light")){
        document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 100%)" 
    }else{
        document.querySelector("body").style.backgroundColor="hsl(230, 17%, 14%)"
    }
    document.querySelector(".main").classList.toggle("light")
    document.querySelector(".overalltoday").classList.toggle("light")
    document.querySelector(".header").classList.toggle("light")
    document.querySelectorAll(".indetail").forEach(ins => {
        ins.classList.toggle("light")
        })


})
// tommorow todo
// work on desktop version and figure the class and css selector confusions 
// work for light theme manually bforegoing for JS