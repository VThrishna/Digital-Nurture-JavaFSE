import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const jsxatt = <img src="https://picsum.photos/300/150" width="25%" height="25%" alt="Office Space" />;
  const officeList = [
    { id: 1, Name: "DBS", Rent: 50000, Address: "Chennai" },
    { id: 2, Name: "Tidel Park", Rent: 75000, Address: "Coimbatore" },
    { id: 3, Name: "RMZ Millenia", Rent: 45000, Address: "Bangalore" }
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      {officeList.map(item => {
        let colors = [];
        if (item.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }
        return (
          <div key={item.id}>
            <h1>Name: {item.Name}</h1>
            <h3 className={colors[0]}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;