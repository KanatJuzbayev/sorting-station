import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import Station from "./Station";

describe("Station Component", () => {
  test("проверяет корректный рендер всех устройств", () => {
    render(<Station />);

    const devices = ["Дробилка", "Конвейер", "Пресс", "Упаковка"];
    devices.forEach((device) => {
      expect(screen.getByText(device)).toBeInTheDocument();
    });
  });

  test("начальный рендер со всеми выключенными устройствами", () => {
    render(<Station />);
    expect(screen.getByText("Статус станции: Неактивна")).toBeInTheDocument();
  });

  test("изменяет статус станции при включении устройства", () => {
    render(<Station />);
    const button = screen.getAllByRole("button", { name: /Включить/i })[0];
    fireEvent.click(button);
    expect(screen.getByText("Статус станции: Активна")).toBeInTheDocument();
  });

  test("возвращает статус станции к 'Неактивна' при выключении всех устройств", () => {
    render(<Station />);
    const buttons = screen.getAllByRole("button", { name: /Включить/i });
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);
    expect(screen.getByText("Статус станции: Неактивна")).toBeInTheDocument();
  });

  test("проверяет изменение статуса станции при включении/выключении нескольких устройств", () => {
    render(<Station />);

    const buttons = screen.getAllByRole("button", { name: /Включить/i });

    // Включаем первое устройство
    fireEvent.click(buttons[0]);
    expect(screen.getByText("Статус станции: Активна")).toBeInTheDocument();

    // Включаем второе устройство
    fireEvent.click(buttons[1]);
    expect(screen.getByText("Статус станции: Активна")).toBeInTheDocument();

    // Выключаем первое устройство
    fireEvent.click(buttons[0]);
    expect(screen.getByText("Статус станции: Активна")).toBeInTheDocument();

    // Выключаем второе устройство
    fireEvent.click(buttons[1]);
    expect(screen.getByText("Статус станции: Неактивна")).toBeInTheDocument();
  });
});
