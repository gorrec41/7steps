import ReactPlayer from 'react-player'
import st from './videoRevies.module.scss'
import {v1} from 'uuid';



function VideoRviews() {

    const video=[
        {link: 'Bl9aXZvfjoM'},
        {link: 'VMaRmxChMjM'},
        {link: 'NW2LKmle4i4'},
        {link: '4sddVWGsV_8'},
        {link: 'Cz05z7tjXkg'},
     ]
    const listItem=video.map((m:{link:string})=>{

        return(
            <li key={v1()} className={st.videoReviewsListItem}>
                <ReactPlayer
                className='react-player'
                url={`https://www.youtube.com/watch?v=${m.link}`}
                width='100%' height='100%'
                controls={true}
            /></li>
        )

    })
    return (
            <div className={st.videoReviews}>
                <ul className={st.videoReviewsList}>
                    {listItem}
                </ul>

            </div>)
}
export default VideoRviews;