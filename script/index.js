let slideWidth = $('#slide').width()
let slideDuration = 1000
let slides      = $('#slides')

slides.css({
    "margin-left": -slideWidth
})
$('#slide:last-child').prependTo($('#slides'))

slidesDoNothing(8000)

function sliderMoveRight(){
    slides.animate({
        left: -slideWidth
    }
    , slideDuration
    , ()=>{
            let firstChild  = $('#slide:first-child')
            firstChild.appendTo(slides)
            slides.css({"left": ""})
            slidesDoNothing(8000)
        }
    )
}

function slidesDoNothing(waitTime){
    slides.animate({"left":""}, waitTime , ()=>{sliderMoveRight()})
}


