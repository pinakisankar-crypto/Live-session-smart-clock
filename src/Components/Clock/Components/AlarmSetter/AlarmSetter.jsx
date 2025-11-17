import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const AlarmSetter = () => {
  // const [state, setState] = useState(value)
  const [height, setHeight] = useState("h-[8rem]");
  const [visibility, setVisibility] = useState(true)
  const [headingText, setHeadingText] = useState("Alarm Clock")

  const openAlarmSetting = () => {
    setHeight("h-[80%]");
    setVisibility(!visibility) //false
    setHeadingText("Set your alarm")
  };

    const closeAlarmSetting = () => {
    setHeight("h-[8rem]");
    setVisibility(!visibility) //true
    setHeadingText("Alarm Clock")
  };

  return (
    <div
      className={`relative bg-[#03045e] text-white ${height} rounded-b-4xl p-2 duration-300 ease-in-out`}
    >
      <h4 className="text-center font-semibold">{headingText}</h4>
      <div className="w-full absolute -bottom-3 left-0 flex justify-around px-5">
        <button onClick={closeAlarmSetting} className={`bg-yellow-500 btn ${!visibility ? "block" : "hidden"}`}>
          <IoIosCloseCircle />
        </button>
        <button onClick={openAlarmSetting} className={`bg-yellow-500 btn ${visibility ? "block" : "hidden"}`}>
          <IoAddCircle />
        </button>
        <button className={`bg-yellow-500 btn ${!visibility ? "block" : "hidden"}`}>
          <TiTick />
        </button>
      </div>
    </div>
  );
};

export default AlarmSetter;
