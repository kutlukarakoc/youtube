import { FaUserCircle } from 'react-icons/fa'
import { register } from '../firebase'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { login } from '../store/features/auth'

const SignInButton: React.FC = () => {

   const userData = useAppSelector(state => state.auth.user)
   const dispatch = useAppDispatch()
   const handleRegister = async () => {
      if (!Object.keys(userData)?.length) {
         try {
            const user = await register()
            dispatch(login(user?.providerData[0]))
         } catch (error) {
            console.log(error)
         }
      }
   }

   return (
      <div className='signin-btn' onClick={handleRegister}>
         <FaUserCircle color='#3ea6ff' size='1.5em' />
         <div className='signin-text'>Sign in</div>
      </div>
   )
}

export default SignInButton