// const candies = ["Red", "Blue", "Orange", "Yellow", "Green", "Purple"];
// let board = [];
// const rows = 9;
// const columns = 9;
// let currentTile;
// let otherTile;
// let score = 0

// window.onload = () => {
//   startGame();
//   setInterval(() => {
//     candyCrush();
//   }, 100);
// };

// const randomTile = () => {
//   return candies[Math.floor(Math.random() * candies.length)];
// };

// const startGame = () => {
//   for (let r = 0; r < rows; r++) {
//     let row = [];
//     for (let c = 0; c < columns; c++) {
//       let tile = document.createElement("img");
//       tile.id = r.toString() + "-" + c.toString();
//       tile.src = "./images/" + randomTile() + ".png";
//       document.getElementById("board").appendChild(tile);
//       row.push(tile);
//       //functions for candy moves
//       tile.addEventListener("dragstart", dragStart);
//       tile.addEventListener("dragover", dragOver);
//       tile.addEventListener("dragenter", dragEnter);
//       tile.addEventListener("dragleave", dragLeave);
//       tile.addEventListener("drop", dragDrop);
//       tile.addEventListener("dragend", dragEnd);
//     }
//     board.push(row);
//   }
// };

// function dragStart() {
//   currentTile = this;
// }

// function dragDrop() {
//   otherTile = this;
// }

// const dragEnd = () => {
//   let currentCoordinates = currentTile.id.split("-");
//   let currentRow = parseInt(currentCoordinates[0]);
//   let currentColumn = parseInt(currentCoordinates[1]);
//   let otherCoordinate = otherTile.id.split("-");
//   let otherRow = parseInt(otherCoordinate[0]);
//   let otherColumn = parseInt(otherCoordinate[1]);
//   let moveLeft = currentRow == otherRow && currentColumn - 1 == otherColumn;
//   let moveRight = currentRow == otherRow && currentColumn + 1 == otherColumn;
//   let moveUp = currentRow - 1 == otherRow && currentColumn == otherColumn;
//   let moveDown = currentRow + 1 == otherRow && currentColumn == otherColumn;
//   const isAdjacentTile = moveLeft || moveRight || moveUp || moveDown;
//   if (isAdjacentTile) {
//     let currentImg = currentTile.src;
//     let otherImg = otherTile.src;
//     currentTile.src = otherImg;
//     otherTile.src = currentImg;
//     let validMovement = validMove();
//     if (!validMovement) {
//       let currentImg = currentTile.src;
//       let otherImg = otherTile.src;
//       currentTile.src = otherImg;
//       otherTile.src = currentImg;
//     }
//   }
// };

// const dragOver = (e) => {
//   e.preventDefault();
// };
// const dragEnter = (e) => {
//   e.preventDefault();
// };
// const dragLeave = (e) => {
//   e.preventDefault();
// };

// const candyCrush = () => {
//   nineCrush();
//   eightCrush();
//   sevenCrush();
//   sixCrush();
//   fiveCrush();
//   fourCrush();
//   threeCrush();
//   document.getElementById("score").innerHTML = score;
// };

// const threeCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 2; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("transparent")) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         score+=30
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 2; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("transparent")) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         score+=30
//       }
//     }
//   }
// };

// // Four candy crush

// const fourCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 3; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         score+=40
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 3; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         score+=40
//       }
//     }
//   }
// };

// // Five candy crush

// const fiveCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 4; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       candy5 = board[r][c+4]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         score+=50
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 4; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       candy5 = board[r + 4][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         score+=50
//       }
//     }
//   }
// };

// // Six candy crush

// const sixCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 5; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       candy5 = board[r][c+4]
//       candy6 = board[r][c+5]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src&& candy5.src == candy6.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         score+=60
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 5; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       candy5 = board[r + 4][c];
//       candy6 = board[r + 5][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         score+=60
//       }
//     }
//   }
// };

// // seven candy crush

// const sevenCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 6; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       candy5 = board[r][c+4]
//       candy6 = board[r][c+5]
//       candy7 = board[r][c+6]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         score+=70
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 6; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       candy5 = board[r + 4][c];
//       candy6 = board[r + 5][c];
//       candy7 = board[r + 6][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         score+=70
//       }
//     }
//   }
// };

// // Eight candy crush

// const eightCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 7; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       candy5 = board[r][c+4]
//       candy6 = board[r][c+5]
//       candy7 = board[r][c+6]
//       candy8 = board[r][c+7]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src && candy7.src == candy8.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         candy8.src = "./images/transparent.png";
//         score+=80
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 7; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       candy5 = board[r + 4][c];
//       candy6 = board[r + 5][c];
//       candy7 = board[r + 6][c];
//       candy8 = board[r + 7][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src&& candy7.src == candy8.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         candy8.src = "./images/transparent.png";
//         score+=80
//       }
//     }
//   }
// };

// // Nine candy crush

// const nineCrush = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 8; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       candy4 = board[r][c+3]
//       candy5 = board[r][c+4]
//       candy6 = board[r][c+5]
//       candy7 = board[r][c+6]
//       candy8 = board[r][c+7]
//       candy9 = board[r][c+8]
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src && candy7.src == candy8.src && candy8.src == candy9.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         candy8.src = "./images/transparent.png";
//         score+=90
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 8; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       candy4 = board[r + 3][c];
//       candy5 = board[r + 4][c];
//       candy6 = board[r + 5][c];
//       candy7 = board[r + 6][c];
//       candy8 = board[r + 7][c];
//       candy9 = board[r + 8][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src  && candy6.src == candy7.src && candy7.src == candy8.src  && candy8.src == candy9.src) {
//         candy1.src = "./images/transparent.png";
//         candy2.src = "./images/transparent.png";
//         candy3.src = "./images/transparent.png";
//         candy4.src = "./images/transparent.png";
//         candy5.src = "./images/transparent.png";
//         candy6.src = "./images/transparent.png";
//         candy7.src = "./images/transparent.png";
//         candy8.src = "./images/transparent.png";
//         candy9.src = "./images/transparent.png";
//         score+=90
//       }
//     }
//   }
// };

// const validMove = () => {
//   for (r = 0; r < rows; r++) {
//     for (c = 0; c < columns - 2; c++) {
//       candy1 = board[r][c];
//       candy2 = board[r][c + 1];
//       candy3 = board[r][c + 2];
//       if (candy1.src == candy2.src && candy2.src == candy3.src) {
//         return true;
//       }
//     }
//   }
//   for (c = 0; c < columns; c++) {
//     for (r = 0; r < rows - 2; r++) {
//       candy1 = board[r][c];
//       candy2 = board[r + 1][c];
//       candy3 = board[r + 2][c];
//       if (candy1.src == candy2.src && candy2.src == candy3.src) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
const board = [];
const rows = 9;
const columns = 9;
let score = 0;

let currTile;
let otherTile;

window.onload = function () {
  startGame();

  //1/10th of a second
  window.setInterval(function () {
    crushCandy();
    slideCandy();
    generateCandy();
  }, 100);
};

function randomCandy() {
  return candies[Math.floor(Math.random() * candies.length)];
}

function startGame() {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = "./images/" + randomCandy() + ".png";

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }

  console.log(board);
}

function dragStart() {
  //this refers to tile that was clicked on for dragging
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.preventDefault();
}

function dragDrop() {
  //this refers to the target tile that was dropped on
  otherTile = this;
}

function dragEnd() {
  if (
    currTile.src.includes("transparent") ||
    otherTile.src.includes("transparent")
  ) {
    return;
  }

  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = c2 == c - 1 && r == r2;
  let moveRight = c2 == c + 1 && r == r2;

  let moveUp = r2 == r - 1 && c == c2;
  let moveDown = r2 == r + 1 && c == c2;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    let validMove = checkValid();
    if (!validMove) {
      let currImg = currTile.src;
      let otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;
    }
  }
}

function crushCandy() {
  crushFive();
  crushFour();
  crushThree();
  document.getElementById("score").innerText = score;
}

function crushThree() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        score += 30;
      }
    }
  }
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        score += 30;
      }
    }
  }
}

function crushFour() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      let candy4 = board[r][c + 3];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        candy3.src == candy4.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        candy4.src = "./images/transparent.png";
        score += 40;
      }
    }
  }
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      let candy4 = board[r + 3][c];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        candy3.src == candy4.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        candy4.src = "./images/transparent.png";
        score += 40;
      }
    }
  }
}

// Five Candy crush

function crushFive() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 4; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      let candy4 = board[r][c + 3];
      let candy5 = board[r][c + 4];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        candy3.src == candy4.src &&
        candy4.src == candy5.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        candy4.src = "./images/transparent.png";
        candy5.src = "./images/transparent.png";
        score += 50;
      }
    }
  }
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 4; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      let candy4 = board[r + 3][c];
      let candy5 = board[r + 4][c];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        candy3.src == candy4.src &&
        candy4.src == candy5.src &&
        !candy1.src.includes("transparent")
      ) {
        candy1.src = "./images/transparent.png";
        candy2.src = "./images/transparent.png";
        candy3.src = "./images/transparent.png";
        candy4.src = "./images/transparent.png";
        candy5.src = "./images/transparent.png";
        score += 50;
      }
    }
  }
}

function checkValid() {
  //check rows
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        !candy1.src.includes("transparent")
      ) {
        return true;
      }
    }
  }

  //check columns
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        !candy1.src.includes("transparent")
      ) {
        return true;
      }
    }
  }

  return false;
}

function slideCandy() {
  for (let c = 0; c < columns; c++) {
    let ind = rows - 1;
    for (let r = columns - 1; r >= 0; r--) {
      if (!board[r][c].src.includes("transparent")) {
        board[ind][c].src = board[r][c].src;
        ind -= 1;
      }
    }
    for (let r = ind; r >= 0; r--) {
      board[r][c].src = "./images/transparent.png";
    }
  }
}

function generateCandy() {
  for (let c = 0; c < columns; c++) {
    if (board[0][c].src.includes("transparent")) {
      board[0][c].src = "./images/" + randomCandy() + ".png";
    }
  }
}
