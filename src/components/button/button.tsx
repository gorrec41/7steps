import st from './btn.module.scss'


export type propsbtn={
    title:string
    linkbtn:string
}
<<<<<<< HEAD
function Button(propsBtn:propsbtn) {

    return(
            <a className={st.wrapbtn} href={propsBtn.linkbtn}>{propsBtn.title}</a>
    )

=======
function Button( propsBtn:propsbtn) {
    //   propsBtn:propsbtn
       
   return(
    
           <div className={st.btn} >
               <a className={st.btnLlink} href={propsBtn.linkbtn}>hh</a>
        </div>
  
     
    )
        
>>>>>>> 01a5ab103ecc68d2aed5001cd2ea98d25e8d23af

}
export default  Button;