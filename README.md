# CycleTrack - Керування станом 

## Виконані завдання

### Context API (Тема)
- ✅ Створено `ThemeContext` з провайдером
- ✅ Перемикач теми у верхньому правому куті (🌙/☀️)
- ✅ Світла тема: білий фон, темний текст
- ✅ Темна тема: темно-сірий фон, білий текст
- ✅ Тема застосована до всіх екранів
- ✅ Збереження вибору теми в AsyncStorage

### Redux (Нагадування)
- ✅ Створено `remindersSlice` з редюсерами:
  - `addReminder` - додавання нагадування
  - `removeReminder` - видалення нагадування
  - `toggleReminder` - відмітка про виконання
- ✅ Налаштовано `store` з `configureStore`
- ✅ Підключено `Provider` в `App.tsx`
- ✅ Нова вкладка "Нагадування" в нижньому меню
- ✅ Використання `useSelector` та `useDispatch`

### Додаткові вимоги
- ✅ Модульність: окремі файли `ThemeContext.tsx`, `remindersSlice.ts`
- ✅ Пропси: передача ID для видалення
- ✅ Чистота коду: константи `SIZES`, `TYPOGRAPHY`, `FONT_WEIGHT`

## Скріншоти
- 1_home-dark.png
- 1_home-light.png
- 2_add entry-dark.png
- 2_add entry-light.png
- 3_statistics-dark.png
- 3_statistics-light.png
- 4_advice-dark.png
- 4_advice-light.png
- 5_advice details-dark.png
- 5_advice details-light.png
- 6_reminder-dark.png
- 6_reminder-light.png
- 7_drawer-menu-dark.png
- 7_drawer-menu-light.png