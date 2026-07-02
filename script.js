let tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] //"tiles" array and its contents

let moveCount = 0;
let timeCount = 0;


function shuffle()
{
    for(let i = tiles.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = tiles[i];
        tiles[i]=tiles[j];
        tiles[j] = temp;
    }
}

let cellIDs =
    [
        "cell11", "cell12", "cell13", "cell14", "cell21", "cell22","cell23", "cell24",
        "cell31", "cell32", "cell33", "cell34", "cell41", "cell42", "cell43", "cell44"
    ];

function renderBoard()
{
    for (let i = 0; i < 16; i++)
    {
        document.getElementById(cellIDs[i]).className = "tile" + tiles[i];
    }
}

function swapTiles(cellA, cellB)
{
    let temp = document.getElementById(cellA).className;
    document.getElementById(cellA).className = document.getElementById(cellB).className;
    document.getElementById(cellB).className = temp;
}

function clickTile(row,column)
{
    let cell = document.getElementById("cell" + row + column);
    let tile = cell.className;

    if (tile != "tile16")
    {
        //check to the right
        if (column < 4)
        {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                moveCount++;
                document.getElementById("moveDisplay").innerHTML = "Moves: " + moveCount;
                setTimeout(() => { Win(); }, 1000);
                return;
            }
        }


        // check LEFT
        if (column > 1)
        {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile16")
            {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                moveCount++;
                document.getElementById("moveDisplay").innerHTML = "Moves: " + moveCount;
                setTimeout(() => { Win(); }, 1000);
                return;
            }
        }

        // check DOWN
        if (row < 4)
        {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile16")
            {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                moveCount++;
                document.getElementById("moveDisplay").innerHTML = "Moves: " + moveCount;
                setTimeout(() => { Win(); }, 1000);
                return;

            }
        }

        // check UP
        if (row > 1)
        {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile16")
            {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                moveCount++;
                document.getElementById("moveDisplay").innerHTML = "Moves: " + moveCount;
                setTimeout(() => { Win(); }, 1000);
                return;

            }
        }
    }
}

function Win()
{
    if (document.getElementById("cell11").className == "tile1"
        && document.getElementById("cell12").className == "tile2"
        && document.getElementById("cell13").className == "tile3"
        && document.getElementById("cell14").className == "tile4"
        && document.getElementById("cell21").className == "tile5"
        && document.getElementById("cell22").className == "tile6"
        && document.getElementById("cell23").className == "tile7"
        && document.getElementById("cell24").className == "tile8"
        && document.getElementById("cell31").className == "tile9"
        && document.getElementById("cell32").className == "tile10"
        && document.getElementById("cell33").className == "tile11"
        && document.getElementById("cell34").className == "tile12"
        && document.getElementById("cell41").className == "tile13"
        && document.getElementById("cell42").className == "tile14"
        && document.getElementById("cell43").className == "tile15"
        && document.getElementById("cell44").className == "tile16"
    ) //long and tedious for now

    {
        clearInterval(timer);
        let sound = new Audio('tada.wav');
        sound.play();
        setTimeout(() => {
        window.alert("Congratulations!!\nTime: " + timeCount + " seconds\nMoves: " + moveCount + "\nDo you want to play again?");
        window.location.reload();
    }, 2000)
        } //gives sound 2 seconds to play before window message pops up
}

function newGame()
{
    clearInterval(timer);
    moveCount = 0;
    timeCount = 0;
    document.getElementById("moveDisplay").innerHTML = "Moves: 0";
    document.getElementById("timerDisplay").innerHTML = "Time: 0 seconds";
    shuffle();
    renderBoard();
    timer = setInterval(function()
    {
        timeCount++;
        document.getElementById("timerDisplay").innerHTML = "Time: " + timeCount + " seconds";
    }, 1000);
}

function simpleGame()
{
    clearInterval(timer);
    moveCount = 0;
    timeCount = 0;
    document.getElementById("moveDisplay").innerHTML = "Moves: 0";
    document.getElementById("timerDisplay").innerHTML = "Time: 0 seconds";
    tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,15];
    renderBoard();
    timer = setInterval(function()
    {
        timeCount++;
        document.getElementById("timerDisplay").innerHTML = "Time: " + timeCount + " seconds";
    }, 1000);
}



shuffle();
renderBoard();

let timer = setInterval(function()
{
    timeCount++
    document.getElementById("timerDisplay").innerHTML = "Time: " + timeCount + " seconds";
}, 1000);
