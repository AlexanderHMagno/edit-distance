/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    word1 = " " + word1;
    word2 = " " + word2;

    const numRows = word1.length;
    const numCols = word2.length;
    const comparison = new Array(numRows);

    //Create columns in 2d Array
    for (let i = 0; i < numRows; i++) {
        comparison[i] = new Array(numCols);
    }

    //First Row Empty string
    for(let c = 0; c < numCols; c++ ){
        comparison[0][c] = c;
    } 

    //First column Empty string
    for(let r = 0; r < numRows; r++ ){
        comparison[r][0] = r;
    } 

    //Based on the previous subproblem solve the next one
    let value = 0;
    for(let r = 1; r < numRows; r ++) {
        for(let c = 1; c < numCols; c ++) {
            const diagonal = comparison[r-1][c-1];
            const prev = comparison[r-1][c];
            const abov = comparison[r][c-1];
            value = diagonal; 
            if (word1[r] != word2[c]) {
                value = Math.min(diagonal,prev,abov) + 1 ;
            }

            comparison[r][c] = value;
        }
    }

    return comparison[numRows-1][numCols-1];
  
};
