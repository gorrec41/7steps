import st from './Article.module.scss'
import vide from '../video/3192378675_out1.mp4'
export default function Article() {


    return(
        <section className={st.article}>
            <div className={st.articleVideowrap}>
                <video className={st.articleVideowrapVid} id="background-video" loop autoPlay muted>
                    <source src={vide} type="video/mp4" />
                </video>
            </div>
            <div className='container'>
                <h2 className={st.articleTitle}>
                    Чем быстрее вы начнёте меняться, тем быстрее изменитесь!
                </h2>
                <p className={st.articleText}>Если вы читаете эти строки, значит хотите измениться и ваше время пришло. Так чего вы ждёте? Действовать нужно прямо сейчас, ведь только этот момент реален. Никакое “потом” так никогда не настанет, оно так и будет “потом”.</p>
                <p className={st.articleText}>Наступило время Новых Энергий! Время, когда старое рушится и приходит новая Сила. И важно суметь обуздать эту Силу, подчинить её своим желаниям и направить на достижение заветных целей.</p>
                <p className={st.articleText}>Записывайтесь на курс прямо сейчас, если хотите обрести счастье не когда-нибудь “потом”!</p>
            </div>
        </section>
    )
}