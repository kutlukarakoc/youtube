import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
   apiKey: process.env.REACT_APP_AUTH_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_ID,
   measurementId: process.env.REACT_MEASUREMENT_ID
};
// const dispatch = useAppDispatch()
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export const register = async () => {
   try {
      const { user }: any = await signInWithPopup(auth, provider)
      // dispatch(login(true))
      return user
   } catch (error: any) {
      console.error(error.message)
   }
}

export default auth