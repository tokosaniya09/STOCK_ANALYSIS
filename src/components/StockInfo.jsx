import React from 'react';

const stockTerms = [
  {
    term: 'Stock',
    definition: 'A share in the ownership of a company, representing a claim on the company\'s assets and earnings.',
    example: 'For example, owning 100 shares of Company ABC means you own a portion of the company.'
  },
  {
    term: 'Bull Market',
    definition: 'A market condition in which prices of securities are rising or are expected to rise.',
    example: 'Example: During a bull market, stock prices of technology companies may increase significantly.'
  },
  {
    term: 'Bear Market',
    definition: 'A market condition in which prices of securities are falling or are expected to fall.',
    example: 'Example: In a bear market, investors might see a decline in stock prices across major industries.'
  },
  {
    term: 'Dividend',
    definition: 'A portion of a company\'s earnings distributed to shareholders, usually in the form of cash or additional shares.',
    example: 'For instance, if Company XYZ pays a dividend of $2 per share, and you own 50 shares, you will receive $100 as a dividend.'
  },
  {
    term: 'IPO (Initial Public Offering)',
    definition: 'The process by which a private company becomes publicly traded on a stock exchange by issuing shares to the public for the first time.',
    example: 'Example: When a company like Uber went public, it held an IPO to sell shares to investors for the first time.'
  },
  {
    term: 'Market Capitalization',
    definition: 'The total value of a company\'s outstanding shares of stock, calculated by multiplying the share price by the number of shares.',
    example: 'For example, if a company has 1 million shares outstanding and each share is worth $50, the market cap is $50 million.'
  },
  {
    term: 'P/E Ratio (Price-to-Earnings Ratio)',
    definition: 'A valuation ratio of a company\'s current share price compared to its per-share earnings.',
    example: 'Example: If a company\'s stock is trading at $30 and the earnings per share is $2, the P/E ratio would be 15.'
  },
  {
    term: 'Blue Chip Stocks',
    definition: 'Shares of well-established companies with a history of reliable growth and stable earnings.',
    example: 'Example: Companies like Apple, Microsoft, and Coca-Cola are considered blue chip stocks.'
  },
  {
    term: 'Day Trading',
    definition: 'The practice of buying and selling stocks within the same trading day, often multiple times.',
    example: 'Example: A day trader might buy 100 shares of Company XYZ in the morning and sell them by afternoon to profit from price fluctuations.'
  },
  {
    term: 'Short Selling',
    definition: 'The act of borrowing shares to sell them, with the intention of buying them back later at a lower price to make a profit.',
    example: 'Example: If an investor believes a stock will drop in price, they might short sell it to profit from the anticipated decline.'
  }
];

const StockInfo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-800">Stock Market Basics</h1>
        <p className="text-center text-gray-700 mb-8">
          Get familiar with the key stock market terms and examples to better understand investing.
        </p>
        <div className="space-y-6">
          {stockTerms.map((item, index) => (
            <div key={index} className="bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{item.term}</h2>
              <p className="text-gray-600">{item.definition}</p>
              <p className="text-gray-500 mt-2 italic">Example: {item.example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
