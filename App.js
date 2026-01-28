import React, { useState, useEffect } from 'react';

const csrTeam = [
  { id: '82332366', name: 'Valerie Aparicio', avatar: 'VA' },
  { id: '82332534', name: 'Maria Taylor', avatar: 'MT' },
  { id: '85603909', name: 'Pat Burdette', avatar: 'PB' },
  { id: '87622721', name: 'Christina Burdette', avatar: 'CB' },
  { id: '95263827', name: 'Jillian Turnquist', avatar: 'JT' },
  { id: '95614522', name: 'Kathy Silsby', avatar: 'KS' },
  { id: '95614658', name: 'Laura Sorenson-Dickey', avatar: 'LS' },
  { id: '95614659', name: 'Rebecca McIntire', avatar: 'RM' },
  { id: '95626004', name: 'James Summers', avatar: 'JS' },
  { id: '96630620', name: 'Andrew Stone', avatar: 'AS' },
];

const priorities = [
  { id: 10, label: 'Critical ⚠️', color: '#bb3354' },
  { id: 110, label: 'High', color: '#df2f4a' },
  { id: 109, label: 'Medium', color: '#216edf' },
  { id: 7, label: 'Low', color: '#a1e3f6' },
];

const boardGroups = [
  { id: 'group_mkz8s39b', name: 'Pegboard Projects', color: '#6366f1' },
  { id: 'group_mkyg5236', name: 'Presentation Stage / New Projects', color: '#8b5cf6' },
  { id: 'group_mkwbqd8a', name: 'Quotes', color: '#ffcb00' },
  { id: 'group_mkxgwj06', name: 'James/Check/Envelope Orders', color: '#fdab3d' },
];

export default function ProjectOnboardingApp() {
  const [formData, setFormData] = useState({
    customerName: '',
    group: 'group_mkz8s39b',
    firmInHandsDate: '',
    csr: '',
    item: '',
    priority: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formatted);
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - in production, this would call Monday.com API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        customerName: '',
        group: 'group_mkz8s39b',
        firmInHandsDate: '',
        csr: '',
        item: '',
        priority: '',
        notes: '',
      });
      setSubmitStatus(null);
    }, 2000);
  };

  const isFormValid = formData.customerName && formData.csr;

  return (
    <div style={styles.container}>
      {/* Animated background */}
      <div style={styles.bgGradient} />
      <div style={styles.bgPattern} />
      
      {/* Main card */}
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h1 style={styles.title}>New Project</h1>
              <p style={styles.subtitle}>Quick onboarding for Monday.com</p>
            </div>
          </div>
          <div style={styles.dateContainer}>
            <span style={styles.dateLabel}>Order Date</span>
            <span style={styles.dateValue}>{currentDate}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Customer/Project Name */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Customer / Project Name
              <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => handleChange('customerName', e.target.value)}
              placeholder="Enter customer or project name"
              style={styles.input}
              required
            />
          </div>

          {/* Board Group Selection */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Add to Group
              <span style={styles.required}>*</span>
            </label>
            <div style={styles.groupGrid}>
              {boardGroups.map(group => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleChange('group', group.id)}
                  style={{
                    ...styles.groupButton,
                    ...(formData.group === group.id ? {
                      backgroundColor: group.color,
                      color: '#fff',
                      borderColor: group.color,
                      boxShadow: `0 4px 12px ${group.color}40`,
                    } : {
                      borderColor: '#e5e7eb',
                      color: '#4b5563',
                    })
                  }}
                >
                  <span 
                    style={{
                      ...styles.groupDot,
                      backgroundColor: formData.group === group.id ? '#fff' : group.color,
                    }}
                  />
                  {group.name}
                </button>
              ))}
            </div>
          </div>

          {/* Two column layout */}
          <div style={styles.twoColumn}>
            {/* Firm In-Hands Date */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Firm In-Hands Date</label>
              <input
                type="date"
                value={formData.firmInHandsDate}
                onChange={(e) => handleChange('firmInHandsDate', e.target.value)}
                style={styles.input}
              />
            </div>

            {/* CSR Dropdown */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                CSR
                <span style={styles.required}>*</span>
              </label>
              <select
                value={formData.csr}
                onChange={(e) => handleChange('csr', e.target.value)}
                style={styles.select}
                required
              >
                <option value="">Select CSR...</option>
                {csrTeam.map(csr => (
                  <option key={csr.id} value={csr.id}>{csr.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Item */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Item Description</label>
            <input
              type="text"
              value={formData.item}
              onChange={(e) => handleChange('item', e.target.value)}
              placeholder="e.g., T-shirts, Pens, Mugs, etc."
              style={styles.input}
            />
          </div>

          {/* Priority Selection */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Priority</label>
            <div style={styles.priorityGrid}>
              {priorities.map(priority => (
                <button
                  key={priority.id}
                  type="button"
                  onClick={() => handleChange('priority', priority.id)}
                  style={{
                    ...styles.priorityButton,
                    ...(formData.priority === priority.id ? {
                      backgroundColor: priority.color,
                      color: '#fff',
                      borderColor: priority.color,
                      transform: 'scale(1.02)',
                      boxShadow: `0 4px 12px ${priority.color}40`,
                    } : {
                      borderColor: priority.color + '60',
                      color: priority.color,
                    })
                  }}
                >
                  {priority.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Add any additional details, special instructions, or client requests..."
              style={styles.textarea}
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            style={{
              ...styles.submitButton,
              ...((!isFormValid || isSubmitting) ? styles.submitButtonDisabled : {}),
              ...(submitStatus === 'success' ? styles.submitButtonSuccess : {})
            }}
          >
            {isSubmitting ? (
              <span style={styles.loadingContainer}>
                <span style={styles.spinner} />
                Creating Project...
              </span>
            ) : submitStatus === 'success' ? (
              <span style={styles.successContainer}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Project Created!
              </span>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add to Monday.com
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={styles.footer}>
          <span>Board: PEGBOARD JOBS</span>
          <span style={styles.footerDot}>•</span>
          <span>Group: {boardGroups.find(g => g.id === formData.group)?.name || 'Pegboard Projects'}</span>
        </div>
      </div>

      {/* Floating elements */}
      <div style={styles.floatingElement1} />
      <div style={styles.floatingElement2} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        input, select, textarea, button {
          font-family: 'DM Sans', sans-serif;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15) !important;
        }
        
        select option {
          padding: 12px;
        }
        
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(5deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, 15px) rotate(-5deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  bgPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    pointerEvents: 'none',
  },
  card: {
    width: '100%',
    maxWidth: '560px',
    background: 'rgba(255, 255, 255, 0.97)',
    borderRadius: '24px',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.35), 0 10px 30px rgba(99, 102, 241, 0.15)',
    position: 'relative',
    zIndex: 10,
    animation: 'slideIn 0.5s ease-out',
    overflow: 'hidden',
  },
  header: {
    padding: '28px 32px 20px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '16px',
    background: 'linear-gradient(135deg, #fafbff 0%, #f8f9ff 100%)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  logo: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 700,
    color: '#1f2937',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    margin: '2px 0 0',
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: 500,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '2px',
  },
  dateLabel: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  dateValue: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#4b5563',
    fontFamily: "'JetBrains Mono', monospace",
  },
  form: {
    padding: '28px 32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#374151',
    letterSpacing: '0.01em',
  },
  required: {
    color: '#ef4444',
    marginLeft: '4px',
  },
  input: {
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    color: '#1f2937',
    transition: 'all 0.2s ease',
  },
  select: {
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    color: '#1f2937',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '18px',
    transition: 'all 0.2s ease',
  },
  textarea: {
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    color: '#1f2937',
    resize: 'vertical',
    minHeight: '90px',
    lineHeight: 1.5,
    transition: 'all 0.2s ease',
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  priorityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  priorityButton: {
    padding: '12px 8px',
    fontSize: '12px',
    fontWeight: 600,
    border: '2px solid',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
  },
  groupGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    maxHeight: '240px',
    overflowY: 'auto',
    padding: '4px',
  },
  groupButton: {
    padding: '12px 14px',
    fontSize: '13px',
    fontWeight: 500,
    border: '2px solid',
    borderRadius: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  groupDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  submitButton: {
    marginTop: '8px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
  },
  submitButtonDisabled: {
    background: '#d1d5db',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  submitButtonSuccess: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  successContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  footer: {
    padding: '16px 32px',
    borderTop: '1px solid #e5e7eb',
    fontSize: '12px',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: '#f9fafb',
    fontWeight: 500,
  },
  footerDot: {
    color: '#d1d5db',
  },
  floatingElement1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float1 8s ease-in-out infinite',
    pointerEvents: 'none',
  },
  floatingElement2: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float2 10s ease-in-out infinite',
    pointerEvents: 'none',
  },
};
