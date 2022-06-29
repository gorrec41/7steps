
import st from './advantages.module.scss'
import {v1} from 'uuid';
import vide from '../video/3192378675_out1.mp4'

import {HomeSvgSelector} from '../selectorsvg/Selector'
function Advantages() {
    const listItem=[
        {id:v1(),title:'Работу с чакрами и изменения вы почувствуете уже на первом уроке',chakr:'svg'},
        {id:v1(),title:'Каждую чакру прокачиваем индивидуально на протяжении одной недели',chakr:'svg1'},
        {id:v1(),title:'Работаем не только на энергетическом, но и на психологическом уровне',chakr:'svg2' },
    ]
    const texList=listItem.map((m:{id:string,title:string,chakr:string})=>{

        return(
            <li key={m.id} className={st.advantagesListItem}>
                <HomeSvgSelector id={m.chakr}/>
                {m.title}
            </li>
        )
    })
    return(
        <section className={st.advantages} id={'advans'}>
            <div className={st.advantagesVideowrap}>
                <video className={st.advantagesVideowrapVid} id="background-video" loop autoPlay muted>
                    <source src={vide} type="video/mp4" />
                </video>
            </div>
            <h2 className={st.advantagesTitle}>преимущества курса</h2>
            <div className='container'>
                <ul className={st.advantagesList}>
                    {texList}
                </ul>
            </div>
        </section>

        )

}
export default  Advantages;