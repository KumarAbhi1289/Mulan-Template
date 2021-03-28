document.querySelector('video').style.width = `${((screen.width) * 90)/100}px`;
document.querySelector('.play').addEventListener('click', toggleVideo);
const video = document.querySelector('video');
document.querySelector('.close').addEventListener('click', ()=> {
    toggleVideo();
});

function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
    if(!trailer.classList.contains('active')){
        video.currentTime = 0;
        video.pause();
    }
}