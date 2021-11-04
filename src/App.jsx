import { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter'
import ContactList from './components/ContactList'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }
    const checkedName = this.state.contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase());
    checkedName ? alert(`${name} is already in contacts!`) : this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }))
  };

  removeContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts].filter(item => item.id !== id)
      }
    })
  }

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter inputChange={this.handleInputChange} filter={filter} />
        <ContactList contactsData={this.filterContact()} onRemoveContact={this.removeContact} />
      </>
    )
  }
}
export default App;
