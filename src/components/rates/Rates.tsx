import st from './Rates.module.scss'
import Rate from './Rate/Rate';

// const rateItem =[
//     {
//         rate: '"Групповые активации"',
//         arct1: 'Курс идет 7 недель, но доступ вам открыт на 10 недель.',
//         arct2: 'Активация чакр проходит в группе.',
//         arct3: 'Домашние задания по каждому уроку + проверка Мастером.',
//         arct4: 'Обратная связь в общем чате.',
//         price: '7000 руб'
//     },
//     {
//         rate:'"Индивидуальное обучение" ',
//         arct1:'Курс идет 7 недель, но доступ вам открыт на 10 недель.',
//         arct2:'Активация чакр проходит в группе.',
//         arct3:'Домашние задания по каждому уроку + проверка Мастером.',
//         arct4:'Обратная связь в общем чате.',
//         price:'12 000 руб'
//     }
// ]
// type rateType={
//     rate1:string
//     arct1:string
//     arct2:string
//     arct3:string
//     arct4:string
//     price1:string
//     rate2:string
//     arct5:string
//     arct6:string
//     arct7:string
//     arct8:string
//     price2:string
// }
// type typeRAtes={
//     ratee:Array<rateType>
// }
function Rates() {
    return (
        <section className={st.rates}>
            <h2 className={st.ratesTitle}>
                Выберите удобный формат обучения
            </h2>
            <div className='container'>

            </div>
        </section>
    )}
export default Rates;