const images = ["weather1.jpg","weather2.jpg","weather3.jpg","weather4.jpg","weather5.jpg"];
var carousel = document.getElementById('carousel');

const interval = ()=>{
    setInterval(()=>{
           setImages();
    },3000);
};
interval();
index = 0;
const setImages = ()=>{
    carousel.src = "./media/"+images[index];
    index++;
    if(index>images.length-1){
        index=0;
    }
}
