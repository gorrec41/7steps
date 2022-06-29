import st from './Rates.module.scss'
import Rate from './Rate/Rate';


function Rates() {

    return (
        <section className={st.rates} id='rate'>
            <h2 className={st.ratesTitle}>
                Выберите удобный формат обучения
            </h2>
            <div className='container'>
                    <div className={st.wraprates} >
                        <Rate ratest='rate1'/>
                        <Rate ratest='rate2'/>
                        <Rate ratest='rate3'/>
                    </div>
            </div>
        </section>
    )}
export default Rates;