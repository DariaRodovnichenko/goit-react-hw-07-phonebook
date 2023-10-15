import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainContainer, SubTitle, Title } from './App.styled';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
    return (
    <MainContainer>
      <Title>Phonebook</Title>
      <AddContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </MainContainer>
  );
};

export default App;