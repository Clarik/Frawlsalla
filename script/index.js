let slideWidth = $('#slide').width()
let slideDuration = 1000
let slides      = $('#slides')
let waitTime = 7500
$('#slide:last-child').prependTo($('#slides'))

slidesDoNothing(waitTime)

function sliderMoveRight(){
    let slideWidth = $('#slide').width()
    slides.animate({
        left: -slideWidth
    }
    , slideDuration
    , ()=>{
            let firstChild  = $('#slide:first-child')
            firstChild.appendTo(slides)
            slides.css({"left": ""})
            slidesDoNothing(waitTime)
        }
    )
}

function slidesDoNothing(waitTime){
    slides.animate({"left":""}, waitTime , ()=>{sliderMoveRight()})
}


