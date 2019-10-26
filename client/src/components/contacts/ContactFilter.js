import React, { useEffect, useRef, useContext } from "react";
import ContactContext from "../../context/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered, contacts } = useContext(ContactContext);
  const text = useRef('')

  const onChange = e => {
    if(text.current.value !== ''){
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if(contacts.length !== 0 && filtered === null) {
      text.current.value = ''
    }
  })

  const clearingFilter = () => {
    clearFilter()
  }

  return (
    <>
    { contacts.length === 0 ? (<div></div>) : (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
      {filtered && (
        <button className="btn btn-light btn-block" onClick={clearingFilter}>
          Clear Filter
        </button>
      )}
    </form>
    )}
    </>
  );
};

export default ContactFilter;
