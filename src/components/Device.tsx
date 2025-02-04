import { useState, useEffect } from "react";

interface DeviceProps {
  name: string;
}

const Device = ({ name }: DeviceProps) => {
  const [isOn, setIsOn] = useState(false);
  const [status, setStatus] = useState("Выключено");

  useEffect(() => {
    if (isOn) {
      setStatus("В процессе работы");
      const timer = setTimeout(() => {
        setIsOn(false);
        setStatus("Завершено");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOn, name]);

  const handleToggle = () => {
    const newStatus = !isOn;
    setIsOn(newStatus);
    setStatus(newStatus ? "включено" : "выключено");
  };

  return (
    <div className={`p-4 m-2 rounded ${isOn ? "bg-green-200" : "bg-red-200"}`}>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Статус: {status}</p>
      <button
        onClick={handleToggle}
        className={`mt-2 px-4 py-2 rounded ${
          isOn ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {isOn ? "Выключить" : "Включить"}
      </button>
    </div>
  );
};

export default Device;
