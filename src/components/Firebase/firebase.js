import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
const COMPETITIONS_COLLECTION = "competitions";

// const testComp = {
//     id: "KQ8I9V4DROo05ALQzk1p",
//     data: "cookiez",
//     data2: "moar cookiez"
// }

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.firestore = app.firestore();

        // console.log(this.receiveCompetitionUpdates(this.testCallback));

        // this.doInsertCompetition({
        //     data1: "Test1",
        //     data2: "Test2"
        // });

        // this.doUpdateCompetition({
        //     id: "h3HAQ4sjG7SsOiBZtkhY",
        //     data1: "Hello!",
        //     data2: "Hehehe"
        // });

        // this.doDeleteCompetition({
        //     id: "h3HAQ4sjG7SsOiBZtkhY",
        //     data1: "Hello!",
        //     data2: "Hehehe"
        // });
    }

    testCallback = (result) => {
        console.log(result);
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    /**
     * Creates a new competition entry or updates an existing one
     * @param competition The competition object to create/update
     */
    doInsertCompetition = (competition) => {
        let competitionRef = this.firestore.collection(COMPETITIONS_COLLECTION).doc();
        competitionRef.set({
            ...competition,
            id: competitionRef.id
        });
        // console.log(competitionRef.id)
        // this.firestore.doc('competitions/' + name).set({
        //     data1: data1,
        //     data2: data2
        // });
    }

    /**
     * Updates the competition object from firebase
     * @param competition
     */
    doUpdateCompetition = (competition) => {
        let competitionRef = this.firestore.collection(COMPETITIONS_COLLECTION).doc(competition.id);
        competitionRef.set(competition);
    }

    /**
     * Deletes the competition object from firebase
     * @param competition The competition object to delete
     */
    doDeleteCompetition = (competition) => {
        let competitionRef = this.firestore.collection(COMPETITIONS_COLLECTION).doc(competition.id);
        competitionRef.delete();
    }

    /**
     * Gets all the documentation in the specified competitions collection
     * @param callback The callback when the competitions collection is updated (returns the querySnapshot). Obtain
     * data by iterating through snapshot and calling .data().
     */
    receiveCompetitionUpdates = (callback) => {
        let query = this.firestore.collection(COMPETITIONS_COLLECTION);
        let observer = query.onSnapshot(querySnapshot => {
            // console.log(querySnapshot)
            console.log(`Received query snapshot of size ${querySnapshot.size}`);
            // querySnapshot.forEach(doc => {
            //     console.log(doc.data())
            // })
            callback(querySnapshot);
        }, err => {
            console.log(`Encountered error: ${err}`);
            callback(null);
        })
    }
}

  
export default Firebase;
