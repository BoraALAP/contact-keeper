import React, { useContext } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import contactContext from "../../context/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered } = useContext(contactContext);
  
  const listed = filtered !== null ? filtered : contacts;

  return (
    <>
    <TransitionGroup>
      {contacts.length === 0 ? (<h4>Please add a contact</h4>) : (
        listed.map(contact => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
        <ContactItem  info={contact} />
        </CSSTransition>
      )))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
