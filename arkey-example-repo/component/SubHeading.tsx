import { useState } from 'react';

export const SubHeading = () => {
    const [selectedItem, setSelectedItem] = useState("Auth for everyone");

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <div className="md:flex hidden justify-around px-80 py-2 text-lg">
                <div
                    className={`cursor-pointer ${selectedItem === "Auth for everyone" ? 'text-[#5359f5] border-b-2 border-[#5359f5]' : ''}`}
                    onClick={() => handleClick("Auth for everyone")}
                >
                    Auth for everyone
                </div>
                <div
                    className={`cursor-pointer ${selectedItem === "Embedded wallets" ? 'text-[#5359f5] border-b-2 border-[#5359f5]' : ''}`}
                    onClick={() => handleClick("Embedded wallets")}
                >
                    Embedded wallets
                </div>
                <div
                    className={`cursor-pointer ${selectedItem === "Powerful connectors" ? 'text-[#5359f5] border-b-2 border-[#5359f5]' : ''}`}
                    onClick={() => handleClick("Powerful connectors")}
                >
                    Powerful connectors
                </div>
                <div
                    className={`cursor-pointer ${selectedItem === "User management" ? 'text-[#5359f5] border-b-2 border-[#5359f5]' : ''}`}
                    onClick={() => handleClick("User management")}
                >
                    User management
                </div>
            </div>
        </div>
    );
};
