import React from 'react';

const CardInput = () => {
  return (
    <div className="w-full max-w-lg p-4 bg-blue-50 rounded-lg">
      <div className="flex ml-[-20px] w-[340px] items-center border border-gray-300 rounded-lg p-2 space-x-2">
        <span className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 7.5h19.5m-19.5 3h19.5M2.25 17.25h19.5M21 7.5v9.75A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5z"
            />
          </svg>
        </span>

        {/* Card Number Input */}
        <input
          type="text"
          placeholder="1234 5678 1234 5678"
          className="flex-1 outline-none border-none text-[12px] bg-transparent text-gray-600"
        />

        <input
          type="text"
          placeholder="MM/YY"
          className="w-24 outline-none border-none bg-transparent text-[12px] text-gray-600"
        />

        {/* CVC Input */}
        <input
          type="text"
          placeholder="CVC"
          className="w-16 outline-none border-none text-[12px] bg-transparent text-gray-600"
        />
      </div>

      <p className="mt-2 tracking-normal text-[#B2B2B2] opacity-100 text-[15px] whitespace-normal md:whitespace-nowrap">
    You will not be charged right now. Subscription will only start once your listing is published and live.
</p>

    </div>
  );
};

export default CardInput;
