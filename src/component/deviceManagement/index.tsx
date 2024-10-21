
import DeviceForm from "./device/device.form";

const DeviceManagementComponent = () => {
    return (
        <div className="bg-[#FFFFFF] rounded-[10px] pt-[20px]">
            <h1 className="text-[#026786] text-[20px] font-bold">Device management</h1>
            <p className="text-[#4A4A4A] text-[12px] font-regular">Add details of the device, if any already installed on your car. If none, then continue to next step.</p>
            <div className="w-[calc(100% + 60px)] h-[1px] bg-[#E6E6E6] mt-[10px] mx-[-30px]"></div>
            <p className="text-[#4A4A4A] text-[22px] font-semibold my-[20px] opacity-100">Device 1</p>
            <DeviceForm/>
            <p className="text-[#4A4A4A] text-[22px] font-semibold my-[20px] opacity-100">Device 2</p>
            <DeviceForm/>
            <p className="text-[#4A4A4A] text-[22px] font-semibold my-[20px] opacity-100">Device 3</p>
            <DeviceForm/>
            <p className="text-[#4A4A4A] text-[22px] font-semibold my-[20px] opacity-100">Device 4</p>
            <DeviceForm/>
            </div>
    )
}

export default DeviceManagementComponent;