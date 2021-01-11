import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    
    const {contacts, filtered} = contactContext;

    const showContacts = filtered ? filtered : contacts;
    if(!filtered && contacts.length === 0){
        return <h3>Please add a contact</h3>
    }
    return (
        <Fragment>
            {showContacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
        </Fragment>
    )
}

export default Contacts;
