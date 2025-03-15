let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function(){
    if(navigator.onLine){
        online();
    }else{
        offline();
    }
}

window.addEventListener('online', online);
window.addEventListener('offline', offline);

reload.onclick  = function(){
    location.reload();
}

function online(){
    title.innerHTML = 'Online';
    title.style.color = 'green';
    ul.style.display = 'none';
    reload.style.display = 'none';
    console.log('online');
}

function offline(){
    title.innerHTML = 'Offline';
    title.style.color = 'red';
    ul.style.display = 'block';
    reload.style.display = 'block';
    console.log('offline');
}
