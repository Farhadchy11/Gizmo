//import { createContext, useState } from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  //GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  //signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config.js";
//import App from "./App.jsx";
//import useAxiosPublick from '../hooks/useAxiosPublick';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const googleProvider = new GoogleAuthProvider();
  //const AxiosPublick = useAxiosPublick();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User:", currentUser);
      if (currentUser) {
        console.log(currentUser.email);
        const userInfo = { email: currentUser.email };
        axios.post("https://ecommerceserver-mocha.vercel.app/jwt", userInfo).then((res) => {
          console.log("JWT Response:", res.data.token);

          if (res.data.token) {
            // GoogleAuthProvider('access-token', res.data.token);
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token"); // ✅ fixed
        // setLoading(false);
      }
    });

    return () => unSubscribe();
  }, []);

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    //setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    //setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    //setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    //  googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {/* <App /> */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
