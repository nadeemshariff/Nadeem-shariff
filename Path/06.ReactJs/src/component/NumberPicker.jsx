// import React from 'react';

const NumberPicker = () => {
    function getNum() {
        return Math.floor(Math.random() * 10) + 1;
      }
      const num = getNum();
      let msg;
    
      if (num === 7) {
        msg = <div>
          <h2>Congrats You Win</h2>
          <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />
        </div>;
      } else { 
        msg = 'BOIOIOI';
      }
  return (
      <div className="bg-gray-100 min-h-screen flex items-start justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Your number is: <span className="text-indigo-600">{num}</span></h1>
          <div className="text-center">
            {msg}
          </div>
        </div>
      </div>
  )
}

export default NumberPicker