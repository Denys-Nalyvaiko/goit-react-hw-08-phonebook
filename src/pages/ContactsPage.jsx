import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'css/Containers/Container.styled';
import {
  ContactsContainer,
  ContactsTitle,
} from 'css/Containers/ContactsContainer.styled';

const ContactsPage = () => (
  <ContactsContainer>
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
    </div>
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </div>
  </ContactsContainer>
);

export default ContactsPage;
