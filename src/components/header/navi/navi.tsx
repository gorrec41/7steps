import st from './navi.module.scss'
import {v1} from 'uuid'



function Navi() {

    const nav=[
        {title: 'ЦЕНТР РАЗВИТИЯ “NEO”',link:'/'},
        {title: 'НАСТАВНИК',link:'#liader'},
        {title: 'ПРЕИМУЩЕСТВА КУРСА',link:'#advans'},
        {title: 'КАК ПРОХОДИТ ОБУЧЕНИЕ',link:'#training'},
        {title: 'ОТЗЫВЫ',link:'#reviews'},
        {title: 'КОНТАКТЫ',link:'#footer'}]

    type navyType={
        title:string,
        link:string
    }
    const listItem=nav.map((m:navyType)=>{

        return(
            <li key={v1()} className={st.nav_item}>
                <a className={st.nav_itemLink} href={m.link}>{m.title}</a>
                </li>
            )

    })
    return (

        <nav className={st.nav}>
            <ul className={st.nav_list}>
                {listItem}
            </ul>
            
        </nav>
    )
}
export default Navi;