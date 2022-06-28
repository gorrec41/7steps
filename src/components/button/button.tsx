import st from './btn.module.scss'


export type propsbtn={
    title:string
    linkbtn:string
}
function Button( propsBtn:propsbtn) {
    //   propsBtn:propsbtn
       
   return(
    
           <div className={st.btn} >
               <a className={st.btnLlink} href={propsBtn.linkbtn}>hh</a>
        </div>
  
     
    )
        

}
export default  Button;