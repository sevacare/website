import React, { useState, useEffect } from 'react';

function ValidateEmail() {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === '') {
      setValidationError('Oops! Please add your email.');
    }  else {
      setValidationError(isValidEmail);
      alert('Thank You!');
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setValidationError('Oops! That doesn’t look like an email address.');
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <form style={{display: 'flex', alignItems:'center', position:'relative', gap: '20px', flexDirection: isMobile ? 'column' : 'row' }} onSubmit={handleSubmit}>
        <div
          style={{display: 'flex', gap:'5px' , flexDirection: 'column'}}>
          <input
            type="email"
            value={email}
            placeholder='Email Adress'
            onChange={handleChange}
            onInvalid={handleInvalid}
            style={validationError ? {borderColor: '#FF2965' } : null}
          />
          {validationError && (
          <p style={{ position: 'absolute', left: '10px', top: isMobile ? '60px' : '90px', color: '#FF2965', margin: '0px', textAlign: 'center' }}>{validationError}</p>
        )}
        </div>
        <div
          style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <button className='submit-btn' type="submit">Get notified</button>
        </div>
      </form>
    </div>
  );
}

  export default ValidateEmail
