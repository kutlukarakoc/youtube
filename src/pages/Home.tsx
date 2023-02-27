import '../styles/home.scss'
import { RecommendedVideos } from '../types/recommendedVideos'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { formatViewCount } from '../hooks/formatViewCount';
import { formatPublishDate } from '../hooks/formatPublishDate';
import { formatTime } from '../hooks/formatTime';

const queryClient = new QueryClient();

const HomeVideos: any = () => {

   const { isLoading, error, data } = useQuery<RecommendedVideos, Error>('repoData', () =>
      fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
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
                  <div className='home__content-player' style={{ backgroundImage: `url("${item.snippet.thumbnails.high.url}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                     <div className='home__content-duration'>{formatTime(item.contentDetails.duration)}</div>
                  </div>
                  <div className='home__content-details'>
                     <div className='details__avatar'>
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.channelTitle} loading='lazy' />
                     </div>
                     <div className='details__meta'>
                        <h3 className="details__title">{item.snippet.title}</h3>
                        <div className="details__post-info">
                           <div className='details__channel-name'>{item.snippet.channelTitle}</div>
                           <div className='details__metadata'>
                              <div className='details__metadata-views'>{formatViewCount(item.statistics.viewCount)}</div>
                              <div className='details__metadata-divider'>.</div>
                              <div className='details__metadata-date'>{formatPublishDate(item.snippet.publishedAt)}</div>
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
            <HomeVideos />
         </QueryClientProvider>
      </div>
   )
}

export default Home