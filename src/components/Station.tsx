import { useState, useEffect } from "react";
import Device from "./Device";

const devices = ["Дробилка", "Конвейер", "Пресс", "Упаковка"];

const Station = () => {
  const [devicesStatus, setDevicesStatus] = useState<{
    [key: string]: boolean;
  }>(Object.fromEntries(devices.map((name) => [name, false])));

  const handleToggle = (name: string, status: boolean) => {
    setDevicesStatus((prev) => ({ ...prev, [name]: status }));
  };

  const allDevicesOff = Object.values(devicesStatus).every((status) => !status);

  useEffect(() => {
    // console.log(devicesStatus);
  }, [devicesStatus]);

  return (
    <div className={`p-4 ${allDevicesOff ? "bg-gray-100" : "bg-green-100"}`}>
      <h1 className="text-2xl font-bold mb-4">Станция сортировки</h1>
      <div className="flex">
        {devices.map((device, index) => (
          <Device key={index} name={device} onToggle={handleToggle} />
        ))}
      </div>
      <div className="mt-5 font-bold">
        <p>Статус станции: {allDevicesOff ? "Неактивна" : "Активна"}</p>
      </div>
    </div>
  );
};

export default Station;
