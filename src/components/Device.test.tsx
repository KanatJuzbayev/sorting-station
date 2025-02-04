import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Device from "./Device";

jest.useFakeTimers();

describe("Device Component", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Используем фейковые таймеры
  });

  afterEach(() => {
    jest.useRealTimers(); // Возвращаем настоящие таймеры после каждого теста
  });

  test("проверяет начальный рендер и статус устройства", () => {
    render(<Device name="Дробилка" onToggle={jest.fn()} />);
    expect(screen.getByText("Дробилка")).toBeInTheDocument();
    expect(screen.getByText("Статус: Выключено")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Включить/i })
    ).toBeInTheDocument();
  });

  test("переключает состояние устройства", () => {
    const onToggleMock = jest.fn();
    render(<Device name="Конвейер" onToggle={onToggleMock} />);
    const button = screen.getByRole("button", { name: /Включить/i });
    fireEvent.click(button);
    expect(screen.getByText("Статус: В процессе работы")).toBeInTheDocument();
    expect(onToggleMock).toHaveBeenCalledWith("Конвейер", true);
  });

  test("устройство автоматически выключается через 5 секунд", () => {
    const onToggleMock = jest.fn();

    render(<Device name="Пресс" onToggle={onToggleMock} />);

    // Нажимаем кнопку "Включить"
    fireEvent.click(screen.getByText("Включить"));

    // Проверяем, что устройство включилось
    expect(screen.getByText("Статус: В процессе работы")).toBeInTheDocument();
    expect(onToggleMock).toHaveBeenCalledWith("Пресс", true);

    // Симулируем прохождение 5 секунд
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Проверяем, что устройство выключилось
    expect(screen.getByText("Статус: Завершено")).toBeInTheDocument();
    expect(onToggleMock).toHaveBeenCalledWith("Пресс", false);
  });

  test("проверяет изменение стиля устройства при включении/выключении", () => {
    const onToggleMock = jest.fn();
    render(<Device name="Дробилка" onToggle={onToggleMock} />);

    const deviceContainer = screen.getByText("Дробилка").parentElement;
    const button = screen.getByRole("button", { name: /Включить/i });

    // Проверяем начальный стиль (выключено)
    expect(deviceContainer).toHaveClass("bg-gray-300");

    // Включаем устройство
    fireEvent.click(button);

    // Проверяем стиль после включения
    expect(deviceContainer).toHaveClass("bg-green-500");

    // Выключаем устройство
    fireEvent.click(button);

    // Проверяем стиль после выключения
    expect(deviceContainer).toHaveClass("bg-gray-300");
  });

  test("проверяет изменение текста кнопки при включении/выключении устройства", () => {
    const onToggleMock = jest.fn();
    render(<Device name="Дробилка" onToggle={onToggleMock} />);

    const button = screen.getByRole("button", { name: /Включить/i });

    // Проверяем начальный текст кнопки
    expect(button).toHaveTextContent("Включить");

    // Включаем устройство
    fireEvent.click(button);

    // Проверяем текст кнопки после включения
    expect(button).toHaveTextContent("Выключить");

    // Выключаем устройство
    fireEvent.click(button);

    // Проверяем текст кнопки после выключения
    expect(button).toHaveTextContent("Включить");
  });
});
