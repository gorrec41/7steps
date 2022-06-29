import st from './textRevies.module.scss'
import {SelrctorImg} from '../selectorImg/Selectorimg';
import {v1} from 'uuid';
import {HomeSvgSelector} from '../../selectorsvg/Selector';

function TextReviews() {
        const listItem=[
            {k:v1(),teximgas:'img1',id:'img1'},
            {k:v1(),teximgas:'img2',id:'img2'},
            {k:v1(),teximgas:'img3',id:'img3'},
            {k:v1(),teximgas:'img4',id:'img4'},
            {k:v1(),teximgas:'img5',id:'img5'},
            {k:v1(),teximgas:'img6',id:'img6'},
        ]
        const texList=listItem.map((m:{k:string,teximgas:string,id:string})=>{
            function fff(idimg:string){
                const addimg: HTMLElement | null =document.getElementById(`${idimg}`)
                const remimg =document.querySelectorAll(`.${st.reviewsTextItem}`)
                remimg.forEach((rem)=>{
                    rem.classList.remove(`${st.reviewsTextItemActivimg}`)
                })
                if(addimg)addimg.classList.add(`${st.reviewsTextItemActivimg}`)
            }
            return(
                    <li key={m.k} className={st.reviewsTextItem} id={m.id}  onClick={()=>fff(m.id)}>
                        <SelrctorImg id={m.teximgas}/>
                    </li>
            )
        })
    return (
        <>
            <ul className={st.reviewsText}>
                {texList}
            </ul>
            <div className={st.reviewsTextSvg}>
                <HomeSvgSelector id='svg2'/>
            </div>

        </>

    )
}
export default TextReviews;