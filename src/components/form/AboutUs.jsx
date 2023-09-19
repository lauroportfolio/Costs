import styles from './AboutUs.module.css'
import { FaMoneyBill } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import { BiSolidHappyBeaming } from 'react-icons/bi'
import money from '../../img/money.svg'

function AboutUs() {
    return (
        <div className={styles.about_container}>
            <h1>Quem somos?</h1>
            <p>Somos uma empresa com foco na gestão do seu capital para</p>
            <p>realizar o seu sonho de finalmente tirar aquele projeto, aquela</p>
            <p>ideia do papel. Nossa equipe está no mercado a quase 10 dias,</p>
            <p>fazendo a diferença para as pessoas, com nossa dedicação e</p>
            <p>empenho, profissionais capacitados e nossa vontade de mudar</p>
            <p>o mercado, fazendo projetos como o seu se tornarem realidade!</p>
            <br></br>
            <div className={styles.about_description}>
                <p>Nosso gerenciador de projetos tem como principal objetivo:</p>
            </div>
            <div className={styles.about_way}>
                <AiFillProject className={styles.about_icon} />
                <span>Ajudar na gestão de seus projetos</span>
            </div>
            <div className={styles.about_way}>
                <FaMoneyBill className={styles.about_icon} />
                <span>Auxiliar no controle do seu dinheiro</span>
            </div>
            <div className={styles.about_way}>
                <BiSolidHappyBeaming className={styles.about_icon} />
                <span>Solucionar seus problemas de organização</span>
            </div>
            <div className={styles.about_img}>
                <img src={money} alt="Investindo seu dinheiro" />
            </div>
        </div>
    )
}

export default AboutUs