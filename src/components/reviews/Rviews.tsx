import st from './Reviews.module.scss'
import VideoRviews from './videoreviews/videoRevies';
import TextReviews from './textreviews/textRevies';
const paragr = {
    fontSize: '1.5rem',
    color:'#fff',
    // textAlign:'center',
    display:'flex',
    justifyContent:'center',
    marginBottom: '3rem'
}

function Rviews() {
    return (
        <section className={st.reviews} id='reviews'>
            <div className='container'>
                <div className={st.reviewsWrap}>

                    <div className={st.reviewsWrapUp}>
                        <h2 className={st.reviewsTitle}>
                            Что говорят мои ученики:
                        </h2>
                        <VideoRviews/>
                    </div>
                    <div className={st.reviewsWrapSliderUp}>
                        <h2 className={st.reviewsTitle}>
                            Что пишут мои ученики:
                        </h2>
                        <p style={paragr}>(для увеличения нажми на картинку ниже)</p>
                        <TextReviews/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Rviews;