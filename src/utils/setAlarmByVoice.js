import axios from "axios";

const base_url = "https://api.wit.ai/message?v=20251120";

export const setAlarmByVoice = async (transcript, token, setAlarms) => {
  try {
    const response = await axios.get(`${base_url}&q=${transcript}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.data.entities["wit$datetime:datetime"][0].value;
    const actualDate = data
      .toString()
      .substring(0, data.toString().lastIndexOf("-"));
    const date = new Date(actualDate);
    const hourTime =
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minuteTime = date.getMinutes();
    const ampmTime = date.getHours() > 12 ? "pm" : "am";

    setAlarms((prev) => [
      ...prev,
      {
        id: prev + 1,
        hourTime: hourTime.toString().padStart(2, "0"),
        minuteTime: minuteTime.toString().padStart(2, "0"),
        label: ampmTime,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};
