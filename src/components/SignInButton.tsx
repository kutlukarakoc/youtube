import { FaUserCircle } from 'react-icons/fa'

const SignInButton: React.FC = () => {
   return (
      <div className='signin-btn'>
         <FaUserCircle color='#3ea6ff' size='1.5em' />
         <div className='signin-text'>Sign in</div>
      </div>
   )
}

export default SignInButton