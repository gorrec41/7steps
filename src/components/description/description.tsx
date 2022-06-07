import st from './description.module.scss'
import Descriptioncont from './descriptioncont/descriptioncont'

function Description() {
    return (
        <section className={st.description}>
            <div className='container'>
                <Descriptioncont/>
            </div>

        </section>
    )
}
export default Description;