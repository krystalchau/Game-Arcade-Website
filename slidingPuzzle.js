"use strict"

let size = 3;
let rows = size;
let cols = size;
let numberOfTiles = size * size;
let emptyCoord = [3, 3];
let emptyTile;
let positions = [];

let tileBoard = document.getElementById("puzzleBoard");
const tiles = document.querySelectorAll(".tile");

document.addEventListener("DOMContentLoaded", () => {
    tiles.forEach(tile => tile.addEventListener("click", tileClick));
    document.getElementById("NewGameBtn").addEventListener("click", newGame);
});


function newGame() {
    generateBoard();
    shuffleTiles();
}


function generateBoard() {
    let index = 0
    for (let r=0; r<rows; r++) {
        for (let c=0; c <cols; c++){
            tile = tiles[index]
            tile.setAttribute("index", index);
            tile.setAttribute("pos", r);
            tile.style.left=(c*tile.clientWidth)+"px";
            tile.style.top=(r*tile.clientWidth) +"px";
            tile.addEventListener("click", (e)=>tileClick(index));
            positions.push(index);
            index += 1;
        }
    }
}

function shuffleTiles() {
    for (let i = 0; i < numberOfTiles; i++){
        let random = Math.floor(Math.random() * numberOfTiles);
        let move = positions[random];
        positions[i].innerText = positions[random];
        positions[random].innerText = move;
    }
}

function findTile(index){
    let tiles = document.getElementsByClassName('tile');
    for (let i =0;i <size; i++){
        if (parseInt(tiles.getAttribute("index")) == index){
            return tiles;
        }
    }
    return null;
}

function swapTile(index){
    emptyTile = document.getElementById("tile-empty");
    tiles = document.getElementsByClassName("tile");
    let tile = findTile(index);
    if (tile == NULL){
        return false;
    }
    let count = 0;
    while(parseInt(tiles[count].getAttribute("index")) != index){
        count += 1;
        if(count >= numberOfTiles){
            break;
        }
    }
    let tileXY = coords(tile[count]);
    if(tileXY != NULL){
        emptyTile.style.left = (tileXY[0]*emptyTile.clientWidth)+"px";
        emptyTile.style.top = (tileXY[1]*emptyTilee.clientWidth)+"px";
        emptyCoord[0] = tileXY[0];
        emptyCoor[1] = tileXY[1];
        return true;
    }
    return false;
}

function coords(tile){
    emptyTile = document.getElementById("tile-empty");
    let coord = [parseInt(tile.style.left)/tile.clientWidth, pparseInt(tile.style.top)/tile.clientWidth];
    let diff1 = Math.abs(coord[0] - emptyCoor[0]);
    let diff2 = Math.abs(coord[1] - emptyCoor[1]);
    if ((diff1 == 0 && diff2 == 1) || (diff1 == 1 && diff2 == 0)){
        return coord;
    }else{
        return null;
    }
}

window.onkeydown = function(event) {
    emptytile = document.getElementById("tile-empty");
    emptyIndex = emptyTile.getAttribute("index");

    switch(e.key){
        case "ArrowLeft":
            if(emptyIndex % 3 != 0){
                swapTile(emptyIndex);
            }
            break;
        case "ArrowRight":
            if(emptyIndex % 3 == 0){
                swapTile(emptyIndex);
            }
            break;
        case "ArrowUp":
            if(emptyIndex + size  < numberOfTiles){
                swapTile(emptyIndex + size);
            }
            break;
        case "ArrowDown":
            if(emptyIndex - size > 0){
                swapTile(emptyIndex - size);
            }
            break;
    }
}


function checkWin(){
    winPositions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let currTiles = document.getElementByClassName("tile");
    for (let i = 0; i < 9 ; i++) {
        if (currTiles[i].getAttribute("index") != winPositions[i]){
            return;
        }
    }
    alert("Congratulations");
}


function tileClick(index) {
    let sIndex = index;
    let emptyTile = document.getElementById("tile-empty");
    let emptyIndex = parseInt(emptyTile.getAttribute("index"));

    if (sIndex == emptyIndex){
        return;
    }
    // check move up
    if (sIndex - size == emptyIndex) {
        swapTile(sIndex);
    }
    // check move down
    else if (sIndex + size == emptyIndex) {
        swapTile(sIndex);
    }
    // check move left
    else if (sIndex - 1 == emptyIndex) {
        swapTile(sIndex);
    }
    // check move right
    else if (sIndex + 1 == emptyIndex) {
        swapTile(sIndex);
    }
}
