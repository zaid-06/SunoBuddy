import { useState ,useEffect } from "react";
// import Navbar from "./navbar"

function Layout() {
    
    
    const seconds=89;
    const [count, setCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openLogin, setOpenLogin] = useState(false); // modal state
    const [clicked, setClicked] = useState(false);
    // const [putTime, setTime] = useState({ seconds: 0, minuts: 0, hours: 0 });
    const [countTime, setCountTime] = useState({ seconds: 0, minutes: 0, hours: 0 });


    const [isRunning, setIsRunning] = useState(false); // start/stop state
    
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCountTime((prev) => {
                let { seconds, minutes, hours } = prev;
                seconds += 1;
                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }

                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                }
                return { seconds, minutes, hours };
                });

            }, 1000);

          

        }
        return () => clearInterval(interval);
    }, [isRunning]);




    


    const [genderValue, setGenderValue] = useState(0);
    const [bgColor, setBgColor] = useState("bg-green-600");
    const images = [
        [
            "../public/images/bohemian-man-with-his-arms-crossed.jpg",
            "../public/images/man-smiling-with-hands-hips.jpg",
            "../public/images/bohemian-man-with-his-arms-crossed.jpg"
        ],
        [
            "../public/images/man-smiling-with-hands-hips.jpg",
            "../public/images/bohemian-man-with-his-arms-crossed.jpg",
            "../public/images/bohemian-man-with-his-arms-crossed.jpg",
        ]
    ];

    // Handle change function
    const handleSelect = (e) => {
        if (e.target.value === "Men") {
            setGenderValue(0);
        } else if (e.target.value === "Women") {
            setGenderValue(1);
        }
    };

    const changeBgColor = () => {

        if (bgColor === "bg-red-600") {
            setClicked(false);
            setIsRunning((prev) => !prev); 
            setBgColor("bg-green-600");
        } else {
            setClicked(true);

            setCountTime({ seconds: 0, minutes: 0, hours: 0 });
            setIsRunning((prev) => !prev); 
            setBgColor("bg-red-600");
        }

    }


    


    return (
        <>
            <div className=" relative inset-0      flex h-175 justify-center">

                {/* Background Video */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                >
                    <source src="/images/33194-396036988.mp4" type="video/mp4" />
                </video> */}
                <img
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="/images/banner-background.webp"
                    alt=""
                />
               
               


                
                <div className=" relative  left-1/2 transform -translate-x-1/2  border-1 border-gray-500 flex mt-5  shadow-xl rounded-xl shadow-black/100 h-140 w-[800px]  bg-white   items-center justify-center">

                    {/* Image */}
                    {/* <img
                        className="h-140 w-full object-cover rounded-lg"
                        src="/images/man-smiling-with-hands-hips.jpg"
                        alt=""
                    /> */}
                    <img
                    className="h-full w-120 object-cover rounded-lg z-0"
                    src="/images/bohemian-man-with-his-arms-crossedPng-Photoroom.png"
                    alt=""
                    />

                    {/* clicked call button */}

                    {clicked && (

                        <div className={`absolute top-100 left-1/2 transform -translate-x-1/2 p-3    w-40 flex items-center justify-center active:scale-95 transition-transform duration-150`}>
                            {/* For TSX uncomment the commented types below */}
                            <span className="countdown font-mono text-2xl">
                                <span style={{ "--value": countTime.hours } /* as React.CSSProperties */} aria-live="polite" ></span>:
                                <span style={{ "--value": countTime.minutes } /* as React.CSSProperties */} aria-live="polite" ></span>:
                                <span style={{ "--value": countTime.seconds} /* as React.CSSProperties */} aria-live="polite"></span>
                                {/* <span style={{ "--value": 59 } } aria-live="polite" aria-label={89}></span> */}
                                {/* aria-label={} */}
                            </span>

                        </div>
                    )}

                    <div  className={`absolute bottom-23   `}>
                        <h1 className="text-1xl font-extrabold tracking-wide    ">Ahmed</h1>
                    </div>
                    
                    {/* call button  */}
                    {/* <div
                    onClick={changeBgColor}
                    className={`absolute top-120 left-1/2 transform -translate-x-1/2 z-20 p-3 btn-circle ${bgColor} shadow-lg w-20 flex items-center justify-center active:scale-95 transition-transform duration-150`}
                    > */}
                    <div onClick={changeBgColor} className={`absolute  top-120 left-1/2 transform -translate-x-1/2 p-3 btn-circle ${bgColor} shadow-lg w-20 flex items-center justify-center active:scale-95 transition-transform duration-150`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                        </svg>
                    </div>
                    


                </div>

                <div className="flex flex-col mt-4 gap-2 items-end ml-auto ">

                    {/* <div className="flex  flex-row drawer-content mr-17 gap-2  ">
                        
                            <div className=" shadow-lg    right-17">
                                    <select defaultValue="Gender" className="select select-accent w-26 ">
                                        <option disabled={true}>Talk to</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                    </select>
               
                            </div>

                        </div> */}

                    <div className="flex flex-row drawer-content mr-17 gap-2">
                        <div className="shadow-lg right-17">
                            <select defaultValue="Gender" className="select select-accent w-26" onChange={handleSelect}>
                                <option disabled>Talk to</option>
                                <option>Men</option>
                                <option>Women</option>
                            </select>
                        </div>
                        {/* For checking output */}


                    </div>


                    <div className="card  right-3 bg-base-100   w-40 shadow-lg hover:shadow-2xl">
                        <figure >
                            <img className="h-35"
                                src={images[genderValue][0]}
                                alt="Shoes" />
                        </figure>
                        <div className="flex justify-center">
                        <h2 className="card-title  ">Angena</h2>
                        </div>
                    </div>
                    <div className="card  right-3 bg-base-100   w-40 shadow-lg hover:shadow-2xl">
                        <figure >
                            <img className="h-35"
                                src={images[genderValue][1]}
                                alt="Shoes" />
                        </figure>
                        <div className="flex justify-center">
                        <h2 className="card-title  ">John</h2>
                        </div>
                    </div>
                    <div className="card  right-3 bg-base-100  w-40 shadow-lg hover:shadow-2xl">
                        <figure >
                            <img className="h-35"
                                src={images[genderValue][2]}
                                alt="Shoes" />
                        </figure>

                        <div className="flex justify-center">
                            <h2 className="card-title">Ahmad</h2>
                        </div>


                    </div>
                </div>
                

            </div>


            {/* Login Modal */}


        </>
    );
}

export default Layout;
