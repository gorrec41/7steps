import st from './сhanges.module.scss'
import {v1} from 'uuid';



function Сhange() {
    const chang=[
        {title: '- избавление от блоков, обид и страхов'},
        {title: '- освобождение от негативных эмоций и убеждений'},
        {title: '- гармонизация работы каждой чакры'},
        {title: '- омоложение клеток тела и улучшение состояния кожи'},
        {title: '- увеличение сексуальности и привлекательности'},
        {title: '- развитие ясновидения и экстрасенсорики'},
        {title: '- улучшение финансового благополучия'},
        {title: '- повышение вибраций энергетических тел'},
        {title: '- мощный вертикальный толчок в духовном развитии'},
    ]
    const ch=chang.map((m:{title:string})=>{

        return(
                <li key={v1()} className={st.changeItem}>{m.title}</li>
        )

    })

return(
    <ul className={st.change}>
        {ch}
    </ul>
    )


}
export default Сhange;