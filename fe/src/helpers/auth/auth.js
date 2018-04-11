//firebase
import firebase from 'firebase';
import firebaseConfig from '../../../config/firebase';

firebase.initializeApp(firebaseConfig);

//로그인 성공 시
const loginSuccessCallBack = (function(result){
    // This gives you a Facebook Access Token.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
});
//로그인 실패 시
const loginFailedCallBack = (function(error){
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
});
const auth = (function(){
    return{
        google: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
		    provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginSuccessCallBack).catch(loginFailedCallBack);
        },
        facebook: () => {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday,public_profile,user_photos,email');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginSuccessCallBack).catch(loginFailedCallBack);
        },
        github: () => {
            const provider = new firebase.auth.GithubAuthProvider();
			provider.addScope('repo');
            provider.setCustomParameters({
			    'login_hint': 'user@example.com'
            });
            return firebase.auth().signInWithPopup(provider).then(loginSuccessCallBack).catch(loginFailedCallBack);
        },
        logout: (cb) => {
            return firebase.auth().signOut().then(cb);
        },
        authStateChanged: (cb) => {
            firebase.auth().onAuthStateChanged(cb);
        },
        currentUser: () => {
            return firebase.auth().currentUser;
        }
    }
})();

export default auth;