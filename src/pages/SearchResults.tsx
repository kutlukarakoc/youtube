import '../styles/searchResults.scss'

const SearchResults: React.FC = () => {
    return (
        <div className='search-results'>
            <div className='sr__content'>
                <a href="#" className='sr__content-thumbnail'>
                    {/* <img src="" alt="youtube" className='sr__content-thumbnail__img' /> */}
                    <div style={{width: '100%', height: '100%', backgroundColor:'grey', borderRadius:'1rem'}}></div>
                </a>
                <div className='sr__content-texts'>
                    <div className='sr__content-meta'>
                        <h3 className='sr__content-title'>Naruto Shippuden - Normies React to every OP</h3>
                        <div className='sr__content-metadata'>
                            <div className='sr__content-views'>7,4 B views</div>
                            <div className='sr__content-divider'>.</div>
                            <div className='sr__content-date'>3 hours ago</div>
                        </div>
                    </div>
                    <div className='sr__content-channel'>
                        <div className='sr__content-channel__icon'></div>
                        <div className='sr__content-channel__name'>The Normies</div>
                    </div>
                    <div className='sr__content-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus veritatis facere temporibus ad laborum impedit quos cupiditate blanditiis autem voluptate excepturi illum itaque dolorem est quam, ducimus quasi voluptates.</div>
                    <div className='sr__content-badge'>New</div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults