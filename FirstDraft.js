function gameBoard (height) {
  var ground = [];
  var cell = true; {
    if (cell === true) {
      cellColor = '\u2B55';
    } else {
      cellColor = '\u2B1C';
    }
  }
  var row = ['\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C','\u2B1C'];
  
  for (var i = 0; i < height; i++) {
    var nextRow = row.slice();
    if (Math.ceil(Math.random() * 9) > 3) { // always maxes at 10: change game board size?
      nextRow[Math.ceil(Math.random() * 9)] = cellColor; //'\u2B55'
    }
    ground.push(nextRow);
  }
  console.log (ground);
  
  //Change game board size? Change game board size to start small, and increase x + 1 & y + 1 each turn.
  
  var cellCount = 0;
  var cellPositions = [];
  
  console.log(ground.length); 
  for (var y = 0; y < ground.length; y++) {
    var currentRow = ground[y];
    for (var x = 0; x < currentRow.length; x++) {
      var currentCell = currentRow[x];  
      if (currentCell === '\u2B55') {
        cellCount++;
        cellPositions.push({ x: (x + 1), y: (y + 1)}); //+1 so 1st row and 1st columns are logged as 1, instead of 0 on the console.
      }
    }
  }
  console.log(cellCount + ' life forms exist')
  console.log('life form exists at:')
  console.log(cellPositions);

  // Cell Neighbors: add 1 if direction is also red cell
  // Need to move this up further 
  // Need to change all values to false initially & if neighbor is red, return true.
  var N = 0;
  var NE = 0;
  var E = 0;
  var SE = 0;
  var S = 0;
  var SW = 0;
  var W = 0;
  var NW = 0;

  //Location of neighbor based on (original) cell(s). Need to change to assess all life form locations.
  var locationN = (x , (y - 1));
  var locationNE = ((x + 1) , (y - 1));
  var locationE = ((x + 1) , y);
  var locationSE = ((x + 1) , (y + 1));
  var locationS = (x , (y + 1));
  var locationSW = ((x - 1) , (y + 1));
  var locationW = ((x - 1) , y);
  var locationNW = ((x - 1) , (y - 1));

  //console.log(locationN); // always return 9 (= x+y)

  // If neighbor is red add 1 to count total neighbors
  // Started with just accessing North.
  // Need to change to if North is red, then North = true;
  if (locationN = '\u2B55') {
    N + 1;
  }

  var meaningOfLife = [cell, N, NE, E, SE, S, SW, W, NW];
  var allNeighbors = [N, NE, E, SE, S, SW, W, NW];
  var totalNeighbors = (N+NE+E+SE+S+SW+W+NW); //
  
  if (cell = true) {
    cellColor = '\u2B55';
    if (totalNeighbors < 2 || totalNeighbors > 3) {
      cell = false;
    } else {
      cellColor = '\u2B1C';
      if (totalNeighbors === 3) {
        cell = true;
      }
    }
  } 
  // Need to add alert: 'Press Enter to see if you world survived another day.' 
  // Add counter for number of days.
  
  return 'Will your world survive?'

  //console.log('total neighbors: ' + totalNeighbors);
  //console.log(N);
  //console.log(locationN)
} 
gameBoard (10);
