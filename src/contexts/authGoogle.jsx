import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState, createContext } from "react";
import { app, db } from '../services/firebaseConfig';
import { Navigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

export const AuthGoogleContext = createContext({})

const provider = new GoogleAuthProvider();
const userRef = collection(db, "users")

export const AuthGoogleProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const [userDB, setUserDB] = useState(null)

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = localStorage.getItem("@AuthFirebase:token")
            const sessionUser = localStorage.getItem("@AuthFirebase:user")
            const sessionDB = localStorage.getItem("@Firestore:user")

            if(sessionToken && sessionUser && sessionDB){
                setUser(sessionUser)
                setUserDB(sessionDB)
            }
        }
        loadStoreAuth()
    })

    const logOff = () => {
        localStorage.removeItem("@AuthFirebase:token")
        localStorage.removeItem("@AuthFirebase:user")
        localStorage.removeItem("@Firestore:user")

        document.location.reload()
    }

    async function makeUser(user){
        await setDoc(doc(db, "users", user.email), {
            nickname: "",
            name: user.displayName,
            desc: ""
        })
    }

    async function getUser(userLog){
        const docRef = doc(db, "users", userLog.email)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            setUserDB(docSnap.data())
            localStorage.setItem("@Firestore:user", JSON.stringify(docSnap.data()))
        } else {
            makeUser(userLog)
        }
    }

    async function AtualizeData (){
        if(user){
            const logUser = localStorage.getItem("@AuthFirebase:user")
            const logJSON = JSON.parse(logUser)
            await getUser(logJSON)
            const sessionDB = localStorage.getItem("@Firestore:user")
            setUserDB(sessionDB)
        }
    }

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user)
            localStorage.setItem("@AuthFirebase:token", token)
            localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
            getUser(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    }

    return(
        <AuthGoogleContext.Provider
        value={{ signInGoogle, signed: !!user && !!userDB, user, logOff, userDB, AtualizeData}}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}