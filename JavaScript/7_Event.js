const button = document.getElementById("playButton");

// event continuously run in backend 
button.addEventListener('click', ()=>{
    if (button.textContent  === 'Play Button'){
        button.textContent = 'Pause Button';
        console.log("Music is playing!");
    } else {
        button.textContent = 'Play Button';
        console.log("Music is paused!");
    }
});

//document.body.appendChild()
const itemList = document.getElementById("itemList");
let addItemButton = document.getElementById("addItemButton");
let i = 3;
addItemButton.addEventListener('click', ()=>{
    
    const newItem = document.createElement('li');
    newItem.textContent = 'Item ' + i;
    itemList.appendChild(newItem);
    i++;
});