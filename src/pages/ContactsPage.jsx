import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsTitle, Title } from 'components/Container.styled';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => (
  <>
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
    </div>
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </div>
  </>
);

export default ContactsPage;
