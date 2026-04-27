import React from 'react';

const StatusPill = ({ status }) => {
  const styles = {
    Waiting:   'bg-[#fff3e0] text-[#e65100]',
    Notified:  'bg-[#fce4ec] text-[#c2185b]',
    Seated:    'bg-[#e8f5e9] text-[#2e7d32]',
    Confirmed: 'bg-[#e8f5e9] text-[#2e7d32]',
    Arrived:   'bg-[#fff3e0] text-[#e65100]',
    Reserved:  'bg-[#fce4ec] text-[#c2185b]',
    Late:      'bg-[#ffebee] text-[#c62828]',
    Waitlist:  'bg-[#f5f5f5] text-[#616161]',
    Pending:   'bg-[#fff3e0] text-[#e65100]',
    Approved:  'bg-[#e8f5e9] text-[#2e7d32]',
    Rejected:  'bg-[#ffebee] text-[#c62828]',
    Available: 'bg-[#e8f5e9] text-[#2e7d32]',
    Occupied:  'bg-[#ffebee] text-[#c62828]',
    Cleaning:  'bg-[#fff3e0] text-[#e65100]',
    Preparing: 'bg-[#fff3e0] text-[#e65100]',
    Received:  'bg-[#f5f5f5] text-[#616161]',
    Ready:     'bg-[#e8f5e9] text-[#2e7d32]',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

export default StatusPill;
