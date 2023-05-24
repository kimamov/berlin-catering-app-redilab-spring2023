import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input 
        type='text' 
        id='name' 
        name='name' 
        value={form.name} 
        onChange={handleChange} 
        required
      />
      <label htmlFor='email'>e-mail:</label>
      <input 
        type='email' 
        id='email' 
        name='email' 
        value={form.email} 
        onChange={handleChange} 
        required
      />
      <label htmlFor='message'>Message:</label>
      <input 
        type='text' 
        id='message' 
        name='message' 
        value={form.message} 
        onChange={handleChange} 
        required
        maxlength='900'
      />
      <button>submit</button>
    </form>
  );
}

