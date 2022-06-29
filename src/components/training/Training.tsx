import st from './Training.module.scss'
import Trainingcont from './trainingcontent/Trainingcont';
import Button from '../button/button';


function Training () {

    return(
        <section className={st.training} id='training'>
            <h2 className={st.trainingTitle}>
                КАК ПРОХОДИТ ОБУЧЕНИЕ
            </h2>
            <div className='container'>
                <Trainingcont/>
            </div>
            <div className={st.trainingBtn}>
                <Button title="Записаться" linkbtn='#rate'/>
            </div>

        </section>
    )
}
export default  Training ;