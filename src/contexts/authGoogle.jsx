import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState, createContext } from "react";
import { app } from '../services/firebaseConfig';
import { Navigate } from "react-router-dom";

export const AuthGoogleContext = createContext({})

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = localStorage.getItem("@AuthFirebase:token")
            const sessionUser = localStorage.getItem("@AuthFirebase:user")

            if(sessionToken && sessionUser){
                setUser(sessionUser)
            }
        }
        loadStoreAuth()
    })

    const logOff = () => {
        localStorage.removeItem("@AuthFirebase:token")
        localStorage.removeItem("@AuthFirebase:user")

        document.location.reload()
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
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    }

    return(
        <AuthGoogleContext.Provider
        value={{ signInGoogle, signed: !!user, user, logOff}}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}