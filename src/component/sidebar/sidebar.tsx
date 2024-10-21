import { sideBarText } from "../../common/sidebar-text";

const Sidebar = () => {
    return (
        <div className="h-screen mt-10">
            {sideBarText.map((item) => (
                <div 
                    key={item.id} 
                    className="flex items-center justify-between w-[200px] text-[22px] h-[47px] pb-[30px] text-[#026786] font-semibold pr-10"
                >
                    <p className="text-[#026786] font-semibold tracking-[-0.28px] opacity-100">
                        {item.text}
                    </p>
                    <img src="../images/tick.png" alt="tick"  className="w-[16px] h-[19px]"/>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
