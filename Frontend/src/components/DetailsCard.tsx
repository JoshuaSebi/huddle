import React from 'react';
import './DetailsCard.css';

type DetailsCardProps = {
  title: string;
  value: string;
};

const DetailsCard: React.FC<DetailsCardProps> = ({ title, value }) => {
  return (
    <div className='detail-item'>
      <p className='detail-title'>{title}</p>
      <div className='detail-box'>
        <p className='detail-value'>{value}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
