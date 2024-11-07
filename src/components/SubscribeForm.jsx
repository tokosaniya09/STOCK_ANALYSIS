import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SubscribeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_67gl88d', 'template_vd8cp9a', form.current, {
        publicKey: '-XnWWF1jy8iK7L6v4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <br/>
      <br/>
      <input type="email" name="user_email" />
      <br/>
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default SubscribeForm;