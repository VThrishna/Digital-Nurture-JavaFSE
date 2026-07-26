import React from 'react';

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((item, index) => {
        return (
          <div key={index}>
            <li>Mr. {item}</li>
          </div>
        );
      })}
    </div>
  );
};

export default ListofIndianPlayers;