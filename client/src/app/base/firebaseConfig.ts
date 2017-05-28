import * as firebase from 'firebase'

class FirebaseConfig {
    private static firebaseConfig;
    config = {
        apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
        authDomain: "tfsmean.firebaseapp.com",
        databaseURL: "https://tfsmean.firebaseio.com",
        projectId: "tfsmean",
        storageBucket: "tfsmean.appspot.com",
        messagingSenderId: "378897946454"
    }
    private constructor() {
        firebase.initializeApp(this.config);
    }
    static initialize(): FirebaseConfig {
        if (this.firebaseConfig == null) {
            this.firebaseConfig = new FirebaseConfig();
        }
        return this.firebaseConfig;
    }
    addUser(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    addToDatabase(child: string, id: string, obj: Object) {
        return firebase.database().ref(child + '/' + id).set(obj);
    }
    addToStorage(child: string, fileName: string, file: File) {
        return firebase.storage().ref(child + '/' + fileName).put(file);
    }
    deleteUser() {
        var user = firebase.auth().currentUser;
        return user.delete();
    }
    downloadImage(name: string) {
        return firebase.storage().ref().child(name).getDownloadURL();
    }
}

export { FirebaseConfig };