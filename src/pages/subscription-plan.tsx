import RouteDropdown from "../common/sidebar-dropdown";
import Footer from "../component/footer/footer";
import Sidebar from "../component/sidebar/sidebar";
import SubscriptionPlanComponent from "../component/subscriptionPlan";

const SubscriptionPlan = () => {
    return (
        <div className="flex md:justify-center w-full justify-start  px-5 md:items-center items-start h-screen bg-[#FCFCFC]">
            <div className="flex w-full md:mt-[500px] md:flex-row flex-col">
               <div className="md:block hidden">
                <Sidebar />
                </div>
                <div className="block w-full md:hidden">
                    <RouteDropdown />
                </div>
                <div className="md:border md:border-[#E6E6E6] md:rounded-[10px] pb-[100px] bg-[#FFFFFF]">
                    <SubscriptionPlanComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubscriptionPlan;