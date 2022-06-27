import st from './Rate.module.scss'
import Button from '../../button/button';

function Rate() {
    return (
        <div className={st.rate}>
            <h3>"Групповые активации"</h3>
            <ul className={st.rateList}>
                <li className={st.rateListItem} >Курс идет 7 недель, но доступ вам открыт на 10 недель.</li>
                <li className={st.rateListItem}>Активация чакр проходит в группе.</li>
                <li className={st.rateListItem}>Домашние задания по каждому уроку </li>
                <li className={st.rateListItem}>Обратная связь в общем чате.</li>
            </ul>
           <Button title="Оплатить" linkbtn="#!"/>
        </div>
    )
}
export default Rate;