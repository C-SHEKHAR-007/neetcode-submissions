class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let columns = Array.from({ length: 9 }, () => new Set());
        let squares = Array.from({ length: 9 }, () => new Set());


        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let cv = board[r][c]

                if (cv === ".") continue;

                let sr = Math.floor(r / 3)
                let sc = Math.floor(c / 3)
                let squareIndex = (3 * sr + sc)

                if (rows[r].has(cv) || columns[c].has(cv) || squares[squareIndex].has(cv)) return false

                rows[r].add(cv)
                columns[c].add(cv)
                squares[squareIndex].add(cv);
            }
        }
        return true;
    }
}
