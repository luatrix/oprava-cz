# 📄 Итоговый документ требований (Landing Page: Dokonalá Oprava)

## 0. Общий принцип

* ❗ Все тексты использовать **строго без изменений** (копипаста из исходных документов)
* ❗ Если блок есть в любом из документов — он ОБЯЗАТЕЛЕН
* ❗ При конфликте структуры:

  * структура = из `OnlyGPT`
  * внедрение/замены = из `I+GPT`

---

# 1. HERO (первый экран)

## Заменить текущий блок полностью

### Заголовок (из OnlyGPT)

```
Oprava praček, myček a sušiček v Praze
```

### Подзаголовок (из OnlyGPT)

```
Rychlý servis do 24 hodin. Opravy všech značek. Férové ceny bez skrytých poplatků.
```

### CTA кнопка

```
Objednat opravu
```

### Дополнительно (из I+GPT)

* оставить номер телефона
* акцент на “rychlá oprava”
* визуал техника оставить

---

# 2. Блок: Co nabízíme → ЗАМЕНИТЬ

## Полностью заменить текущий блок на (из I+GPT)

```
⚡ Rychlá oprava – přijedeme ještě dnes nebo zítra  
🔧 Zkušený technik – opravy všech značek  
🛡 Záruka na opravu – jistota kvality  
🏠 Opravy u vás doma – bez nutnosti odvozu
```

---

# 3. Новый блок: O nás (добавить)

## Добавить НОВЫЙ блок (из OnlyGPT)

```
Už více než 5 let pomáháme domácnostem v Praze obnovit funkčnost jejich spotřebičů.
Naší prioritou je rychlost, kvalita a férový přístup ke každému zákazníkovi.
```

---

# 4. Блок услуг (расширенный SEO блок)

## Добавить/расширить (из OnlyGPT)

```
Oprava praček Praha  
Oprava myček Praha  
Oprava sušiček Praha  
Servis domácích spotřebičů Praha
```

---

# 5. Блок цен (переработка)

## Основа из I+GPT (замена текущего блока)

```
Cena opravy se obvykle pohybuje mezi 800 – 2000 Kč.
```

## Добавить из I+GPT:

```
Diagnostika zdarma při opravě  
Výjezd po Praze zdarma
```

## Добавить факторы (оставить текущие + I+GPT)

* stav zařízení
* typ závady
* přístup k zařízení

---

# 6. Блок доверия / преимущества

## Добавить (из OnlyGPT)

```
✔ Rychlý příjezd  
✔ Férové ceny  
✔ Zkušenosti  
✔ Záruka na práci
```

---

# 7. Отзывы (опционально, но включить)

## Из OnlyGPT (без изменений текста)

```
Petr, Praha: Skvělý servis, přijeli ještě ten den.  
Jana, Praha: Oprava rychlá a bez problémů.
```

⚠️ Примечание:
если нет реальных отзывов — оставить, но лучше позже заменить

---

# 8. Контактный блок (оставить + усилить)

## Оставить текущую форму

## Добавить (из OnlyGPT):

```
Zavolejte nám nebo odešlete poptávku
```

## Усиление CTA:

```
Objednat opravu ještě dnes
```

---

# 9. Footer (обновить)

## Заменить график работы (из I+GPT)

```
Po – Pá: 7.00 – 19.00  
So: 7.00 – 16.00
```

---

# 10. SEO требования

## Добавить (из OnlyGPT)

Создать отдельные страницы:

```
/oprava-pracek-praha  
/oprava-mycek-praha  
/oprava-susicek-praha
```

## Ключевые слова:

```
oprava praček Praha  
oprava myček Praha  
oprava sušiček Praha  
servis spotřebičů Praha
```

---

# 11. Аналитика (уже внедрено)

* GA4 (G-49WRGREL5V)
* Google Ads (AW-17121369422)
* событие: `ads_conversion___1` на submit формы

---

# 12. UX требования

* фиксированный header оставить
* CTA кнопки в hero обязательны
* форма — основной конверсионный элемент
* структура:

  ```
  Hero → Výhody → O nás → Služby → Cena → Kontakt → Footer
  ```