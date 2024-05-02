import "./deshboard.css";
import Nav from "../../Commons/MobileNav/nav";
import Chart from "../../Ui-Components/Chart";
import SideBAr from "../../Commons/SideBar/SideBar";
const Deshboard = () => {
    // Define an array of box data
    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 146.svg", value: "88.3%", text: "Availability (Last Hours)" },
        { iconSrc: "Assets/Images/All Icons/Group 147.svg", value: "823", text: "Total Image Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 148.svg", value: "0", text: "Total Text Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 150.svg", value: "--", text: "Performance Score" },
        { iconSrc: "Assets/Images/All Icons/Group 149.svg", value: "823", text: "1 Day Image Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 151.svg", value: "0", text: "1 Day Text Requests" },
    ];
    const detailBoxes = [
        [
            { label: "Time", value: "1 min ago" },
            { label: "Model ID", value: "BlazingDrive" },
            { label: "Total Latency", value: "3.965" },
            { label: "Inference Latency", value: "3.965567" },
        ],
        [
            { label: "Time", value: "5 mins ago" },
            { label: "Model ID", value: "Speedster" },
            { label: "Total Latency", value: "2.334" },
            { label: "Inference Latency", value: "2.234567" },
        ],
        [
            { label: "Time", value: "10 mins ago" },
            { label: "Model ID", value: "TurboBoost" },
            { label: "Total Latency", value: "1.987" },
            { label: "Inference Latency", value: "1.567891" },
        ],
        [
            { label: "Time", value: "20 mins ago" },
            { label: "Model ID", value: "HyperDrive" },
            { label: "Total Latency", value: "4.123" },
            { label: "Inference Latency", value: "4.567890" },
        ],
    ];
    const requestData = [
        { time: "2 mins ago", modelId: "BlazingDrive", totalLatency: "1.2s", inferenceLatency: "0.8s" },
        { time: "4 mins ago", modelId: "BlazingDrive", totalLatency: "1.5s", inferenceLatency: "1.0s" },
        { time: "6 mins ago", modelId: "BlazingDrive", totalLatency: "1.3s", inferenceLatency: "0.9s" },
    ];
    return (
        <>
            <div className="flex justify-between">
                <div className="md:w-0 2xl:w-[22%] md:w-[19%]">
                    <SideBAr />
                </div>
                <div className=" md:w-full lg:w-[81%] 2xl:w-[78%]  bg-[#3B3F3F] h-full sm-w-full">
                    <div className='mb-28 lg:container lg:mx-auto'>
                        <header className="header-mob lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] h-14 py-4  px-6">
                            <h5>Dashboard</h5>
                            <div className="float-right mt-[-23px] lg:mt-[-34px]">
                                <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
                            </div>
                        </header>
                        <div className="container mx-auto p-6 lg:px-16 2xl:px-[100px]">
                            <div className="deshboard-content ">
                                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box">
                                    {boxes.map((box, index) => (
                                        <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E] rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full">
                                            <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                                <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                                    <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                                </div>
                                                <div>
                                                    <p className="sm-hidden md:block">{box.text}</p>
                                                    <h4>{box.value}</h4>
                                                </div>
                                            </div>
                                            <p className="sm:block md:hidden">{box.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="chart-box rounded-md lg:rounded-xl 2xl:rounded-2xl bg-[#2C2E2E] mt-4 lg:mt-6 mb-8">
                                    <div className="border-[#414545] border-b p-4 lg:px-5">
                                        <h4 className="text-18-sm">
                                            Daily Points
                                        </h4>
                                    </div>
                                    <div className="chart px-1 pb-4">
                                        <Chart />
                                    </div>
                                </div>
                                <div className="desktopTable rounded-md lg:rounded-xl 2xl:rounded-2xl bg-[#2C2E2E] sm-hidden lg:block">
                                    <div className="border-[#414545] border-b p-4 lg:px-5">
                                        <h4 className="text-xl font-semibold text-white">
                                            Request History
                                        </h4>
                                    </div>

                                    <table className="w-full text-left">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 ">Time</th>
                                                <th className="px-6 py-3 ">Model ID</th>
                                                <th className="px-6 py-3 ">Total Latency</th>
                                                <th className="px-6 py-3 ">Inference Latency</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {requestData.map((item, index) => (
                                                <tr key={index} className="hover:bg-[#414545] transition duration-200 rounded-2xl"> {/* Hover effect */}
                                                    <td className="px-6 py-3 ">{item.time}</td>
                                                    <td className="px-6 py-3 ">{item.modelId}</td>
                                                    <td className="px-6 py-3 ">{item.totalLatency}</td>
                                                    <td className="px-6 py-3 ">{item.inferenceLatency}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table  >
                                </div>
                                <div className="sm:block md:hidden">
                                    <h4 className="text-18-sm">
                                        Request History
                                    </h4>
                                    <div className="detail-box-container">
                                        {detailBoxes.map((details, index) => (
                                            <div key={index} className="detail-box p-4 bg-[#2C2E2E]  lg:rounded-xl 2xl:rounded-2xl grid grid-cols-2 gap-4 my-4">
                                                {details.map((detail, detailIndex) => (
                                                    <div key={detailIndex} className="detail-item">
                                                        <h5>{detail.label}</h5>
                                                        <p>{detail.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default Deshboard;
