import '../styles/searchResults.scss'
import { useAppSelector } from '../store/hooks'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { searchedVideos } from '../types/searchedVideos'
import { formatPublishDate } from '../hooks/formatPublishDate'

const queryClient = new QueryClient()

const SearchContents: React.FC = () => {
    const { search } = useAppSelector(state => state.search)
    const { isLoading, error, data } = useQuery<searchedVideos, Error>('resultData', () => (
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=${search}&maxResults=20&q=surfing&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(res => res.json())
    ))

    if (isLoading) return <div>Loading</div>
    if (error) return <div>error</div>

    return (
        <>
            {
                data?.items.map(item => (
                    <div className='search-results' key={item.id.videoId}>
                        <div className='sr__content'>
                            <a href="#" className='sr__content-thumbnail'>
                                <img src={item.snippet.thumbnails.high.url} alt="youtube" className='sr__content-thumbnail__img' loading='lazy'/>

                            </a>
                            <div className='sr__content-texts'>
                                <div className='sr__content-meta'>
                                    <h3 className='sr__content-title'>{item.snippet.title}</h3>
                                    <div className='sr__content-metadata'>
                                        <div className='sr__content-date'>{formatPublishDate(item.snippet.publishedAt)}</div>
                                    </div>
                                </div>
                                <div className='sr__content-channel'>
                                    <div className='sr__content-channel__icon'></div>
                                    <div className='sr__content-channel__name'>{item.snippet.channelTitle}</div>
                                </div>
                                <div className='sr__content-description'>{item.snippet.description}</div>
                                <div className='sr__content-badge'>New</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const SearchResults: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SearchContents />
        </QueryClientProvider>
    )
}

export default SearchResults