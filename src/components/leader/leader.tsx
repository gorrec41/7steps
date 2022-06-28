import st from './leader.module.scss'
import imger from './DSC04646.jpg'
import {v1} from 'uuid'
import Button from '../button/button';
import { Route } from 'react-router-dom';

function Lieader() {
    const listItem=[
        {id:v1(),title:'- Энергетический психотерапевт' },
        {id:v1(),title:'- Магистр сакральной энергии Саху' },
        {id:v1(),title:'- 20 лет работаю с энергиями' },
        {id:v1(),title:'- 10 лет работаю с чакрами' },
        {id:v1(),title:'- 5 лет обучаю людей' },

    ]
    const texList=listItem.map((m:{id:string,title:string})=>{
            return(
                <li key={m.id} className={st.lieaderContentListItem}>{m.title}</li>
                )

        })


    return (
        <section className={st.lieader}>
            <div className='container'>
                <div className={st.lieaderContent}>
                    <div className={st.lieaderContentWraper}>
                        <img src={imger} className={st.lieaderContentWraperImg} alt="mirra"/>
                    </div>
                    <h3 className={st.lieaderContentText}>Мирра</h3>
                    <ul  className={st.lieaderContentList}>
                        {texList}
                    </ul>
                </div>
               
                <div className={st.lieaderBtn}>
                    <Button title="Записаться" linkbtn='#rate'/>
                </div>

            </div>
        </section>
    )
}
export default Lieader;