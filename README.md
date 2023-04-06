## 72. Edit Distance

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character


## Explanation

This can be solved using memoization as part of a Dynamic programming solution. I am using a 2d Array to keep the information of previous solved subproblems that will help me to find a final solution:

Basically at each step (coordinate) we do:

- Nothing when the letters are equal (same cost as (i-1, j-1))
- We choose the lowest previous cost of either (i-1,j-1), (i-1) , (j-1) and we add + 1, when the letters are different at eachother.

You can check the code here: [code](./solution.js)

![solution](./solution.png)


