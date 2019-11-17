import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    contactContext
  );

  const listed = filtered !== null ? filtered : contacts;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts === null && !loading ){
    return <h4>Please add a contact</h4>
  }

  return (
    <>
      { (contacts !== null && !loading) ? (
        <TransitionGroup>
            {listed.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem info={contact} />
              </CSSTransition>
            ))}
            </TransitionGroup>
          ) : <Spinner /> }
    </>
  );
};

export default Contacts;
