import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mm8gsw8', 'template_z722gse', form.current, {
        publicKey: 'hfkQFDAgTrDym5cHz',
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
    <form ref={form} onSubmit={sendEmail} className='flexCol gap-[17px]'>
      <div className='flexCol gap-[10px]'>
      <label htmlFor='number' className='paragraphFont text-[20px]'>ტელეფონი</label>
      <input type="text" name='number' placeholder="მიუთითეთ ნომერი..." className='inputStyle' />
      </div>
      <div className='flexCol gap-[10px]'>
      <label htmlFor='email' className='paragraphFont text-[20px]'>ელ.ფოსტა</label>
      <input type="email" name='email' placeholder="მიუთითეთ ელ-ფოსტა..." />
      </div>
      <div className='flexCol gap-[10px] mb-[27px]'>
      <label htmlFor='message' className='paragraphFont text-[20px]'>მესიჯი</label>
      <textarea name="message" placeholder='დაწერეთ მესიჯი...'/>
      </div>
      <input type="submit" value="გაგზავნა"  className='btn'/>
    </form>
  );
};

export default Email