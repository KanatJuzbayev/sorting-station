import { useState, useEffect } from "react";

import Device from "./Device";

const devices = ["Дробилка", "Конвейер", "Пресс", "Упаковка"];

const Station = () => {
  const [devicesStatus, setDevicesStatus] = useState<{
    [key: string]: boolean;
  }>(Object.fromEntries(devices.map((name) => [name, false])));

  const handleToggle = (name: string, status: boolean) => {
    setDevicesStatus((prev) => ({ ...prev, [name]: status }));
    console.log(devicesStatus);
  };

  useEffect(() => {
    console.log(devicesStatus);
  }, [devicesStatus]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Станция сортировки</h1>
      <div className="flex">
        {devices.map((device, index) => (
          <Device key={index} name={device} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};

export default Station;
