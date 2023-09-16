import React from 'react';
function ContactForm(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);
    props.onSubmit();
    return;
  }

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      <div className='contactForm__field'>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ваше имя'
        />
      </div>
      <div className='contactForm__field'>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
      </div>
      <div className='contactForm__field'>
        <label htmlFor="message">Message</label>
        <textarea
          rows='10'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Ваше предложение'
        />
      </div>
      <button className='button' type='submit'>Отправить</button>
    </form>
  );
}
export default ContactForm;