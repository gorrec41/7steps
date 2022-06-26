import st from './Selrctorimg.module.scss'
import img1 from './images/im1.jpg'
import img2 from './images/im2.jpg'
import img3 from './images/im3.jpg'
import img4 from './images/im4.jpg'
import img5 from './images/im5.jpg'
import img6 from './images/im6.jpg'
interface Props {
    id: string;
}

export const SelrctorImg = ({ id }: Props)=>{
    switch (id) {
        case 'img1':
            return (
                <img className={st.selectImg} src={img1} alt='отзыв 1'/>
            )
        case 'img2':
            return (
                <img className={st.selectImg} src={img2} alt='отзыв 2'/>
            )
        case 'img3':
            return (
                <img className={st.selectImg} src={img3} alt='отзыв 3'/>
            )
        case 'img4':
            return (
                <img className={st.selectImg} src={img4} alt='отзыв 4'/>
            )
        case 'img5':
            return (
                <img className={st.selectImg} src={img5} alt='отзыв 5'/>

            )
        case 'img6':
            return (
                <img className={st.selectImg} src={img6} alt='отзыв 6'/>
            )
        default:
            return(
                <>
                </>
            );
    }


}

