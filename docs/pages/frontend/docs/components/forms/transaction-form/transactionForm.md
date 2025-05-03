## 📄 `TransactionForm` Component

### 🧩 Overview

`TransactionForm` is a reusable, dynamic form component designed for inputting and editing property transaction data, such as **Sale**, **Purchase**, or **Letting**. It supports conditional rendering, read-only states, currency selection, and auto-filled transaction IDs from existing data.

---

### 🚀 Features

* Dynamically displays form sections based on `transactionType`.
* Auto-fills transaction ID from previously saved transactions.
* Handles multiple transaction types: **Sale**, **Purchase**, and **Letting**.
* Controlled form fields using `formData` and `handleChange`.
* Supports read-only and selector-disabled states.
* Validates required fields.
* Integrates custom UI components (`Input`, `Select`, `RadioGroup`, `SelectCurrency`).

---

### 🏗️ Props

| Prop                  | Type       | Description                                                          |
| --------------------- | ---------- | -------------------------------------------------------------------- |
| `formData`            | `object`   | Form state data for controlled inputs.                               |
| `existingTransaction` | `array`    | Array of existing transaction IDs to populate the dropdown.          |
| `handleChange`        | `function` | Change handler for controlled input updates.                         |
| `handleUpdate`        | `function` | Form submit handler (e.g., for updating or saving transaction data). |
| `isReadOnly`          | `boolean`  | If `true`, disables all editable fields except the dropdown.         |
| `isSelectorReadOnly`  | `boolean`  | If `true`, disables the "Quick Fill Existing Transaction" dropdown.  |

---

### 📥 Sample Usage

```jsx
import { TransactionForm } from "./forms/TransactionForm";

<TransactionForm
  formData={formData}
  existingTransaction={[123, 456, 789]}
  handleChange={handleChange}
  handleUpdate={handleUpdate}
  isReadOnly={false}
  isSelectorReadOnly={false}
/>
```

---

### 📦 Component Breakdown

#### Conditional Sections

##### 🟦 Sale

* Currency (via `SelectCurrency`)
* Sale Price
* Sale Type (Freehold / Leasehold)

##### 🟨 Purchase

* Currency
* Purchase Price
* Sale Type (Freehold / Leasehold)

##### 🟧 Letting

* Term (with units: Months/Year)
* Rate Per Annum
* Currency

---

### 📎 Dependencies

* `Input` – Custom input field component
* `Select` – Custom dropdown/select component
* `RadioGroup` – Radio button group component
* `SelectCurrency` – Currency selector tied to supported currency options
