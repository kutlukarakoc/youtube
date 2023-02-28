import '../styles/searchbar.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/main-logo.png'
import { BsList, BsBell } from 'react-icons/bs'
import { IoSearchOutline } from 'react-icons/io5'
import { HiMicrophone } from 'react-icons/hi'
import { RiVideoAddLine } from 'react-icons/ri'
import SignInButton from './SignInButton'
import { useAppSelector } from '../store/hooks'
import AvatarMenu from './AvatarMenu'
import { useRef } from 'react'

const SearchBar = () => {

   const { user } = useAppSelector(state => state.auth)
   console.log(user)

   const avatarMenuRef: any = useRef(null)
   const handleAvatarMenu = (): void => avatarMenuRef.current.classList.toggle('sb__profile-menu-show')

   return (
      <div className='searchbar'>
         <div className='sb__start'>
            <button type='button' className='sb__guide-button'>
               <BsList color='#fff' size='2em' />
            </button>
            <Link to='/' className='sb__logo'>
               <img src={logo} alt='youtube' loading='lazy' />
               <span className='sb__country'>TR</span>
            </Link>
         </div>
         <div className='sb__center'>
            <div className='sb__search'>
               <input type="text" className='sb__input' placeholder='Search' />
               <button type='button' className='sb__search-btn'>
                  <IoSearchOutline color='#fff' fill='#fff' size='1.6em' />
               </button>
            </div>
            <div className='sb__microphone'>
               <HiMicrophone color='#fff' size='1.9em' />
            </div>
         </div>
         <div className='sb__end'>
            {
               Object.keys(user)?.length
                  ? (
                     <>
                        <div className='sb__end-icons'>
                           <RiVideoAddLine color='#fff' size='2em' />
                        </div>
                        <div className='sb__end-icons'>
                           <BsBell color='#fff' size='2em' />
                        </div>
                        <button className='sb__profile' onClick={handleAvatarMenu}>
                           <img className='sb__profile-img' src={user.photoURL} alt="yotube" />
                           <div className='sb__profile-menu' ref={avatarMenuRef}>
                              <AvatarMenu />
                           </div>
                           
                        </button>
                     </>
                  )
                  : (
                     <SignInButton />
                  )
            }
         </div>
      </div>
   )
}

export default SearchBar