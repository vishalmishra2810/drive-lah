import React, { useState } from 'react';

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex justify-between flex-col md:flex-row items-center p-4 bg-blue-50 rounded-lg">
      {/* Option 1 */}
      <div className="flex ml-[-20px] items-center space-x-2">
        <label
          htmlFor="option1"
          className={`pl-4 md:pr-[200px] pr-[80px] py-2 border border-[#E6E6E6] rounded-[4px] opacity-100 cursor-pointer ${
            selectedOption === 'option1' ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-600'
          }`}
        >
          <span className='text-[#026786]'>BYO secondary GPS - $5/month</span>
        </label>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={() => setSelectedOption('option1' as any)}
          className="form-radio !ml-[-30px] h-5 w-5 text-blue-600 focus:ring-blue-600"
        />
      </div>

      <div className="flex ml-[-30px] mt-4 items-center space-x-2 relative">
        <span className="absolute ml-4 bg-[#E8E8E8] top-[-15px] font-normal font-museo-sans-rounded left-2 text-[12px] tracking-normal opacity-100 bg-gray-200 text-[#7C7C7C] px-2 py-1 rounded">
          Coming soon
        </span>
        <label
          htmlFor="option2"
          className={`pl-4 md:pr-[200px] pr-[110px] py-2 border border-[#E6E6E6] rounded-[4px] opacity-100 cursor-pointer ${
            selectedOption === 'option2' ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-600'
          }`}
        >
          <span className='text-[#026786]'>Between trip insurance</span>
        </label>
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={() => setSelectedOption('option2' as any)}
          className="form-radio !ml-[-30px] h-5 w-5 text-blue-600 focus:ring-blue-600"
        />
      </div>
    </div>
  );
};

export default RadioButton
