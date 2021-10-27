import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const handleUserRegister = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    };

    const handleUserLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        handleUserRegister,
        handleUserLogin,
        isLoading
    }
}

export default useFirebase;