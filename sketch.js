let squarePerSide = 16;
newGrid(squarePerSide);

function newGrid(numOfSquares){
    const container = document.querySelector(".container");
    let squareSideLength = 500/numOfSquares;
    container.innerHTML = "";

    for(let i = 0;i<numOfSquares*numOfSquares;i++){

        const div = document.createElement("div");
        container.appendChild(div);

        div.style.cssText = "width: "+squareSideLength+"px; height: "+squareSideLength+"px; border: 0.1px solid black; box-sizing: border-box";
        
        
        div.addEventListener("mouseenter",function(){
            this.style.backgroundColor = "black";
        });
        const resetButton = document.querySelector("#resetGrid");
        resetButton.addEventListener('click',function(){
            div.style.backgroundColor = "white";
        });
    }
    
    
    
}

function rainbowMode(numOfSquares){
    const container = document.querySelector(".container");
    let squareSideLength = 500/numOfSquares;
    container.innerHTML = "";
    for(let i = 0;i<numOfSquares*numOfSquares;i++){
        const div = document.createElement("div");
        container.appendChild(div);

        div.style.cssText = "width: "+squareSideLength+"px; height: "+squareSideLength+"px; border: 0.1px solid black; box-sizing: border-box";
        div.addEventListener("mouseenter",function(){
            div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)+ "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ")";
        });
        
        const resetButton = document.querySelector("#resetGrid");
        resetButton.addEventListener('click',function(){
            div.style.backgroundColor = "white";
        });
    }

}


const newGridButton = document.querySelector("#newSquares");
newGridButton.addEventListener('click',function(){
    let oldSquarePerSide = squarePerSide;
    squarePerSide = prompt("How many squares per side for the new grid?");
    if(squarePerSide<=100 && squarePerSide >=1){
        console.log(squarePerSide);
        newGrid(squarePerSide);
    }else{
        alert("Please enter values greater than 0 or less then or equal to 100!");
        squarePerSide = oldSquarePerSide;
    }
});

const rainbowButton = document.querySelector("#rainbowMode");
rainbowButton.addEventListener('click',function(){
    rainbowMode(squarePerSide);
});
