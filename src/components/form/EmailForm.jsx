import { useState } from 'react';
import styles from './EmailForm.module.css';
import SubmitEmailButton from './SubmitEmailButton';
import emailjs from '@emailjs/browser'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

function EmailForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || message === '') {
      alert('Preencha todos os campos.')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('gmailMessage', 'templateMessage', templateParams, '_xYbalUia0KH4_hsN')
    .then((resp) => {
      console.log('EMAIL ENVIADO', resp.status, resp.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERRO', err)
    })

  }

  return (
    <div className={styles.emailForm_container}>
      <h1 className={styles.emailForm_title}>Contate-nos</h1>
      <div className={styles.emailForm_info}>
        <p>Preencha o formulário abaixo, dando um</p>
        <p>feedback de sua experiência no nosso site!</p>
      </div>

      <form className={styles.emailForm_form} onSubmit={sendEmail}>
        <input 
          className={styles.emailForm_input}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className={styles.emailForm_input}
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className={styles.emailForm_textarea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <SubmitEmailButton text='Enviar email'/>
      </form>
      <div className={styles.contact_infos}>
      <div className={styles.contact_way}>
        <BsFillTelephoneFill className={styles.contact_icon} />
        <span>(33) 98404 8940</span>
      </div>
      <div className={styles.contact_way}>
        <MdEmail className={styles.contact_icon} />
        <span>suportecosts@gmail.com</span>
      </div>
    </div>
    </div>
  );
}

export default EmailForm;