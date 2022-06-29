import style from './headcount.module.scss'
import Button from '../../button/button'
import img from './DSC04455.png'
import imager from './Chakraserpent.svg_.png'
function Headcount() {
    return(
        <div className={style.headcount}>
            <div className={style.headcountWrap}>
                <h1 className={style.headcountWrapTitle}>7 ШАГОВ К ПРОБУЖДЕНИЮ</h1>
                <p className={style.headcountWrapArtical}>Любое состояние чакр можно улучшить!
                    Ты тоже можешь это сделать.</p>
                <Button title="записаться" linkbtn="#rate"/>
            </div>

            <img className={style.headcountImg} src={img} alt="преподаватель"/>
            <div className={style.headcountWrapImager}>
                <img className={style.headcount} src={imager} alt="чакры"/>
            </div>
            <link href='https://shkolaneo.ru/page177'/>

        </div>

        )

}
export default  Headcount;