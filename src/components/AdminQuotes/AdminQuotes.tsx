import React, { useState, useEffect } from 'react';

interface QuoteData {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  location: string;
  description: string;
  submittedAt: string;
  status: string;
}

const AdminQuotes: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<QuoteData | null>(null);

  useEffect(() => {
    // Load quotes from localStorage
    const savedQuotes = localStorage.getItem('userQuotes');
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportToCSV = () => {
    if (quotes.length === 0) return;

    const headers = ['ID', 'Name', 'Email', 'Phone', 'Project Type', 'Budget', 'Timeline', 'Location', 'Description', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...quotes.map(quote => [
        quote.id,
        `"${quote.name}"`,
        quote.email,
        quote.phone,
        `"${quote.projectType}"`,
        `"${quote.budget}"`,
        `"${quote.timeline}"`,
        `"${quote.location}"`,
        `"${quote.description.replace(/"/g, '""')}"`,
        quote.submittedAt
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rici-quotes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearAllQuotes = () => {
    if (window.confirm('Are you sure you want to clear all quotes? This action cannot be undone.')) {
      localStorage.removeItem('userQuotes');
      setQuotes([]);
      setSelectedQuote(null);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        borderBottom: '2px solid #e22104',
        paddingBottom: '10px'
      }}>
        <h1 style={{ color: '#202e31', margin: 0 }}>
          RICI Builders - Quote Requests ({quotes.length})
        </h1>
        <div>
          <button 
            onClick={exportToCSV}
            disabled={quotes.length === 0}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              marginRight: '10px',
              cursor: quotes.length > 0 ? 'pointer' : 'not-allowed',
              opacity: quotes.length > 0 ? 1 : 0.5
            }}
          >
            Export CSV
          </button>
          <button 
            onClick={clearAllQuotes}
            disabled={quotes.length === 0}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: quotes.length > 0 ? 'pointer' : 'not-allowed',
              opacity: quotes.length > 0 ? 1 : 0.5
            }}
          >
            Clear All
          </button>
        </div>
      </div>

      {quotes.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          color: '#666',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h3>No quote requests yet</h3>
          <p>Quote requests submitted through the website will appear here.</p>
          <p style={{ fontSize: '14px', marginTop: '20px' }}>
            <strong>Note:</strong> This is a demo admin panel using localStorage. 
            In production, implement proper database storage and authentication.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* Quotes List */}
          <div>
            <h3 style={{ color: '#202e31' }}>Recent Requests</h3>
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {quotes.map((quote) => (
                <div 
                  key={quote.id}
                  onClick={() => setSelectedQuote(quote)}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    backgroundColor: selectedQuote?.id === quote.id ? '#e22104' : 'white',
                    color: selectedQuote?.id === quote.id ? 'white' : 'black',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{quote.name}</h4>
                      <p style={{ margin: '0 0 4px 0', fontSize: '14px', opacity: 0.8 }}>
                        {quote.projectType}
                      </p>
                      <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>
                        {formatDate(quote.submittedAt)}
                      </p>
                    </div>
                    <div style={{ 
                      backgroundColor: selectedQuote?.id === quote.id ? 'rgba(255,255,255,0.2)' : '#e22104',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      textTransform: 'uppercase'
                    }}>
                      {quote.budget || 'No budget'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Details */}
          <div>
            <h3 style={{ color: '#202e31' }}>Quote Details</h3>
            {selectedQuote ? (
              <div style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '20px',
                backgroundColor: 'white'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#e22104', margin: '0 0 10px 0' }}>
                    Request #{selectedQuote.id}
                  </h4>
                  <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                    Submitted: {formatDate(selectedQuote.submittedAt)}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Name
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      {selectedQuote.name}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Phone
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      <a href={`tel:${selectedQuote.phone}`} style={{ color: '#e22104', textDecoration: 'none' }}>
                        {selectedQuote.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Email
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      <a href={`mailto:${selectedQuote.email}`} style={{ color: '#e22104', textDecoration: 'none' }}>
                        {selectedQuote.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Project Type
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      {selectedQuote.projectType}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Budget
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      {selectedQuote.budget || 'Not specified'}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                      Timeline
                    </label>
                    <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                      {selectedQuote.timeline || 'Not specified'}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                    Location
                  </label>
                  <p style={{ margin: 0, padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    {selectedQuote.location || 'Not specified'}
                  </p>
                </div>

                <div>
                  <label style={{ fontWeight: 'bold', color: '#202e31', display: 'block', marginBottom: '5px' }}>
                    Project Description
                  </label>
                  <p style={{ 
                    margin: 0, 
                    padding: '12px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '4px',
                    lineHeight: '1.5',
                    minHeight: '60px'
                  }}>
                    {selectedQuote.description}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <h5 style={{ color: '#202e31', marginBottom: '10px' }}>Quick Actions</h5>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a 
                      href={`tel:${selectedQuote.phone}`}
                      style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      📞 Call Customer
                    </a>
                    <a 
                      href={`mailto:${selectedQuote.email}?subject=Quote for ${selectedQuote.projectType}&body=Dear ${selectedQuote.name},%0A%0AThank you for your interest in RICI Builders. We have received your quote request for ${selectedQuote.projectType}.%0A%0ABest regards,%0AS Gopalakrishnan%0ARICI Builders`}
                      style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      ✉️ Send Email
                    </a>
                    <a 
                      href={`https://wa.me/91${selectedQuote.phone.replace(/[^0-9]/g, '')}?text=Hello ${selectedQuote.name}, thank you for your interest in RICI Builders. We received your quote request for ${selectedQuote.projectType}. When would be a good time to discuss your project?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#25d366',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ 
                padding: '40px', 
                textAlign: 'center', 
                color: '#666',
                border: '1px solid #ddd',
                borderRadius: '8px'
              }}>
                <h4>Select a quote request to view details</h4>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
        <h4 style={{ color: '#202e31', marginBottom: '10px' }}>Development Notes</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>This admin panel currently uses browser localStorage for demo purposes</li>
          <li>In production, implement proper database storage (MongoDB, PostgreSQL, etc.)</li>
          <li>Add user authentication and authorization</li>
          <li>Implement status tracking (pending, contacted, quoted, completed)</li>
          <li>Add email notifications and automated follow-ups</li>
          <li>Integrate with WhatsApp Business API for instant notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminQuotes;
