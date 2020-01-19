export default class Contestant {

    /**
     * Constructor for contestant class
     * @param {User UID} userId 
     * @param {Array<Problem>} problems 
     * @param {Int} totalScore 
     */
    constructor(userId, problems, totalScore) {
        this.userId = userId;
        this.problems = problems;
        this.totalScore = totalScore;
    }
}