const images = document.querySelectorAll('img');

let imageOptions = {};
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entery)=>{
        if(!entery.isIntersecting)
        return;
        const image = entery.target;
        image.src = image.src.replace("&w=10&","&w=600&");
        observer.unobserve(image);
    });
},imageOptions);

images.forEach((image)=>{
    observer.observe(image);
});