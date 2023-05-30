import React, { useState } from 'react';
import styles from './contactForm.module.css';

export default function contactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className={styles.formBox}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='name'>Name:</label>
        <input 
          className={styles.name}
          type='text' 
          id='name' 
          name='name' 
          value={form.name} 
          onChange={handleChange} 
          placeholder='First Name / Last Name'
          required
        />
        <label className={styles.label} htmlFor='email'>e-mail:</label>
        <input 
          className={styles.email}
          type='email' 
          id='email' 
          name='email' 
          value={form.email} 
          onChange={handleChange} 
          placeholder='Please enter a valid email address'
          required
        />
        <label className={styles.label} htmlFor='message'>Message:</label>
        <textarea 
          className={styles.message}
          type='text' 
          id='message' 
          name='message' 
          value={form.message} 
          onChange={handleChange} 
          placeholder='Type here...'
          required
          maxlength='900'
        />
        <button className={styles.submit}>submit</button>
      </form>
    </div>
  );
}

