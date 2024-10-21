import RouteDropdown from "../common/sidebar-dropdown";
import DeviceManagementComponent from "../component/deviceManagement";
import Footer from "../component/footer/footer";
import Sidebar from "../component/sidebar/sidebar";

const DeviceManagement = () => {
    return (
        <div className="flex md:justify-center w-full justify-start  px-5 md:items-center items-start h-screen bg-[#FCFCFC]">
            <div className="flex w-full md:mt-[900px] md:flex-row flex-col">
               <div className="md:block hidden"> <Sidebar /></div>
                <div className="block w-full md:hidden">
                    <RouteDropdown />
                </div>
                <div className="md:border md:border-[#E6E6E6] md:rounded-[10px] pb-[100px] bg-[#FFFFFF]">
                    <DeviceManagementComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeviceManagement;