const slider = document.querySelector('.slides');
window.addEventListener('DOMContentLoaded',init);

function init(){
    console.log('ready');
    fetch('https://github.com/installkode/Semua-data/blob/main/Manifest.json')
    .then(response => response.json())
    .then(data =>{
        adder(data);
    })
}

function adder(data){
    data.forEach((item, index)=>{
        //slider
        const bgimg = document.createElement('div');
        bgimg.classList.add('backdrop');
        const info = document.createElement('div');
        info.classList.add('info');
        const btnwatch = document.createElement('a');
        btnwatch.classList.add('watch');
        const slide = document.createElement('div');
        slide.classList.add('item');
        const title = document.createElement('a');
        const anjayinfo = document.createElement('p');
        const h2title = document.createElement('h2');
        bgimg.style.backgroundImage = "url("+item.gambar+")";
        title.href = item.url;
        anjayinfo.textContent = item.sinopsis;
        btnwatch.href = item.url;
        btnwatch.textContent = "Watch now";
        title.title = item.title;
        title.textContent = item.title;
        title.style.textAlign = 'center';
        if(index==0) slide.classList.add('active');
        slide.append(bgimg);
        slide.append(info);
        info.append(btnwatch);
        info.append(h2title);
        info.append(anjayinfo);
        h2title.append(title);
        slider.append(slide);
    })
}
