import { useState } from 'react';

const DeviceForm = () => {
  const [isOwnDevice, setIsOwnDevice] = useState(false);

  return (
    <div className=" max-w-4xl mx-auto px-[30px] bg-white ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className=''>
          <label className="block text-[#4A4A4A] text-[16px] opacity-100 mb-2">Device type</label>
          <select className="block w-full border border-[#E6E6E6] rounded-[4px] opacity-100 py-2 px-3 text-gray-600 appearance-none">
            <option>Primary GPS</option>
            <option>Secondary GPS</option>
            <option>Drive Mate Go</option>
            <option>Lockbox</option>
          </select>


          <label className="block text-[#4A4A4A] text-[16px] mt-4 mb-2">Serial number</label>
          <input
            type="text"
            placeholder="Enter the serial number of the device"
            className="block w-full border border-[#E6E6E6] rounded-[4px] opacity-100 py-2 px-3 text-gray-600"
          />
        </div>

        <div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="text-[#4A4A4A] text-[20px] opacity-100">Bringing your own device?</label>
              <button
                className={`h-[18px] w-[36px] rounded-full bg-[#00A3AD] focus:outline-none ${isOwnDevice ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                onClick={() => setIsOwnDevice(!isOwnDevice)}
              >
                <div
                  style={{ background: 'white' }}
                  className={`h-[18px] w-[18px] !bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isOwnDevice ? 'translate-x-6' : ''
                    }`}
                />
              </button>
            </div>
            <div className="text-[#4A4A4A] text-[16px] opacity-100 mt-2">
              Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
            </div>
          </div>
          <label className="block text-[#4A4A4A] text-[16px] mb-2">Upload an image of the device</label>
          <div className="border border-[#E6E6E6] rounded-[4px] opacity-100 py-10 text-center text-blue-600">
            <button className="text-[#026786] text-[16px] underline tracking-normal opacity-100">Click to upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceForm;
