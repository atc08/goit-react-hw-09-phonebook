import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, getLoading } from '../redux/phonebook';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import s from './ViewsStyles.module.scss';

//done

function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.wrapper}>
        {isLoadingContacts && <h1>LOADING...</h1>}
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default ContactsView;
