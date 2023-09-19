import styles from './SubmitEmailButton.module.css'

function SubmitEmailButton({ text }) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitEmailButton