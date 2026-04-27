import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Users, MapPin, Coffee, ArrowRight, ArrowLeft, Info } from 'lucide-react';
import BookingLayout from './BookingLayout';
import { useBooking } from '../../context/BookingContext';

const tables = [
  { id: 'O1', type: 'circle', x: 90,  y: 160, status: 'taken',    capacity: 2, label: 'O1' },
  { id: 'O2', type: 'circle', x: 90,  y: 260, status: 'available', capacity: 2, label: 'O2' },
  { id: 'O3', type: 'circle', x: 90,  y: 360, status: 'available', capacity: 2, label: 'O3' },
  { id: 'B1', type: 'rect',   x: 230, y: 145, status: 'reserved',  capacity: 4, label: 'B1' },
  { id: 'B2', type: 'rect',   x: 230, y: 260, status: 'available', capacity: 4, label: 'B2' },
  { id: 'B3', type: 'rect',   x: 230, y: 370, status: 'available', capacity: 4, label: 'B3' },
  { id: 'R1', type: 'circle', x: 380, y: 210, status: 'available', capacity: 6, label: 'R1' },
  { id: 'R2', type: 'circle', x: 380, y: 340, status: 'taken',     capacity: 6, label: 'R2' },
  { id: 'W1', type: 'rect',   x: 510, y: 180, status: 'available', capacity: 2, label: 'W1' },
  { id: 'W2', type: 'rect',   x: 510, y: 320, status: 'available', capacity: 2, label: 'W2' },
];

const statusColors = {
  available: { fill: '#F0FDF4', stroke: '#86EFAC' },
  taken:     { fill: '#FFF1F2', stroke: '#FDA4AF' },
  reserved:  { fill: '#FFF7ED', stroke: '#FDB975' },
};

const BookingTable = () => {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const [selectedTable, setSelectedTable] = useState(bookingData.tableId || null);

  const handleConfirm = () => {
    if (!selectedTable) return;
    updateBookingData({ tableId: selectedTable });
    navigate('/book/details');
  };

  const selectedInfo = tables.find(t => t.id === selectedTable);

  return (
    <BookingLayout currentStep={2}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ─── Left: Floor Map ─── */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Main Dining Room</h2>
                <p className="text-xs text-gray-400 mt-0.5">Click a table to select it</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#86EFAC]" />
                  <span className="text-gray-400">Available</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FDA4AF]" />
                  <span className="text-gray-400">Taken</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FDB975]" />
                  <span className="text-gray-400">Reserved</span>
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 relative overflow-hidden">
              <p className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-black text-gray-300 tracking-[0.4em] uppercase">Kitchen Entrance</p>
              <svg viewBox="0 0 630 500" className="w-full">
                {tables.map(table => {
                  const isSelected = selectedTable === table.id;
                  const colors = isSelected
                    ? { fill: 'var(--color-primary)', stroke: 'var(--color-primary)' }
                    : statusColors[table.status];
                  const isClickable = table.status === 'available';

                  return (
                    <g
                      key={table.id}
                      onClick={() => isClickable && setSelectedTable(table.id)}
                      className={isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
                      style={{ filter: isSelected ? 'drop-shadow(0 4px 8px rgba(76,175,80,0.3))' : 'none' }}
                    >
                      {table.type === 'circle' ? (
                        <circle cx={table.x} cy={table.y} r={28} fill={colors.fill} stroke={colors.stroke} strokeWidth="2" className="transition-all" />
                      ) : (
                        <rect x={table.x - 36} y={table.y - 24} width="72" height="48" rx="10" fill={colors.fill} stroke={colors.stroke} strokeWidth="2" className="transition-all" />
                      )}
                      <text x={table.x} y={table.y + 5} textAnchor="middle" fontSize="11" fontWeight="700"
                        fill={isSelected ? 'white' : '#6B7280'}
                      >
                        {table.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Stats */}
            <div className="flex mt-5">
              <div className="flex-1 text-center border-r border-gray-100">
                <div className="text-2xl font-extrabold text-[var(--color-primary)]">
                  {tables.filter(t => t.status === 'available').length}
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Free Tables</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-2xl font-extrabold text-[var(--color-tertiary)]">
                  {tables.filter(t => t.status !== 'available').length}
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Booked</div>
              </div>
            </div>
          </div>

          {/* ─── Right: Table Info + Actions ─── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Selected Table Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-4">Currently Selected</div>

              {selectedInfo ? (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Table {selectedInfo.id}</h3>
                  <p className="text-xs text-gray-400 font-medium mb-4">Booth · Main Dining</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      Fits up to {selectedInfo.capacity} people
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      Center Aisle, Near Terrace
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                        <Coffee className="w-4 h-4" />
                      </div>
                      Quiet area priority
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-gray-100">
                    <span className="text-sm text-gray-400 font-medium">Reservation Fee</span>
                    <span className="text-xl font-extrabold text-gray-800">$10.00</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-3">
                    <Layout className="w-7 h-7 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-400 font-medium">Select a table from the map to see details</p>
                </div>
              )}
            </div>

            {/* Booking Brief */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Booking Brief</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="font-semibold text-gray-700">
                    {bookingData.date ? new Date(bookingData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time</span>
                  <span className="font-semibold text-gray-700">{bookingData.time || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Guests</span>
                  <span className="font-semibold text-gray-700">{bookingData.guests || '—'} Adults</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                disabled={!selectedTable}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                  ${selectedTable
                    ? 'bg-[var(--color-secondary)] text-white hover:opacity-90 shadow-md shadow-orange-100 active:scale-95'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
              >
                Confirm Selection <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/book/date')}
                className="w-full py-3.5 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Change Date & Time
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-600 font-medium leading-relaxed">Click any available (green) table to select it. Gray tables are unavailable.</p>
            </div>
          </div>

        </div>
      </div>
    </BookingLayout>
  );
};

export default BookingTable;
