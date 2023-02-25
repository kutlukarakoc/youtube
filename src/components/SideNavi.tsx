import '../styles/sidenavi.scss'
import { AiFillHome } from 'react-icons/ai'

const SideNavi = () => {
   return (
      <div className="sidenavi">

         <div className='navi__section'>
            <div className='navi__section-entry'>
               <div><AiFillHome size='1.8em'/></div>
               <div className='navi__entry-title'>Home</div>
            </div>
            <div className='navi__section-entry'>
               <div><AiFillHome size='1.8em'/></div>
               <div className='navi__entry-title'>Home</div>
            </div>
            <div className='navi__section-entry'>
               <div><AiFillHome size='1.8em'/></div>
               <div className='navi__entry-title'>Home</div>
            </div>
         </div>

      </div>
   )
}

export default SideNavi