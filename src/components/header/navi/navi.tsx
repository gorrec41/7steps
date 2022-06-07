import st from './navi.module.scss'
import {v1} from 'uuid'



function Navi() {

    const nav=[
        {title: 'ЦЕНТР РАЗВИТИЯ “NEO”'},
        {title: 'НАСТАВНИК'},
        {title: 'КАК ПРОХОДИТ ОБУЧЕНИЕ'},
        {title: 'ОТЗЫВЫ'},
        {title: 'НАШИ ПРЕИМУЩЕСТВА'},
        {title: 'КОНТАКТЫ'}]
    const listItem=nav.map((m:{title:string})=>{

        return(
            <li key={v1()} className={st.nav_item}>{m.title}</li>
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