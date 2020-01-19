export default class Problem {

    /**
     * Constructor for problem class
     * @param {Int} problemNum 
     * @param {Int} numAttempts 
     * @param {Bool} completed 
     */
    constructor(problemNum, numAttempts, completed) {
        this.problemNum = problemNum;
        this.numAttempts = numAttempts;
        this.completed = completed;
    }
}