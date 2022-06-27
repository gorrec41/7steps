import st from './btn.module.scss'
import { Link } from 'react-router-dom'

export type propsbtn={
    title:string
    linkbtn:string
}
function Button(propsBtn:propsbtn) {
        function tt(rt:string){
            console.log("ffff")
        }
    return(
        <div>
            <Link className={st.btn} to={propsBtn.linkbtn} onClick={() => {
                tt("rrr")
            }}>
                {propsBtn.title}
            </Link>
        </div>
    )
        // <Link to="/page" onClick={() => alert("boo")}>Clickable Link</Link>

}
export default  Button;