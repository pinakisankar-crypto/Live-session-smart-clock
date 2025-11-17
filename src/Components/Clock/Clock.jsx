import React from "react";
import AlarmSetter from "./Components/AlarmSetter/AlarmSetter";
import AlarmList from "./Components/AlarmList/AlarmList";

const Clock = () => {
  return (
    <section className="flex justify-center items-center h-[92vh]">
      <div className="clock-card">
        <AlarmSetter />
        <AlarmList />
      </div>
    </section>
  );
};

export default Clock;
