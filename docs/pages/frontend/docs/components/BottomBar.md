## 📄 `BottomBar` Component

### 🧩 Overview

The `BottomBar` is a reusable footer-style action bar component for displaying a set of customizable buttons (e.g., **Save**, **Validate**, etc.). It includes optional confirmation modals for critical actions like saving or validating data, enhancing UX and safety.

---

### 🚀 Features

* Renders a dynamic list of buttons based on props.
* Optional confirmation modal for sensitive actions (like Save/Validate).
* Supports disabling individual buttons.
* Clean and flexible styling via CSS (`BottomBar.css`).

---

### 🏗️ Props

#### `buttons` (required)

An array of button configuration objects.

Each object can include:

| Property           | Type       | Description                                                            |
| ------------------ | ---------- | ---------------------------------------------------------------------- |
| `label`            | `string`   | Text displayed on the button.                                          |
| `onClick`          | `function` | Callback function executed on click.                                   |
| `disabled`         | `boolean`  | If `true`, disables the button and dims it visually.                   |
| `style`            | `object`   | Optional inline styles for the button.                                 |
| `skipConfirmation` | `boolean`  | If `true`, skips confirmation modal (useful for non-critical actions). |

---

### 📥 Sample Usage

```jsx
import BottomBar from "./BottomBar";

const buttons = [
  {
    label: "Save",
    onClick: () => console.log("Saving data..."),
    style: { backgroundColor: "green", color: "white" },
  },
  {
    label: "Cancel",
    onClick: () => console.log("Cancelled."),
    style: { backgroundColor: "grey", color: "white" },
  },
];

<BottomBar buttons={buttons} />;
```

---

### 🎯 Confirmation Modal Behavior

* Appears only for `"Save"` or `"Validate"` buttons unless `skipConfirmation` is set to `true`.
* Prompts the user with a message like:

  * `"Do you want to save your data?"`
  * `"Do you want to validate your data?"`
* Clicking **OK** proceeds with the action.
* Clicking **Cancel** dismisses the modal without executing the action.

---

### 🧪 Edge Cases

* Disabling a button will also dim its appearance and block interaction.
* If no `onClick` is passed, clicking will have no effect.
* Only `"save"` and `"validate"` labels (case-insensitive) trigger the modal by default.
