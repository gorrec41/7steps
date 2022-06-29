import st from './btn.module.scss'


export type propsbtn={
    title:string
    linkbtn:string
}
function Button(propsBtn:propsbtn) {

    return(
            <a className={st.wrapbtn} href={propsBtn.linkbtn}>{propsBtn.title}</a>
    )


}
export default  Button;