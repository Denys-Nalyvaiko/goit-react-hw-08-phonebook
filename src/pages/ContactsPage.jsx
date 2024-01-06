import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { SectionTitle } from 'css/Containers/Container.styled';
import {
  ContactsContainer,
  ContactsTitle,
} from 'css/Containers/ContactsContainer.styled';

const ContactsPage = () => (
  <ContactsContainer>
    <div>
      <SectionTitle>Phonebook</SectionTitle>
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
