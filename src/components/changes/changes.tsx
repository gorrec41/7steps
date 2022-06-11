import st from './сhanges.module.scss'
import Сhange from './change/change';
import vide from '../video/3192378675_out1.mp4';




function Сhanges() {

    return (
        <section className={st.changes}>
            <div className={st.changesVideowrap}>
                <video className={st.changesVideowrapVid} id="background-video" loop autoPlay muted>
                    <source src={vide} type="video/mp4" />
                </video>
            </div>
            <div className='container'>
                <h2 className={st.changesTitle}>
                    ИЗМЕНЕНИЯ, КОТОРЫЕ НАЧНУТ ПРОИСХОДИТЬ В ВАС С ПЕРВОГО ЖЕ ДНЯ КУРСА:
                </h2>
                <Сhange/>
            </div>
        </section>
    )

}
export default Сhanges;