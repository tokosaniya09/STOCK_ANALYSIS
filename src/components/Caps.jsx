import React, { useState } from 'react';
export default function Caps() {
  const [capType, setCapType] = useState('large'); // large, mid, small
  const [viewType, setViewType] = useState('gainers'); // gainers, losers

  const data = {
    large: {
      gainers: [
        { name: 'Gail (India) Ltd', symbol: 'GAIL', price: '₹207.86', change: '5.83%' },
        { name: 'Waaree Energies Ltd', symbol: 'WAAREENER', price: '₹3,611.15', change: '3.99%' },
        { name: 'Hindustan Aeronautics Ltd', symbol: 'HAL', price: '₹1,680.25', change: '3.72%' },
        { name: 'Adani Enterprises', symbol: 'ADANIENT', price: '₹2,472.35', change: '3.50%' },
        { name: 'Reliance Industries', symbol: 'RELIANCE', price: '₹2,504.10', change: '3.25%' },
      ],
      losers: [
        { name: 'Bharat Petroleum', symbol: 'BPCL', price: '₹321.65', change: '-2.45%' },
        { name: 'Indian Oil Corp', symbol: 'IOC', price: '₹115.30', change: '-1.82%' },
        { name: 'Tata Motors', symbol: 'TATAMOTORS', price: '₹600.45', change: '-1.60%' },
        { name: 'ITC Ltd', symbol: 'ITC', price: '₹378.50', change: '-1.35%' },
        { name: 'Infosys Ltd', symbol: 'INFY', price: '₹1,445.90', change: '-1.10%' },
      ],
    },
    mid: {
      gainers: [
        { name: 'Apollo Hospitals', symbol: 'APOLLOHOSP', price: '₹4,925.15', change: '4.07%' },
        { name: 'Crompton Greaves', symbol: 'CROMPTON', price: '₹412.15', change: '3.61%' },
        { name: 'MRF Ltd', symbol: 'MRF', price: '₹86,500.00', change: '3.50%' },
        { name: 'L&T Finance Holdings', symbol: 'L&TFH', price: '₹108.50', change: '3.25%' },
        { name: 'Havells India', symbol: 'HAVELLS', price: '₹1,220.85', change: '3.15%' },
      ],
      losers: [
        { name: 'Lupin Ltd', symbol: 'LUPIN', price: '₹825.25', change: '-1.90%' },
        { name: 'Motherson Sumi', symbol: 'MOTHERSUMI', price: '₹256.90', change: '-1.72%' },
        { name: 'Ashok Leyland', symbol: 'ASHOKLEY', price: '₹135.60', change: '-1.50%' },
        { name: 'IDFC First Bank', symbol: 'IDFCFIRSTB', price: '₹70.25', change: '-1.30%' },
        { name: 'Torrent Power', symbol: 'TORNTPOWER', price: '₹490.75', change: '-1.20%' },
      ],
    },
    small: {
      gainers: [
        { name: 'Tanla Platforms', symbol: 'TANLA', price: '₹897.20', change: '5.15%' },
        { name: 'TTK Prestige', symbol: 'TTKPRESTIGE', price: '₹7,162.40', change: '4.89%' },
        { name: 'Jubilant FoodWorks', symbol: 'JUBLFOOD', price: '₹554.35', change: '4.75%' },
        { name: 'Deepak Nitrite', symbol: 'DEEPAKNTR', price: '₹2,113.40', change: '4.60%' },
        { name: 'Mindtree Ltd', symbol: 'MINDTREE', price: '₹3,111.65', change: '4.35%' },
      ],
      losers: [
        { name: 'Balaji Amines', symbol: 'BALAMINES', price: '₹1,215.75', change: '-2.11%' },
        { name: 'Meghmani Organics', symbol: 'MEGH', price: '₹88.50', change: '-1.95%' },
        { name: 'Aarti Industries', symbol: 'AARTIIND', price: '₹840.10', change: '-1.85%' },
        { name: 'Delta Corp Ltd', symbol: 'DELTACORP', price: '₹201.75', change: '-1.70%' },
        { name: 'Fine Organic', symbol: 'FINEORG', price: '₹4,545.00', change: '-1.60%' },
      ],
    },
  };
  
  const renderTableData = (data) => (
    <table className="stock-table">
      <thead>
        <tr>
          <th>Stocks</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name} ({item.symbol})</td>
            <td>{item.price}</td>
            <td className={parseFloat(item.change) > 0 ? 'positive' : 'negative'}>{item.change}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="caps-container">
      <div className="buttons-container">
        <button onClick={() => setCapType('large')} className={capType === 'large' ? 'active' : ''}>Large Cap</button>
        <button onClick={() => setCapType('mid')} className={capType === 'mid' ? 'active' : ''}>Mid Cap</button>
        <button onClick={() => setCapType('small')} className={capType === 'small' ? 'active' : ''}>Small Cap</button>
      </div>
      <div className="buttons-container">
        <button onClick={() => setViewType('gainers')} className={viewType === 'gainers' ? 'active' : ''}>Gainers</button>
        <button onClick={() => setViewType('losers')} className={viewType === 'losers' ? 'active' : ''}>Losers</button>
      </div>
      {renderTableData(data[capType][viewType])}
    </div>
  );
}