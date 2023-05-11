import React from 'react';

const Contacts = () => {
  const contacts = [
    {
      name: 'John Doe',
      phone: '+123456789',
      email: 'john.doe@example.com'
    },
    {
      name: 'Jane Smith',
      phone: '+987654321',
      email: 'jane.smith@example.com'
    }
  ];

  return (
    <div>
      <h1>Kontaktid</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h3>{contact.name}</h3>
            <p>Telefon: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
