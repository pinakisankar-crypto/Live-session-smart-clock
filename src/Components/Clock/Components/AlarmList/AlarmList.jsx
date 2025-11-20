import {useEffect, useRef , useState} from "react";
import { MdDelete } from "react-icons/md";
import alarmAudio from "../../../../assets/alarm.mp3"


const AlarmList = ({ alarms, setAlarms }) => {


  const alarmTone = useRef(new Audio(alarmAudio))
  
  const [visibility, setVisibility] = useState(false)
  const [activatedAlarmId, setActivatedAlarmID] = useState(null)

  const deleteAlarm = (id) =>{
    const updatedAlarm =  alarms.filter((alarm) => alarm.id !== id)
    setAlarms(updatedAlarm)
  }

  const stopAlarm = () =>{
    alarmTone.current.pause()
    setVisibility(false)
    deleteAlarm(activatedAlarmId)
  }

  useEffect(() =>{
    const interval = setInterval(() =>{
      const now = new Date();
      const currentHour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
      const currentMinute = now.getMinutes()
      const currentAmPm = now.getHours() > 12 ? "pm" : "am"

      alarms.forEach((alarm) =>{
        const settedHour = alarm.hourTime
        const settedMin = alarm.minuteTime
        const settedAmPm = alarm.label;

        if(settedHour === currentHour.toString().padStart(2, '0') && settedMin === currentMinute.toString().padStart(2, '0') && settedAmPm === currentAmPm){
          alarmTone.current.play()
          setVisibility(true)
          setActivatedAlarmID(alarm.id)
        }
      })

    },1000)

    return () =>{
      clearInterval(interval)
    }

  },[alarms])


  return (
    <section className="py-6 px-3">
      {alarms.map((alarm, id) => (
        <div key={id} className="my-2 flex items-center justify-between">
          <p className="text-3xl font-semibold">
            {alarm.hourTime} : {alarm.minuteTime} <sup>{alarm.label}</sup>{" "}
          </p>
          <p onClick={ () => deleteAlarm(alarm.id)} className="text-red-500 cursor-pointer text-2xl">
            <MdDelete />
          </p>
        </div>
      ))}

{visibility && (
        <div className="w-full h-full absolute top-0 left-0 bg-blue-950 flex items-center justify-center" >
        <div onClick={stopAlarm} className="border border-purple-500 text-purple-500 w-[15rem] h-[15rem] rounded-full flex justify-center items-center cursor-pointer" >
          <h4 className="text-5xl font-semoibold" >STOP</h4>
        </div>
      </div>
)}

    </section>
  );
};

export default AlarmList;
