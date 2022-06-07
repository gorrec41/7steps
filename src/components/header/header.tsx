import st from './header.module.scss'
import Navi from'./navi/navi'
import Headcount from './headercontent/headcount'

function Header() {
    return (
        <header className={st.header}>
            <div className='container'>
                <Navi/>
                <Headcount/>
            </div>
        </header>
    )
}
export default Header;