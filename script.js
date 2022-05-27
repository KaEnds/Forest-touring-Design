var getimg = document.getElementsByClassName("show-img")
var index = 0
hideimg()
showimg(0)

setInterval(next, 10000)

function next(){
    hideimg()
    index += 1;
    if(index >= getimg.length){
        index = 0
    }
    showimg(index)
}

function previous(){
    hideimg()
    index -= 1;
    if(index < 0){
        index = 2
    }
    showimg(index)
}

function hideimg(){
    for(let i = 0; i < getimg.length; i++){
        getimg[i].style.display = 'none'
    }
}

function showimg(i){
    getimg[i].style.display = 'block'
}

window.onscroll = function(){scrollfunc()}

function scrollfunc(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let cal = winScroll / 713
    document.getElementsByClassName("navbg")[0].style.opacity = cal
}

var modal = document.getElementsByClassName("modal-box")[0]
var modalbg = document.getElementsByClassName("modalbg")[0]


function openform(){
    console.log('ok')
    modal.style.display = "block"
    modalbg.style.display = "block"
}

function closeform(){
    modal.style.display = "none"
    modalbg.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modalbg) {
        modal.style.display = "none";
        modalbg.style.display = "none";
    }
}