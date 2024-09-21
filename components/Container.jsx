"use client"
import { useState } from "react";
import Contentbox from "./Contentbox";
import Sidebar from "./Sidebar";

const Conatiner = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return <>

        <div className="flex bg-black " style={{ height: '100vh' }}>
            <Sidebar isOpen={isOpen} />

            <Contentbox toggleSidebar={toggleSidebar} isOpen={isOpen}>
                {children}
            </Contentbox>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>

    </>;
};

export default Conatiner;