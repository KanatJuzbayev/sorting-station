// import { useState } from "react";

import Device from "./Device";

const Station = () => {
  // const [devicesStatus, setDevicesStatus] = useState<{
  //   [key: string]: boolean;
  // }>({
  //   Дробилка: false,
  //   Конвейер: false,
  //   Пресс: false,
  // });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Станция сортировки</h1>
      <div className="flex">
        <Device name="Дробилка"></Device>
        <Device name="Конвейер"></Device>
        <Device name="Пресс"></Device>
      </div>
    </div>
  );
};

export default Station;
