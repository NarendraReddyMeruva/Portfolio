import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import api from '../../api';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch contacts from the server
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(api + '/contact');
        setContacts(response.data);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(api+`/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id)); // Remove contact from the list after deleting
      alert('Contact deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Error deleting contact');
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-error">
        <i className="fas fa-exclamation-triangle"></i>
        <p>Error loading contacts: {error}</p>
      </div>
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div id="admin" className="admin-page">
      <div className="admin-container">
        <h1 className="admin-title">Contact Submissions</h1>
        
        <div className="admin-controls">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <button className="admin-btn refresh-btn" onClick={() => window.location.reload()}>
            <i className="fas fa-sync-alt"></i> Refresh
          </button>
        </div>
        
        <div className="contacts-table-container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.firstName} {contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobileNumber}</td>
                  <td className="message-cell">{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="action-btn view-btn">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="action-btn delete-btn" onClick={() => handleDelete(contact._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <div className="table-info">
            Showing {filteredContacts.length} of {contacts.length} contacts
          </div>
          <div className="pagination">
            <button className="pagination-btn disabled">
              <i className="fas fa-chevron-left"></i>
            </button>
            <span className="page-number">1</span>
            <button className="pagination-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
