# 🌐 Statický web

Moderní statická webová aplikace. Tento projekt je optimalizován pro rychlost, skvělou uživatelskou zkušenost a snadnou údržbu.

Ostatní poznámky v [POZNAMKY.md](POZNAMKY.md).

## 🚀 Vývoj

### Spuštění lokálního serveru

```bash
yarn dev
```

- nebo v nabídce spuštění úloh `[F5]`

Aplikace poběží na adrese [http://localhost:3000](http://localhost:3000).

---

## 📂 Struktura projektu

- 🧱 `src/components/`: Znovupoužitelné UI komponenty.
- 📄 `src/pages/`: Jednotlivé stránky aplikace (Home, Kontakt, atd.).
- 📦 `src/stores/`: Globální stavy aplikace (Zustand).
- 🎨 `src/styles/`: Globální CSS styly a konfigurace Tailwindu.
- 🔧 `src/utils/`: Pomocné funkce a utility.
- 📁 `public/`: Statické soubory jako obrázky a fonty.

## 🛠️ Technologický stack

- **[Next.js 15](https://nextjs.org/)**: React framework pro vývoj webových aplikací. V tomto projektu je použit pro generování statických stránek (Static Export).
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Moderní CSS framework pro rychlý a flexibilní design přímo v HTML.
- **[Radix UI](https://www.radix-ui.com/)**: Kolekce neostylovaných, přístupných komponent proDropdown menu, Selecty a Switche.
- **[Motion](https://motion.dev/)**: Knihovna pro plynulé a profesionální animace.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Široká knihovna ikon pro moderní design.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Lehká a rychlá správa globálního stavu aplikace.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Výkonný nástroj pro asynchronní správu dat a cachování.
- **[TanStack Form](https://tanstack.com/form/latest)**: Moderní přístup k tvorbě a validaci formulářů.
