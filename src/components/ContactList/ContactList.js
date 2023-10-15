import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import { deleteContact, fetchContacts } from 'redux/operations';
import { ContactInfo, ContactItem, DeleteBtn, ListOfContacts } from './ContactList.styled';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

const handleDelete = id => {
  dispatch(deleteContact(id));
};

  return (
    <ListOfContacts>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <p>The Phonebook is empty. Add your first contact. 🫤</p>
      ) : (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactInfo>{name + ': ' + phone}</ContactInfo>
            <DeleteBtn
              type="button"
              name="deleteBtn"
              onClick={() => handleDelete(id)}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        ))
      )}
    </ListOfContacts>
  );
}

export default ContactList;
