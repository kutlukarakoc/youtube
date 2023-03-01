import '../styles/sidenavi.scss'
import { topItems, bottomItems } from '../constants/sideNavi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { nanoid } from 'nanoid'
import SignInButton from './SignInButton'
import { useAppSelector } from '../store/hooks'

const SideNavi = () => {

   const { user } = useAppSelector(state => state.auth)

   return (
      <div className="sidenavi">
         {
            topItems.map(section => (
               <div className='navi__section' key={nanoid()}>
                  {
                     section.map((entry, index) => (
                        <div className='navi__section-entry' key={index}>
                           <div>{entry.icon}</div>
                           <div className='navi__entry-title'>{entry.title}</div>
                        </div>
                     ))
                  }
               </div>
            ))
         }

         {
            Object.keys(user)?.length ? (
               <div className='navi__section'>
                  <div className='navi__section-title'>Subscriptions</div>
                  <div className='navi__section-entry'>
                     <div style={{ width: '24px', height: '24px' }}>
                        <img src="https://yt3.ggpht.com/55TOQfVrKQLMD1oT0ptUnsgi1fCKewSuVHqtc70QBj4OcA3aOUnRBJBGjEK5KRztK0f9QbzrwQ=s88-c-k-c0x00ffffff-no-rj" alt="" style={{ maxWidth: '100%', display: 'block', borderRadius: '50%' }} />
                     </div>
                     <div className='navi__entry-title'>PROTOTURK</div>
                  </div>
                  <div className='navi__section-entry'>
                     <div>
                        <IoAddCircleOutline color='#fff' size='2em' />
                     </div>
                     <div className='navi__entry-title'>Browse Channels</div>
                  </div>
               </div>
            )
            : (
               <div className='navi__section' style={{padding:'16px 32px'}}>
                  <div style={{marginBottom: '12px', fontSize:'1.1rem', fontWeight: '400'}}>Sign in to like videos, comment, and subscribe.</div>
                  <SignInButton />
               </div>
            )
         }

         {
            bottomItems.map(section => (
               <div className='navi__section' key={nanoid()}>
                  {section.sectionTitle ? <div className='navi__section-title'>{section.sectionTitle}</div> : ''}
                  {
                     section.entries.map(entry => (
                        <div className='navi__section-entry' key={nanoid()}>
                           <div>{entry.icon}</div>
                           <div className='navi__entry-title'>{entry.title}</div>
                        </div>
                     ))
                  }
               </div>
            ))
         }

      </div>
   )
}

export default SideNavi