$(function(){
    var firstImage = $('#firstImage');
    var lastImage = $('#lastImage');

    $('.prevBtn').on('click',function(){
        var imageShow = $('.active');
        var prevImage = imageShow.prev();
        
        if(prevImage.length > 0){
            imageShow.removeClass('active');
            prevImage.addClass('active');
        }else{
            imageShow.removeClass('active');
            lastImage.addClass('active');
        }
    })

    $('.nextBtn').on('click',function(){
        var imageShow = $('.active');
        var nextImage = imageShow.next();

        if(nextImage.length > 0){
            imageShow.removeClass('active');
            nextImage.addClass('active');
        }else{
            lastImage.removeClass('active');
            firstImage.addClass('active');
        }
    })
})

