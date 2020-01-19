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

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.firestore = app.firestore();

        this.doInsertCompetition("newComp", "data2", 2);
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
     * @param path The path: collection/path/collection/path/...
     */
    doInsertCompetition = (name, data1, data2) => {
        let competitionRef = this.firestore.collection("competitions").doc();
        competitionRef.set({
            id: competitionRef.id,
            test1: "Test1",
            test2: "Test2"
        });
        console.log(competitionRef.id)
        // this.firestore.doc('competitions/' + name).set({
        //     data1: data1,
        //     data2: data2
        // });
    }
}

  
export default Firebase;
