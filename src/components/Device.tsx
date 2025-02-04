import { useState, useEffect } from "react";

interface DeviceProps {
  name: string;
  onToggle: (name: string, status: boolean) => void;
}

const Device = ({ name, onToggle }: DeviceProps) => {
  const [isOn, setIsOn] = useState(false);
  const [status, setStatus] = useState("Выключено");

  useEffect(() => {
    if (isOn) {
      setStatus("В процессе работы");
      const timer = setTimeout(() => {
        setIsOn(false);
        setStatus("Завершено");
        onToggle(name, false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOn, name, onToggle]);

  const handleToggle = () => {
    const newStatus = !isOn;
    setIsOn(newStatus);
    setStatus(newStatus ? "включено" : "выключено");

    onToggle(name, newStatus);
  };

  return (
    <div
      className={` shadow-lg rounded-xl  border border-gray-200 hexagon  flex flex-col items-center justify-center p-4 m-2  ${
        isOn
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    >
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Статус: {status}</p>
      <button
        onClick={handleToggle}
        className={`mt-2 px-5 py-2 rounded-lg transition-colors shadow-md ${
          isOn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white font-semibold`}
      >
        {isOn ? "Выключить" : "Включить"}
      </button>
    </div>
  );
};

export default Device;
