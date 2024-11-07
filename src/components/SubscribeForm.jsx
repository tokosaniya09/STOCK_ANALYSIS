// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const SubscribeForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_67gl88d', 'template_vd8cp9a', form.current, {
//         publicKey: '-XnWWF1jy8iK7L6v4',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <div className="f">
//       <form ref={form} onSubmit={sendEmail}>
//       <label>Email</label>
//       <br/>
//       <br/>
//       <input type="email" name="user_email" />
//       <br/>
//       <br/>
//       <div className="send">
//           <input type="submit" value="Subscribe" />
//       </div>
//     </form>
//     </div>
//   );
// };

// export default SubscribeForm;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SubscribeForm = () => {
  const form = useRef();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_67gl88d', 'template_vd8cp9a', form.current, {
        publicKey: '-XnWWF1jy8iK7L6v4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubscribed(true);
          setEmail(""); // Clear the input
          
          // Hide success message after 1 second
          setTimeout(() => setIsSubscribed(false), 1000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="f">
      <form ref={form} onSubmit={sendEmail}>
        <label>Email</label>
        <br />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <div className="send">
          <input type="submit" value="Subscribe" />
        </div>
      </form>
      {isSubscribed && (
        <p style={{ color: "green", marginTop: "10px" }}>Subscribed successfully!</p>
      )}
    </div>
  );
};

export default SubscribeForm;
