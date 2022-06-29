import st from './Rate.module.scss'
import Button from '../../button/button';
export type rateType={ratest:string}
function Rate(props:rateType) {
    let title=''
    let prices=''
    let tex1=''
    let tex2=''
    let tex3=''
    let tex4=''
    let tex5=''
    let linkrate=''
    if(props.ratest==='rate1'){
        title="Групповые активации"
        prices='7000 pуб.'
        tex1='Курс идет 7 недель. Доступ вам открыт на 10 недель.'
        tex2='Активация чакр проходит в группе.'
        tex3='Домашние задания по каждому уроку.'
        tex4='Обратная связь в общем чате.'
        tex5=''
        linkrate='https://shkolaneo.ru/page177'
        }else if(props.ratest==='rate2'){
        title="Индивидуальное обучение"
        prices='12000 pуб.'
        tex1='Курс идет 7 недель. Доступ вам открыт на 10 недель.'
        tex2='Активация чакр индивидуальная.'
        tex3='Домашние задания по каждому уроку.'
        tex4='Обратная связь в личной переписке.'
        tex5=''
        linkrate='https://shkolaneo.ru/page178'
    }else if(props.ratest==='rate3'){
        title="Углубленное обучение"
        prices='10000 pуб.'
        tex1='Курс идет 7 недель. Доступ вам открыт на 10 недель.'
        tex2='Продолжение базового курса'
        tex3='Углубленное изучение чакр'
        tex4='Пропись аспектов чакр'
        tex5='Больше практик'
        linkrate='https://shkolaneo.ru/page185'}
    return (
        <div className={st.rate}>
            <div className={st.ratewrap}>
                <h3 className={st.ratewrapTitle}>{title}</h3>
                <h4 className={st.ratewrapPrice}>{prices}</h4>
            </div>

            <ul className={st.rateList}>
                <li className={st.rateListItem} >{tex1}</li>
                <li className={st.rateListItem}>{tex2}</li>
                <li className={st.rateListItem}>{tex3} </li>
                <li className={st.rateListItem}>{tex4}</li>
                <li className={st.rateListItem}>{tex5}</li>
            </ul>
                <Button  title="Оплатить" linkbtn={linkrate}/>
        </div>
    )
}
export default Rate;