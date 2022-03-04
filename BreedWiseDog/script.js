var chooseBreed = $('#choose-breed');
var btn = $('#btn');
var breed;
var SubBreed;


$.get('https://dog.ceo/api/breeds/list/all', function(data){
    var breeds = data.message;
    console.log(breeds);
    for(let dogBreed in breeds){
        chooseBreed.append(`<option value="${dogBreed}">${dogBreed}</option>`);
    }
})

chooseBreed.change(function(){
    $('#choose-sbreed').remove();

    breed = chooseBreed.val();
    if(breed!=undefined){
        let url = `https://dog.ceo/api/breed/${breed}/list`;
        $.get(url, function(data){
            var sbreed = data.message;
            console.log(sbreed);
            if(sbreed.length>0){
                console.log('hello')
                chooseBreed.after(`<select name="" id="choose-sbreed"></select>`);
                var chooseSbreed = $('#choose-sbreed');
                for(let dog of sbreed){
                    console.log(dog)
                    chooseSbreed.append(`<option value="${dog}">${dog}</option>`)
                }
            }
            
    })
    }
    
})

btn.click(function(e){
    $('#img-container').empty();
    var chooseSbreed = $('#choose-sbreed');
    e.preventDefault();
    breed = chooseBreed.val();
    SubBreed = chooseSbreed.val();
    if(breed!=undefined){
        let url = `https://dog.ceo/api/breed/${breed}`;
        if(SubBreed!= undefined){
            url+=`/${SubBreed}`;
            console.log(url);
        }
        url+=`/images`;
        console.log(url);
        $.get(url, function(data){
            var images = data.message;
            console.log(images);
            for(let img of images){
                console.log(img);
                $('#img-container').append(`<img src="${img}">`);
            }
        })
        
    }
})
