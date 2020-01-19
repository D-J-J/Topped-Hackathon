export default class User {

    /**
     * Constructor for user class
     * @param {String} name 
     * @param {String} email 
     * @param {Array<Competition>} compeitions 
     */
    constructor(name, email, competitions) {
        this.name = name;
        this.email = email;
        this.competitions = competitions;
    }
}