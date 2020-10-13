var container = document.getElementById("container");

//initializing a default grid, and running the event handler 
makeGrid(20,20);
test();

// this function clears the board from any changes
document.getElementById("clear").addEventListener('click', () => {
    var clearTarget = document.getElementsByClassName("divs");
    for(i = 0; i < clearTarget.length; i++){
        clearTarget[i].style.backgroundColor="bisque";
    }
})

/* a grid generator, calculates cell size by
dividing the container size with the number of rows and collumns*/
function makeGrid(rows, columns){
    let cellH =  container.clientHeight/rows;
    
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

//event landler for the make a grid button
document.getElementById("test").addEventListener('click' , () => {
    var x = document.getElementById("gridInfo").value;
    if (x>100){
        alert("Cell height/width is bigger than 100. Pick a number smaller than 100.")
        return;}
    container.innerHTML = '';
    makeGrid(x,x);
    test();
});

//used to roll rgb colors in the main function 
function getRandomColor(){
    color = Math.ceil(Math.random() * 256);
    return color;
}

// beautifully named function that handles the main etch-a-sketch event
function test(){
    var generatedDivs = document.getElementsByClassName("divs");
    for(i = 0; i < generatedDivs.length; i++){
        generatedDivs[i].addEventListener('mouseover', e => {
            if(document.getElementById("rainbow").checked === true){
                e.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}`
            }else{
                e.target.style.backgroundColor = "black";
            }
    }

 )}
};