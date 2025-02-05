# АРМ Оператора станции сортировки фракций вторсырья

Проект представляет собой визуальную панель управления станцией сортировки вторсырья. В нём реализована схема с несколькими устройствами (например, "Дробилка", "Конвейер", "Пресс"б "Упаковка"), каждое из которых можно включать и выключать через интерактивные кнопки. При этом:

- **При включении** устройство подсвечивается **зелёным**,
- **При выключении** — **красным**,
- Отображается текущий статус устройства (Включено/Выключено, В процессе работы, Завершено).

Также реализован общий индикатор статуса станции (например, если все устройства выключены, статус станции – "Неактивна"), симуляция процесса (через 5 секунд после включения устройство переходит в состояние "Завершено") и логирование действий оператора в консоль.

## Деплой

Проект задеплоен и доступен по ссылке:  
[sorting-station.onrender.com](https://sorting-station.onrender.com/)

## Функциональность

- **Отображение станции сортировки:**  
  Схема с устройствами:

  - **Дробилка**
  - **Конвейер**
  - **Пресс**
  - **Упаковка**

- **Управление устройствами:**

  - Каждое устройство можно включить или выключить при помощи кнопок.
  - При изменении состояния устройства оно подсвечивается (зелёным для включенного, красным для выключенного).
  - Текущий статус устройства отображается рядом с элементом управления.

- **Общий статус станции:**  
  Отображается индикатор, показывающий активность станции (например, "Неактивна", если все устройства выключены).

- **Симуляция процесса:**  
  Через 5 секунд после включения устройство автоматически переходит в состояние "Завершено".

- **Логирование действий:**  
  Все действия оператора (включение/выключение устройств) логируются в консоль.

## Технологии

- **React** (хуки, компоненты)
- **TypeScript** – типизация данных устройств
- **Tailwind CSS** – стилизация интерфейса
- **Vite** – сборка и разработка
- **Jest** и **React Testing Library** – unit-тестирование

## Установка и запуск

1. **Клонирование репозитория:**

   ```bash
   git clone https://github.com/KanatJuzbayev/sorting-station.git
   cd sorting-station
   ```

## UML-диаграммы

В репозитории имеется папка `diagrams`, содержащая файлы с UML-диаграммами в форматах **.puml** и **.png**.
Использованно [PlantUML](https://plantuml.com/ru/):

- **Диаграмма состояний устройств:**  
  [device-states.puml](./diagrams/device-states.puml) | [device-states.png](./diagrams/device-states.png)

- **Диаграмма последовательности действий оператора:**  
  [operator-sequence.puml](./diagrams/operator-sequence.puml) | [operator-sequence.png](./diagrams/operator-sequence.png)

Также можно воспользоваться следующими онлайн-ссылками для просмотра диаграмм:

- [Диаграмма состояний устройств](https://editor.plantuml.com/uml/bP4z2i9048NxGEwmjP0BM8Zt40c2TchXJvz4_051nCPMF8465pOn9bTuSoFVIa0qYbWik_FcpUCRjZcUT4QJwQ3lEgrQMtbUGs4dQwIuoaQMqBWXTvsgLbfz518WbmMqX192-onFE5EAPAtgjBpC6MYRzcFiCuPDEyYC9GjeXVZDyKVudaBCVY2hP_YHOeBCoWg6in5xAIEhxk-4Ms95vCjmucriYmmfuHA5meRmp6cug0UdKNoV7ol5k9Px6DTfzePT_iiT)

- [Диаграмма последовательности действий оператора](https://editor.plantuml.com/uml/pPCnJy905CVt9lqEBqoG89iBWs5mON9GFi25djYaN4bxC0CcniI1nCL9OrnS2rf5rEChlFj6lhjMqe8nZavjtxt___tVhsqhbYoImtxWEgmhmmZm3jUOwZ4cUefAZrrdG0r-rnym8U6GZ_mkBzUE9PD-ACh5JjjrN6VR3FOESeicu2qc-69FbfW2hl0J5RMlS6cp-2Cc-MPWTYtgpvZm0duIzde1hzP-weYvRCT7eYgZ8Q_LpQE9Eeoh5Rm6N5CifIyetaHFA819YNCgJVLLfUINBzY4KEJZ1ElpEbZVGjODYFocf2KKSxlX0jynfJkpj6Tdn5ciWew4dJPfxctdiq48kLZX4ogWn8fo6wWpuwLdhkFntIIkqsWq01_jIqZn5VQDDCMLFZV6GAUcQPSTFX2DD_omesbI1YSnS2X4GkNfRyXFMH1lCxyXsSBuwKkxbleRvSpgVsCkrBu_s1ON7lrMNm00)
