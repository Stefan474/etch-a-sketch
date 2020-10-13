var container = document.getElementById("container");

function makeGrid(rows, columns){
    let cellH = container.clientHeight/rows;
    
    let cellW = container.clientWidth/columns;
    

    for(let i = 0; i < rows; i++){
        
        for(let j = 0; j < columns; j++){
            var newCell = document.createElement("div");
            newCell.classList.add('divs');
            newCell.style.height = `${cellH}px`;
            newCell.style.width = `${cellW}px`;
            console.log(newCell.style.height);
            container.appendChild(newCell);
        }
    }
}

document.getElementById("test").addEventListener('click' , () => {
    var x = document.getElementById("gridInfo").value;
    container.innerHTML = '';
    makeGrid(x,x);
});
