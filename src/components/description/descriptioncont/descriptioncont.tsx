import React, {useState, useEffect} from "react"
import {v1} from 'uuid'
import arrowleft from './arrLeft.svg'
import arrowright from './arrRight.svg'
import st from './descriptioncont.module.scss'

type af={
    activeIndex:number
}

function Descriptioncont() {

    const desc=[
        {id:v1(),title: 'Учение об энергиях зародилось очень давно, но научные исследования этого вопроса сравнительно молодые. В 1949 году Семен Кирлиан открыл наличие энергетического поля человека, что научно доказало существования ауры. '},
        {id:v1(),title: 'После этого научных трудов с каждым годом становилось все больше и больше. Именно поэтому энергетический мир и духовные практики сейчас столь популярны.'},
        {id:v1(),title: ' Ведь научный мир признал, что внешние и внутренние факторы влияют на энергетическое поле человека, и за здоровьем ауры нужно следить так же, как за здоровьем тела.'},
        {id:v1(),title: 'Мой курс включает в себя не только опыт великих предков, но и научные современные изыскания, а также психологические методы. '},
        {id:v1(),title: ' Я старалась его сделать максимально ёмким и практичным, чтобы вы могли с легкостью применять эти техники в жизни.'},
        {id:v1(),title: 'Пройдя этот курс, вы поставите своё самосовершенствование на "автоматизм" и забудете о прочих практиках.'},
        ]

    const [count, setCount] = useState(0);



       useEffect(() => {

       })

    const conMax=count===desc.length-1?0:count+1
    const conMin=count===0?desc.length-1:count-1

    return (
        <div className={st.descriptioncont}>
            <button className={st.descriptioncontPrev} onClick={() => setCount(conMin)}>
                < img src={arrowleft} className={st.PrevImg}/>
            </button>
            <p className={st.descriptioncontActive}
               key={desc[count].id}>
                {desc[count].title}
            </p>
            <button className={st.descriptioncontNext} onClick={() => setCount(conMax)}>
                < img src={arrowright} className={st.PrevImg}/>
            </button>
        </div>
    )


}
export default Descriptioncont;