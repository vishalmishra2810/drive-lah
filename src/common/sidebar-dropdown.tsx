import React, { useState } from 'react';

// Example route names array
const routeNames = [
    {
        id: 1,
        text: "Location",
        path: "/location",
    },
    {
        id: 2,
        text: "About",
        path: "/about",
    },{
        id: 3,
        text: "Features",
        path: "/features",
    },{
        id: 4,
        text: "Rules",
        path: "/rules",
        
    },{
        id: 5,
        text: "Pricing",
        path: "/pricing",
        
    },{
        id: 6,
        text: "Promotion",
        path: "/promotion",
        
    },{
        id: 7,
        text: "Pictures",
        path: "/pictures",
        
    },{
        id: 8,
        text: "Insurance",
        path: "/insurance",
        
    },{
        id: 9,
        text: "Subsciption",
        path: "/subcription",
        
    },{
        id: 10,
        text: "Device",
        path: "/device",
        
    },{
        id: 11,
        text: "Easy Access",
        path: "/easy-access",
        
    }
];

const RouteDropdown = () => {
    const [selectedRoute, setSelectedRoute] = useState("Subscription");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (route: { id?: number; text: any; path?: string; }) => {
        setSelectedRoute(route.text);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative w-full inline-block text-left mt-[90px]">
            <button
                className="inline-flex  justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleDropdown}
            >
                {selectedRoute}
                <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute right-0 z-10 mt-2 w-full !bg-[#FFFFFF] border border-gray-300 rounded-md shadow-lg">
                    {routeNames.map((route) => (
                        <li key={route.id}>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                onClick={() => handleSelect(route)}
                            >
                                {route.text}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RouteDropdown;
