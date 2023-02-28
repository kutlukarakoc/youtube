import { useAppDispatch, useAppSelector } from "../store/hooks"
import { logout } from "../store/features/auth"
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxLine } from 'react-icons/ri'

const AvatarMenu = () => {

   const { user } = useAppSelector(state => state.auth)
   const dispatch = useAppDispatch()

   return (
      <>
         <div className='sb__profile-menu__header'>
            <div className='sb__profile-menu__avatar'>
               <img className='sb__profile-menu__avatar' src={user.photoURL} alt='youtube' />
            </div>
            <div className='sb__profile-menu__user'>
               <div>{user.displayName}</div>
               <div>{user.email}</div>
            </div>
         </div>
         <div className='sb__profile-menu__body'>
            <div className='sb__profile-menu__entry-wrapper'>
               <div className='sb__profile-menu__entry'>
                  <CgProfile size='1.5em' /> Kanalınız
               </div>
            </div>
            <div className='sb__profile-menu__entry-wrapper' onClick={() => dispatch(logout)}>
               <div className='sb__profile-menu__entry'>
                  <RiLogoutBoxLine size='1.5em' /> Oturumu Kapat
               </div>
            </div>
         </div>
      </>
   )
}

export default AvatarMenu