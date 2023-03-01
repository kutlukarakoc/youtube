import '../styles/searchbar.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/main-logo.png'
import { BsList, BsBell } from 'react-icons/bs'
import { IoSearchOutline } from 'react-icons/io5'
import { HiMicrophone } from 'react-icons/hi'
import { RiVideoAddLine } from 'react-icons/ri'
import SignInButton from './SignInButton'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import AvatarMenu from './AvatarMenu'
import { useState, useEffect, useRef  } from 'react'
import { useDebouncedValue } from '../hooks/debounceValue'
import { setSearch } from '../store/features/search'

const SearchBar = () => {

   const dispatch = useAppDispatch()

   /* get user state to control if user is logged in */
   const { user } = useAppSelector(state => state.auth)
   const avatarMenuRef: any = useRef(null)
   const handleAvatarMenu = (): void => avatarMenuRef.current.classList.toggle('sb__profile-menu-show')

   /* set search value to state using debounced value */
   const { search } = useAppSelector(state => state.search)
   const [searchValue, setSearchValue] = useState<string>('')
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(event.target.value)
   const debouncedValue: string = useDebouncedValue(searchValue, 500)

   useEffect(() => {
      dispatch(setSearch(debouncedValue))
   }, [debouncedValue])

   const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault()
      // console.log('search',search)
   }

   // console.log(user)

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
            <form className='sb__search' onSubmit={handleSubmit}>
               <input type="text" className='sb__input' placeholder='Search' value={searchValue} onChange={handleChange}/>
               <button type='submit' className='sb__search-btn'>
                  <IoSearchOutline color='#fff' fill='#fff' size='1.6em' />
               </button>
            </form>
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