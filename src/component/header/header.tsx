import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-between items-center h-[73px] bg-[#00A3AD] fixed top-0 left-0 right-0 z-50 px-[20px] md:px-[30px]">
            {/* Left side: Hamburger + Logo */}
            <div className="flex items-center gap-16 md:gap-3">
                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <img src="../images/menu.png" alt="menu" className="w-[30px] h-[30px]" />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-1" onClick={() => navigate('/')}>
                    <img src="../images/logo.png" alt="logo" className="w-[41px] h-[20px]" />
                    <p className="text-[#FFFFFF] text-[18px] font-bold cursor-pointer">Drive Lah</p>
                </div>
            </div>

            {/* Menu items (hidden on mobile, shown on larger screens) */}
            <div className="hidden md:flex gap-4">
                <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">Learn more</p>
                <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">List your car</p>
                <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">Inbox</p>
                <img src="../images/profile.png" alt="profile" className="w-[40px] h-[40px]" />
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="absolute top-[73px] left-0 right-0 bg-[#00A3AD] flex flex-col items-center md:hidden">
                    <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer py-2" onClick={toggleMenu}>Learn more</p>
                    <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer py-2" onClick={toggleMenu}>List your car</p>
                    <p className="text-[#FFFFFF] text-[16px] font-semibold cursor-pointer py-2" onClick={toggleMenu}>Inbox</p>
                </div>
            )}
            <div className='md:hidden justify-start'><img src="../images/profile.png" alt="profile" className="w-[40px] h-[40px] py-2" /></div>
        </div>
    );
};

export default Header;
