var s = document.getElementById("container").innerHTML;

function makeGrid(rows, columns){

    for(let i = 0; i < rows; i++){
        
        for(let j = 0; j < columns; j++){
            
            s+= `<div class="divs" style="display: inline-block; width:${800/columns}; height:${800/columns}"></div>`
        }
    }
}

makeGrid(16,16);