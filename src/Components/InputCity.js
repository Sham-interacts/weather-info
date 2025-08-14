import React from "react";

const InputCity = ({cityName,inputHandler,submitHandler }) => {
  
  return (
    <div className='input'>
      <input type="text"
      value={cityName} 
      onChange={inputHandler}
      placeholder="Enter city name" />
      <div>
        <button type="submit" onClick={submitHandler}
        className="input_btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default InputCity;
