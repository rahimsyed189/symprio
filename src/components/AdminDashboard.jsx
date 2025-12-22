import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showTrainingForm, setShowTrainingForm] = useState(false);
  const navigate = useNavigate();
  const { user, logout, token } = useAuth();

  // Event form state
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    type: 'event'
  });

  // Training form state
  const [trainingForm, setTrainingForm] = useState({
    title: '',
    description: '',
    date: '',
    duration: '',
    instructor: '',
    capacity: '50'
  });

  // Fetch events and trainings
  useEffect(() => {
    fetchEvents();
    fetchTrainings();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  const fetchTrainings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/trainings');
      if (response.ok) {
        const data = await response.json();
        setTrainings(data);
      }
    } catch (error) {
      console.error('Failed to fetch trainings:', error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(eventForm)
      });

      if (response.ok) {
        setEventForm({ title: '', description: '', date: '', location: '', type: 'event' });
        setShowEventForm(false);
        fetchEvents();
      } else {
        alert('Failed to add event');
      }
    } catch (error) {
      alert('Error adding event: ' + error.message);
    }
  };

  const handleAddTraining = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(trainingForm)
      });

      if (response.ok) {
        setTrainingForm({ title: '', description: '', date: '', duration: '', instructor: '', capacity: '50' });
        setShowTrainingForm(false);
        fetchTrainings();
      } else {
        alert('Failed to add training');
      }
    } catch (error) {
      alert('Error adding training: ' + error.message);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/events/${eventId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchEvents();
      } else {
        alert('Failed to delete event');
      }
    } catch (error) {
      alert('Error deleting event: ' + error.message);
    }
  };

  const handleDeleteTraining = async (trainingId) => {
    if (!window.confirm('Are you sure you want to delete this training?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/trainings/${trainingId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchTrainings();
      } else {
        alert('Failed to delete training');
      }
    } catch (error) {
      alert('Error deleting training: ' + error.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #00d4ff 0%, #00bfff 100%)',
      padding: '30px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#1f2937' }}>
              Admin Dashboard
            </h1>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Welcome, {user?.name || user?.email}
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              navigate('/admin');
            }}
            style={{
              background: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b91c1c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#dc2626';
            }}
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '30px',
          background: 'white',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <button
            onClick={() => setActiveTab('events')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'events' ? '#00d4ff' : 'transparent',
              color: activeTab === 'events' ? 'white' : '#6b7280',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('trainings')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'trainings' ? '#00d4ff' : 'transparent',
              color: activeTab === 'trainings' ? 'white' : '#6b7280',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Trainings
          </button>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <button
              onClick={() => setShowEventForm(!showEventForm)}
              style={{
                background: 'white',
                color: '#00d4ff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '30px'
              }}
            >
              {showEventForm ? '✕ Cancel' : '+ Add Event'}
            </button>

            {showEventForm && (
              <form
                onSubmit={handleAddEvent}
                style={{
                  background: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '30px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Title</label>
                  <input
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    placeholder="Event title"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Description</label>
                  <textarea
                    value={eventForm.description}
                    onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                    placeholder="Event description"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box',
                      minHeight: '100px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Date</label>
                  <input
                    type="date"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Location</label>
                  <input
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    placeholder="Event location"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#00d4ff',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Add Event
                </button>
              </form>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {events.map((event) => (
                <div
                  key={event.id}
                  style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 style={{ margin: '0 0 8px 0' }}>{event.title}</h3>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>{event.description}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>📅 {event.date}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 16px 0' }}>📍 {event.location}</p>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    style={{
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trainings Tab */}
        {activeTab === 'trainings' && (
          <div>
            <button
              onClick={() => setShowTrainingForm(!showTrainingForm)}
              style={{
                background: 'white',
                color: '#00d4ff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '30px'
              }}
            >
              {showTrainingForm ? '✕ Cancel' : '+ Add Training'}
            </button>

            {showTrainingForm && (
              <form
                onSubmit={handleAddTraining}
                style={{
                  background: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '30px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Title</label>
                  <input
                    value={trainingForm.title}
                    onChange={(e) => setTrainingForm({ ...trainingForm, title: e.target.value })}
                    placeholder="Training title"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Description</label>
                  <textarea
                    value={trainingForm.description}
                    onChange={(e) => setTrainingForm({ ...trainingForm, description: e.target.value })}
                    placeholder="Training description"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box',
                      minHeight: '100px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Date</label>
                  <input
                    type="date"
                    value={trainingForm.date}
                    onChange={(e) => setTrainingForm({ ...trainingForm, date: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Duration</label>
                  <input
                    value={trainingForm.duration}
                    onChange={(e) => setTrainingForm({ ...trainingForm, duration: e.target.value })}
                    placeholder="e.g., 2 hours"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Instructor</label>
                  <input
                    value={trainingForm.instructor}
                    onChange={(e) => setTrainingForm({ ...trainingForm, instructor: e.target.value })}
                    placeholder="Instructor name"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Capacity</label>
                  <input
                    type="number"
                    value={trainingForm.capacity}
                    onChange={(e) => setTrainingForm({ ...trainingForm, capacity: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#00d4ff',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Add Training
                </button>
              </form>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {trainings.map((training) => (
                <div
                  key={training.id}
                  style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 style={{ margin: '0 0 8px 0' }}>{training.title}</h3>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>{training.description}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>📅 {training.date}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>⏱️ {training.duration}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 8px 0' }}>👨‍🏫 {training.instructor}</p>
                  <p style={{ color: '#6b7280', margin: '0 0 16px 0' }}>👥 Capacity: {training.capacity}</p>
                  <button
                    onClick={() => handleDeleteTraining(training.id)}
                    style={{
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;


