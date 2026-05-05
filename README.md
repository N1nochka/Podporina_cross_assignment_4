# PlasmaDonate - Навігація

## Що зроблено

✅ Коректність навігації:
- Stack Navigation (стрілка ← на екрані "Запис")
- Tab Navigation (4 вкладки: Головна, Запис, Бонуси, Профіль)
- Drawer Navigation (бокове меню: Головна, Підтримка, Вийти)

✅ Передача даних:
- HomeScreen передає preselectedDate на DonateScreen
- Валідація: route.params || {}

✅ Стилізація навігації:
- Кастомний заголовок зі стрілкою (CustomHeader)
- Іконки вкладок: 🏠 📆 💰 👤
- Кольори: активний #D32F2F, неактивний #9E9E9E

✅ Адаптивність: useWindowDimensions

✅ Архітектура:
- Модульність: screens/, components/, navigation/
- Константи: SCREENS.AUTH, SCREENS.HOME тощо
- Коментарі до коду


## Скріншоти

- Вхід: screenshots/login.png
- Реєстрація: screenshots/register.png
- Головний екран: screenshots/home.png
- Запис: screenshots/donate.png
- Бонуси: screenshots/bonuses.png
- Профіль: screenshots/profile.png
- Drawer меню: screenshots/drawer.png

## Посилання

GitHub: https://github.com/N1nochka/Podporina_cross_assignment_4