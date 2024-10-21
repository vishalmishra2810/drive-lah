import { useNavigate } from "react-router-dom";
import { sideBarText } from "../../common/sidebar-text";

const Sidebar = () => {

    const navigate = useNavigate();

    const handleItemClick = (item: { path: any; id: any; }) => {
        // Navigate to the path appended by the item ID
        navigate(`${item.path}`);
    };

    return (
        <div className="h-screen md:ml-[200px] mt-10 cursor-pointer">
            {sideBarText.map((item) => (
                <div 
                    key={item.id} 
                    className="flex items-center justify-between w-[200px] text-[22px] h-[47px] pb-[30px] text-[#026786] font-semibold pr-10"
                    onClick={() => handleItemClick(item)}
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
