import {useState, useEffect} from "react";
import AlarmSetter from "./Components/AlarmSetter/AlarmSetter";
import AlarmList from "./Components/AlarmList/AlarmList";
import VoiceCommand from "./Components/VoiceCommand/VoiceCommand";

const Clock = () => {

  const [alarms, setAlarms] = useState(JSON.parse(localStorage.getItem('alarms')) || [])

  useEffect(() => {
    localStorage.setItem('alarms', JSON.stringify(alarms))
  },[alarms])
  
  return (
    <section className="flex justify-center items-center h-[92vh]">
      <div className="clock-card relative overflow-hidden">
        <AlarmSetter setAlarms={setAlarms} />
        <AlarmList alarms={alarms} setAlarms = {setAlarms} />
        <VoiceCommand setAlarms={setAlarms} />
      </div>
    </section>
  );
};

export default Clock;
