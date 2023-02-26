import { AiFillHome, AiOutlineTrophy, AiFillYoutube } from 'react-icons/ai'
import { MdOutlineSlowMotionVideo, MdOutlineVideoLibrary, MdOutlineWatchLater, MdOutlineMusicNote, MdOutlineFeedback } from 'react-icons/md'
import { BsCollectionPlay } from 'react-icons/bs'
import { VscHistory } from 'react-icons/vsc'
import { BiLike } from 'react-icons/bi'
import { HiFire, HiOutlineStatusOnline } from 'react-icons/hi'
import { SiYoutubegaming, SiYoutubemusic, SiYoutubestudio } from 'react-icons/si'
import { ImDisplay } from 'react-icons/im'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiFlagLine } from 'react-icons/ri'
import { BiHelpCircle } from 'react-icons/bi'

export const topItems = [
   [
      {
         'icon': <AiFillHome size='1.8em' />,
         'title': 'Home'
      },
      {
         'icon': < MdOutlineSlowMotionVideo size='1.8em' />,
         'title': 'Shorts'
      },
      {
         'icon': <BsCollectionPlay size='1.8em' />,
         'title': 'Subscriptions'
      }
   ],
   [
      {
         'icon': <MdOutlineVideoLibrary size='1.8em' />,
         'title': 'Library'
      },
      {
         'icon': <VscHistory size='1.8em' />,
         'title': 'History'
      },
      {
         'icon': <MdOutlineWatchLater size='1.8em' />,
         'title': 'Watch Later'
      },
      {
         'icon': <BiLike size='1.8em' />,
         'title': 'Liked videos'
      }
   ]
]

export const bottomItems = [
   {
      'sectionTitle': 'Explore',
      'entries': [
         {
            'icon': <HiFire size='1.8em' />,
            'title': 'Trending'
         },
         {
            'icon': <MdOutlineMusicNote size='1.8em' />,
            'title': 'Music'
         },
         {
            'icon': <HiOutlineStatusOnline size='1.8em' />,
            'title': 'Live'
         },
         {
            'icon': <SiYoutubegaming size='1.8em' />,
            'title': 'Gaming'
         },
         {
            'icon': <AiOutlineTrophy size='1.8em' />,
            'title': 'Sports'
         },
      ]
   },
   {
      'sectionTitle': 'More From YouTube',
      'entries': [
         {
            'icon': <AiFillYoutube color='red' size='1.8em' />,
            'title': 'YouTube Premium'
         },
         {
            'icon': <SiYoutubestudio color='red' size='1.8em' />,
            'title': 'Creator Studio'
         },
         {
            'icon': <SiYoutubemusic color='red' size='1.8em' />,
            'title': 'YouTube Music'
         },
         {
            'icon': <AiFillYoutube color='red' size='1.8em' style={{ transform: 'rotate(-5deg)' }} />,
            'title': 'YouTube Kids'
         },
         {
            'icon': <ImDisplay color='red' size='1.8em' />,
            'title': 'YouTube TV'
         },
      ]
   },
   {
      'entries': [
         {
            'icon': <IoSettingsOutline size='1.8em' />,
            'title': 'Settings'
         },
         {
            'icon': < RiFlagLine size='1.8em' />,
            'title': 'Report history'
         },
         {
            'icon': <BiHelpCircle size='1.8em' />,
            'title': 'Help'
         },
         {
            'icon': <MdOutlineFeedback size='1.8em'/>,
            'title': 'Send feedback'
         }
      ]
   }
]