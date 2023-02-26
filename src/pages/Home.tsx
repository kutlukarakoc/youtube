import '../styles/home.scss'
import { RecommendedVideos } from '../types/recommendedVideos';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient();

const HomeItems: any = () => {

   const { isLoading, error, data } = useQuery<RecommendedVideos, Error>('repoData', () =>
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=reactjs&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
         .then(res =>
            res.json()
         )
   )

   if (isLoading) return <div>loading...</div>
   if (error) return <div>error</div>
   console.log(data)

   return (
      <>
         {
            data?.items.map(item => (
               <div className="home__content-wrapper" key={item.etag}>
                  <div className='home__content-player' style={{backgroundImage:`url("${item.snippet.thumbnails.high.url}")`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}></div>
                  <div className='home__content-details'>
                     <div className='details__avatar'>
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.channelTitle} />
                     </div>
                     <div className='details__meta'>
                        <h3 className="details__title">{item.snippet.title}</h3>
                        <div className="details__post-info">
                           <div className='details__channel-name'>{item.snippet.channelTitle}</div>
                           <div className='details__metadata'>
                              <div className='details__metadata-views'>294K views</div>
                              <div className='details__metadata-divider'>.</div>
                              <div className='details__metadata-date'>1 day ago</div>
                           </div>
                        </div>
                     </div>
                     <div className='details__menu'></div>
                  </div>
               </div>
            ))
         }
      </>
   )

}


const Home: React.FC = () => {

   return (
      <div className='home'>
         <QueryClientProvider client={queryClient}>
            <HomeItems />
         </QueryClientProvider>

         <div className="home__content-wrapper">
            <div className='home__content-player'></div>
            <div className='home__content-details'>
               <div className='details__avatar'>
                  <img src="https://yt3.ggpht.com/1qqfKVq2KK6PurSulC3OPAOXeH7jk4Ze9d80BB3-OqRy_HXxyUrFmDNYvZKyKDb8tJy2rliBWQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
               </div>
               <div className='details__meta'>
                  <h3 className="details__title">ZENGİN İNSANLARIN KAHVALTILARINI DENEDİK!</h3>
                  <div className="details__post-info">
                     <div className='details__channel-name'>TepkiKolik</div>
                     <div className='details__metadata'>
                        <div className='details__metadata-views'>294K views</div>
                        <div className='details__metadata-divider'>.</div>
                        <div className='details__metadata-date'>1 day ago</div>
                     </div>
                  </div>
               </div>
               <div className='details__menu'></div>
            </div>
         </div>

      </div>
   )
}

export default Home