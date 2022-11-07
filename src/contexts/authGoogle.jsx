import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState, createContext } from "react";
import { app } from '../services/firebaseConfig';

export const AuthGoogleContext = createContext({})

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

            if(sessionToken && sessionUser){
                setUser(sessionUser)
            }
        }
        loadStoreAuth()
        console.log(user)
    })

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user)
            sessionStorage.setItem("@AuthFirebase:token", token)
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    }

    return(
        <AuthGoogleContext.Provider
        value={{ signInGoogle, signed: !!user, user}}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}