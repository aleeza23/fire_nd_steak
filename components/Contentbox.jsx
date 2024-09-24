
import { RiMenu4Line } from "react-icons/ri";

const Contentbox = ({ children, toggleSidebar, isOpen }) => {

    return (
        <main className=" w-full xl:w-[83vw] ms-auto">
            <div className="container p-0 flex h-screen">

                <div className="container p-0">

                    {/* content body start */}


                    <div className="scroll-box h-full">

                        <div className="scroll-inner">

                            <div className=" relative w-full h-full bg-black">
                                <button
                                    className={`${isOpen ? 'hidden': 'block'} xl:hidden text-white absolute top-5 left-5 z-50`}
                                    onClick={toggleSidebar}
                                >
                                    <RiMenu4Line className="text-5xl" />
                                </button>

                                {children}
                            </div>
                            {/* content body end */}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Contentbox