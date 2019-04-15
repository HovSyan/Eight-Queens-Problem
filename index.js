/*
* Created on 13.04.19 by Hovhannes Sahakyan (syanhovhannes@gmail.com)
* Taskx
*/

const QUEENS_COUNT = 8;

let chessBoard;

let solutionFound = false;
let attemptsCount = 0;

function getQueensRandomPlacement() {
  let queens = [];

  for(let i = 0; i < QUEENS_COUNT; i++) {
    let x = i;
    let y = parseInt(8 * Math.random());

    queens.push({ x: x, y: y });
  }

  return queens;
}

function areStrikingEachOther(queens) {
  chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for(let i = 0; i < QUEENS_COUNT; i++) {
    if(chessBoard[queens[i]['x']][queens[i]['y']] == 1) {
      return true;
    }

    chessBoard[queens[i]['x']][queens[i]['y']] = 1;
  }

  for(let  i = 0; i < chessBoard.length; i++) {
    for(let  j = 0; j < chessBoard[i].length; j++) {
      if(chessBoard[i][j] == 1) {
        for(let k = j + 1; k < chessBoard[i].length; k++) {
          if(chessBoard[i][k] == 1) {
            return true;
          }
        }

        for(let k = i + 1; k < chessBoard.length; k++) {
          if(chessBoard[k][j] == 1) {
            return true;
          }
        }

        for(let k = i + 1, l = j - 1; k < chessBoard.length && l >= 0; (k++, l--)) {
          if(chessBoard[k][l] == 1) {
            return true;
          }
        }

        for(let k = i + 1, l = j + 1; k < chessBoard.length && l < chessBoard[k].length; (k++, l++)) {
          if(chessBoard[k][l] == 1) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

while(!solutionFound) {
  let queens = getQueensRandomPlacement();

  if(!areStrikingEachOther(queens)) {
    solutionFound = true;
    console.log(chessBoard);
    break;
  }

  attemptsCount++;
  console.log(attemptsCount);

  if(attemptsCount == 200000) {
    console.log('Try Again');
    break;
  }
}
