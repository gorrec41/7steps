import st from './Training.module.scss'
import Trainingcont from './trainingcontent/Trainingcont';
import Button from '../button/button';


function Training () {

    return(
        <section className={st.training}>
            <h2 className={st.trainingTitle}>
                КАК ПРОХОДИТ ОБУЧЕНИЕ
            </h2>
            <div className='container'>
                <Trainingcont/>
            </div>
            <div className={st.trainingBtn}>
                <Button/>
            </div>

        </section>
    )
}
export default  Training ;