import { useState, useEffect } from "react";

import Device from "./Device";

const Station = () => {
  const [devicesStatus, setDevicesStatus] = useState<{
    [key: string]: boolean;
  }>({
    Дробилка: false,
    Конвейер: false,
    Пресс: false,
  });

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
        <Device name="Дробилка" onToggle={handleToggle}></Device>
        <Device name="Конвейер" onToggle={handleToggle}></Device>
        <Device name="Пресс" onToggle={handleToggle}></Device>
      </div>
    </div>
  );
};

export default Station;
