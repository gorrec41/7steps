import st from './Footer.module.scss'
import {v1} from 'uuid';

export default function Footer() {
    const lefttext =[
        {id:v1(),tekst:'Москва',link:''},
        {id:v1(),tekst:'WhatsApp / Viber / Telegram:',link:''},
        {id:v1(),tekst:'+7 (999) 170-11-30',link:'tel:+7991701130'},
        {id:v1(),tekst:'info@shkolaneo.ru',link:'mailto:info@shkolaneo.ru'},
        {id:v1(),tekst:'© 2022 shkolaneo.ru',link:''},
    ]
    const righttext =[
        {id:v1(),tekst:'Публичная оферта',link:'#!'},
        {id:v1(),tekst:'Политика конфиденциальности',link:'#!'},
        {id:v1(),tekst:'Согласие на обработку персональных данных',link:'#!'},
    ]
    type TextType={
        id:string,
        tekst:string,
        link:string
    }
   const itemleft= lefttext.map((m:TextType) => {
         if(m.link.length!==0){
             return(
                 <li key={m.id} className={st.footerWrapListItem}>
                     <a className={st.footerWrapListItemLink} href={m.link}>{m.tekst}</a>
                 </li>
             )
         }else{
             return(
                 <li key={m.id} className={st.footerWrapListItem}>
                     {m.tekst}
                 </li>
             )
         }
       })
    const itemright=righttext.map((m:TextType)=>{
        return(
            <li key={m.id} className={st.footerWrapListItem}>
                <a className={st.footerWrapListItemLink} href={m.link}>{m.tekst}</a>
            </li>
        )
    })
    return(
        <footer className={st.footer} id='footer'>
            <div className='container'>
                <div className={st.footerWrap}>
                    <ul className={st.footerWrapList}>
                        {itemleft}
                    </ul>
                    <ul className={st.footerWrapList}>
                        {itemright}
                    </ul>
                </div>
            </div>
            <p className={st.footeremail}>eighth.district@ya.ru</p>
        </footer>
    )

}