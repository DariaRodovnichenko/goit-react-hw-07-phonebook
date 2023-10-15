import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import {
  ContactInfo,
  ContactItem,
  DeleteBtn,
  ListOfContacts,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name + ': ' + number}</ContactInfo>
          <DeleteBtn type="button" name="deleteBtn" onClick={() =>handleDelete(id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
