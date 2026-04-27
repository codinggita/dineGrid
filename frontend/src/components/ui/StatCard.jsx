import React from 'react';

const StatCard = ({ label, value, sub, color = 'text-[#006e1c]', icon, progress }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-[#eaf0e4]">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-[#3f4a3c] font-medium">{label}</p>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <p className={`text-3xl font-bold ${color} mb-1`}>{value}</p>
      {sub && <p className="text-xs text-[#6f7a6b]">{sub}</p>}
      {progress !== undefined && (
        <div className="mt-3">
          <div className="h-2 bg-[#eaf0e4] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#006e1c] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
