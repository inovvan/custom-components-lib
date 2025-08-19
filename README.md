# custom-components-lib

A modern, reusable, and fully typed **React component library**, built from scratch using **TypeScript**, **SCSS Modules**, and **MUI-inspired** design principles.

🔗 [View the task description](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view)

---

## ✨ Features

- 📦 Ready-to-use UI components
- 🎨 Built with SCSS Modules and customizable via props
- ⚛️ Written in modern React with TypeScript
- 📖 Storybook documentation for every component
- 🧩 Designed for seamless integration into external React projects
- 🚀 Published as an NPM package

---

## 🧱 Available Components

The library currently includes the following UI elements:

| Component   | Description                                |
| ----------- | ------------------------------------------ |
| `Button`    | Customizable MUI-style button              |
| `TextField` | Input with label, variants and sizes       |
| `Checkbox`  | Styled checkbox with accessibility support |
| `Modal`     | Simple dialog modal with backdrop          |
| `Select`    | Dropdown select component                  |
| `Switch`    | Toggle switch component                    |

---

## 📦 Installation

Install the library via npm:

```bash
npm i novvenny-custom-components-lib
```

## 🚀 Usage Example

```tsx
import {
  Button,
  TextField,
  Modal,
  Checkbox,
  Select,
  Switch,
} from "novvenny-custom-components-lib";

function App() {
  return (
    <div>
      <TextField label="Username" variant="outlined" />
      <Checkbox label="Accept Terms" />
      <Button size="large" onClick={() => alert("Clicked!")}>
        Submit
      </Button>
    </div>
  );
}
```

Each component supports standard props and MUI-like variants and sizes where applicable.

## 📕 Storybook

The project includes a full Storybook setup with isolated previews for every component.

Run locally:

```bash
npm run storybook
```

Then open http://localhost:6006 in your browser.

## 🧪 Тестирование

The project uses Jest and React Testing Library for unit testing of components.

### Запуск тестов

```bash
npm run test
```
