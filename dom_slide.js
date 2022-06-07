
// let photo = ["img/01.webp", "img/04.jpg", "img/03.webp"];
// let totalPhoto = document.querySelector("#img");

// count = 0;

// function next(){
//     count++;
//     if(count>=photo.length){
//         count =0;
//         totalPhoto.src = photo[count];
//     }else {
//         totalPhoto.src = photo[count];
//     }
// }

// function prev(){
//     count--;
//     if(count<=0){
//         count = photo.length -1;
//         totalPhoto.src = photo[count];
//     }else {
//         totalPhoto.src=photo[count];
//     }
// }

let photo = ["img/01.webp", "img/04.jpg","img/03.webp"];
let totalPhoto = document.querySelector("#img");

count = 0;

function next(){
    count++;
    if(count >=photo.length){
        count = 0;
        totalPhoto.src = photo[count];
    }else {
        totalPhoto.src = photo[count];
    }
}

function prev(){
    count--;
    if(count <= 0){
        count = photo.length-1;
        totalPhoto.src = photo[count];
    }else {
        totalPhoto.src = photo[count];
    }
}

