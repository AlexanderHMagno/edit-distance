## 72. Edit Distance

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character


## Explanation

This can be solved using memoization as part of a Dynamic programming solution. I am using a 2d Array to keep the information of previous solved subproblems that will help me to find a final solution:


You can check the code here: [code](./solution.js)

![solution](./solution.png)


