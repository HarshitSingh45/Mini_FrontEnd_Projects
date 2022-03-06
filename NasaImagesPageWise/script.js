var input = $('form>input');
var submitbtn = $('#btn');
var prev = $('#prev');
var next = $('#next');
var page = 1;

prev.attr('disabled','true');
next.attr('disabled','true');
submitbtn.click(function(e){
    e.preventDefault();
    getImage();
    next.removeAttr('disabled');
    submitbtn.attr('disabled','true');

});
prev.click(function(e){
    e.preventDefault();
    page--;
    getImage();
})
next.click(function(e){
    e.preventDefault();
    page++;
    getImage();
})
function getImage(){
    if(page == 1){
        prev.attr('disabled','true');
        next.removeAttr('disabled');
    }
    if(page>1){
        prev.removeAttr('disabled');
        next.removeAttr('disabled');
    }
    $('#img-container').empty();
    $.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${input.val()}&page=${page}&api_key=DEMO_KEY`,function(data){
        console.log(data);
        var photos = data.photos;
        console.log(photos);
        if(photos.length == 0){
            next.attr('disabled', 'true');
            --page;
        }
        for(let photo of photos){
            $('#img-container').append(`<img src="${photo.img_src}">`);
        }
    })
}