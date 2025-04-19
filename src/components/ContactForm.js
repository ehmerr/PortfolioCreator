import React from "react";

function ContactForm({ contact, setContact }) {
  return (
    <div>
      <h3>Contact Info</h3>
      <input
        type="email"
        placeholder="Email"
        value={contact.email || ''}
        onChange={e => setContact({ ...contact, email: e.target.value })}
        style={{ marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="LinkedIn URL"
        value={contact.linkedin || ''}
        onChange={e => setContact({ ...contact, linkedin: e.target.value })}
        style={{ marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Website (optional)"
        value={contact.website || ''}
        onChange={e => setContact({ ...contact, website: e.target.value })}
      />
    </div>
  );
}

export default ContactForm;
