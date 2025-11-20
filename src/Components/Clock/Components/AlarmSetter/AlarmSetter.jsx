import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const AlarmSetter = ({setAlarms}) => {
  // const [state, setState] = useState(value)
  const [height, setHeight] = useState("h-[8rem]");
  const [visibility, setVisibility] = useState(true);
  const [headingText, setHeadingText] = useState("Alarm Clock");
  const [ampm, setAmpm] = useState("left-[0%]");
  const [hourHand, setHourHand] = useState(0);
  const [minHand, seTminHand] = useState(0);
  const [label, setLabel] = useState(null)

  const openAlarmSetting = () => {
    setHeight("h-[80%]");
    setVisibility(!visibility); //false
    setHeadingText("Set your alarm");
    const currentHour = new Date().getHours()
    const currentMin = new Date().getMinutes()
    setHourHand(currentHour > 12 ? currentHour -12 : currentHour)
    seTminHand(currentMin)
  };

  const closeAlarmSetting = () => {
    setHeight("h-[8rem]");
    setVisibility(!visibility); //true
    setHeadingText("Alarm Clock");
  };

  const selectAm = () => {
    setAmpm("left-[0%]");
    setLabel("am")
  };

  const selectPm = () => {
    setAmpm("left-[50%]");
    setLabel("pm")
  };

  const increaseHour = () => {
    setHourHand(hourHand + 1);
    if (hourHand === 12) {
      setHourHand(1);
    }
  };

  const decreaseHour = () => {
    setHourHand(hourHand - 1);
    if (hourHand === 1) {
      setHourHand(12);
    }
  };

  const increaseMin = () => {
    seTminHand(minHand + 1);
    if (minHand === 59) {
      seTminHand(0);
    }
  };

  const decreaseMin = () => {
    seTminHand(minHand - 1);
    if (minHand === 0) {
      seTminHand(59);
    }
  };

  const confirmAlarm = () =>{
    setAlarms((prev) =>[
      ...prev,
      {
        id: prev + 1,
        hourTime: hourHand.toString().padStart(2, '0'),
        minuteTime: minHand.toString().padStart(2, '0'),
        label: label
      }
    ])

    setHeight("h-[8rem]")
    setVisibility(!visibility)

  }

  return (
    <section
      className={`relative bg-[#03045e] text-white ${height} rounded-b-4xl p-2 duration-300 ease-in-out`}
    >
      <h4 className="text-center font-semibold">{headingText}</h4>

      {/* this is the action buttons  */}

      <div className="w-full absolute -bottom-3 left-0 flex justify-around px-5">
        <button
          onClick={closeAlarmSetting}
          className={`bg-amber-600 btn ${!visibility ? "block" : "hidden"}`}
        >
          <IoIosCloseCircle />
        </button>
        <button
          onClick={openAlarmSetting}
          className={`bg-amber-600 btn ${visibility ? "block" : "hidden"}`}
        >
          <IoAddCircle />
        </button>
        <button
        onClick={confirmAlarm}
          className={`bg-amber-600 btn ${!visibility ? "block" : "hidden"}`}
        >
          <TiTick />
        </button>
      </div>

      {/* hour hand  */}

      <div
        className={`flex justify-center items-center gap-5 mt-20 ${
          visibility ? "hidden" : "block"
        }`}
      >
        <p onClick={decreaseHour} className="text-5xl cursor-pointer">
          -
        </p>
        <p className="text-5xl font-semibold">
          {hourHand.toString().padStart(2, "0")}
        </p>
        <p onClick={increaseHour} className="text-5xl cursor-pointer">
          +
        </p>
      </div>

        {/* minute hand  */}

      <div
        className={`flex justify-center items-center gap-5 mt-5 ${
          visibility ? "hidden" : "block"
        }`}
      >
        <p onClick={decreaseMin} className="text-5xl cursor-pointer">-</p>
        <p className="text-5xl font-semibold">
          {minHand.toString().padStart(2, "0")}
        </p>
        <p onClick={increaseMin} className="text-5xl cursor-pointer">+</p>
      </div>

      {/* am pm  */}

      <div  
        className={`flex border w-fit mx-auto mt-12 rounded-2xl py-1 relative ${
          visibility ? "hidden" : "block"
        }`}
      >
        <p onClick={selectAm} className="px-8 z-10">
          AM
        </p>
        <p onClick={selectPm} className="px-8 z-10">
          PM
        </p>
        <div
          className={`absolute w-[50%] ${ampm} top-0 bg-amber-600 h-full rounded-2xl duration-200`}
        ></div>
      </div>
    </section>
  );
};

export default AlarmSetter;
