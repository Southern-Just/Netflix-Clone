import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAjkmetuBYjGzjRVnscv58Hm-ieFILLY9A",
  authDomain: "netflix-clone-ad11f.firebaseapp.com",
  projectId: "netflix-clone-ad11f",
  storageBucket: "netflix-clone-ad11f.appspot.com",
  messagingSenderId: "259464612158",
  appId: "1:259464612158:web:043900952024eb8631046f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{

    try{
      const res = await createUserWithEmailAndPassword(auth, email,password);
      const user = res.user
      await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
      })

    }catch(error){
      console.log(error);
      alert(error);
        
    }
}

const login = async()=>{

  try{
    signInWithEmailAndPassword(auth,email,password);
  }catch(error){
    console.log(error);
    alert(error);

  }
}
const logout = ()=>{
  signOut(auth);
}
export {auth, db, login, signup, logout}
