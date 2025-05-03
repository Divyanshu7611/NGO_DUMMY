// components/DonationsMarquee.tsx
import React from 'react';

const donations = [
  { name: 'Alice', amount: 100 },
  { name: 'Bob', amount: 250 },
  { name: 'Charlie', amount: 75 },
  { name: 'Diana', amount: 300 },
  { name: 'Edward', amount: 150 },
  { name: 'Fiona', amount: 200 },
  { name: 'George', amount: 90 },
  { name: 'Helen', amount: 120 },
];

const DonationsMarquee: React.FC = () => {
  return (
    <div className="bg-gray-200 overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {donations.map((donation, index) => (
          <span
            key={index}
            className="text-gray-800 font-medium text-base shrink-0"
          >
            {donation.name} donated ₹{donation.amount}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {donations.map((donation, index) => (
          <span
            key={`copy-${index}`}
            className="text-gray-800 font-medium text-base shrink-0"
          >
            {donation.name} donated ₹{donation.amount}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DonationsMarquee;
