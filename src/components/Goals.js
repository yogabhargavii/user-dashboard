import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUtensils, faBook } from '@fortawesome/free-solid-svg-icons';

const Goals = () => {
  const items = [
    { title: 'Goals', icon: faBullseye },
    { title: 'Popular Dishes', icon: faUtensils },
    { title: 'Menus', icon: faBook },
  ];

  return (
    <div className="goals">
      {items.map((item, index) => (
        <div key={index} className="goal-item">
          <FontAwesomeIcon icon={item.icon} size="2x" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Goals;
