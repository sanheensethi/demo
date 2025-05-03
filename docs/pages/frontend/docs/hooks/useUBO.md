## 📄 Custom Hook: `useUBO`

### 🧩 Description

`useUBO` is a custom React hook designed to manage the state of a UBO (Ultimate Beneficial Owner) form. It provides a structured way to handle different types of updates like changing the UBO type, updating percentage ownership, and modifying form fields dynamically.

---

### ⚙️ Features

* Maintains UBO type and associated data in a unified state.
* Supports updates to:

  * UBO type (and resets data).
  * Ownership percentage.
  * Individual fields within the data object.
* Clean, predictable API for form handling with a single update function.

---

### 🚀 Usage

#### Import & Initialize

```js
import { useUBO } from "../hooks/useUBO";

const [uboState, updateUBOState] = useUBO();
```

#### State Structure

```js
uboState = {
  type: '',        // Type of UBO
  data: {},        // Dynamic field values
  percentage: 0    // Ownership percentage (if updated)
}
```

#### Dispatch Actions

```js
updateUBOState({ type: "CHANGE_TYPE", payload: "Individual" });

updateUBOState({ type: "CHANGE_PERCENTAGE", payload: 25 });

updateUBOState({ 
  type: "UPDATE_FIELD", 
  payload: { field: "fullName", value: "John Doe" } 
});
```

---

### 📦 Hook Signature

```ts
const [uboState, updateUBOState] = useUBO(initialState);
```

* `initialState` *(optional)*: Custom initial state. Defaults to:

  ```js
  { type: '', data: {} }
  ```

* `uboState`: The current UBO state object.

* `updateUBOState`: Function to dispatch actions for updating the state.

---

### 🔁 Supported Action Types

| Action Type         | Payload Format                  | Description                         |
| ------------------- | ------------------------------- | ----------------------------------- |
| `CHANGE_TYPE`       | `string`                        | Sets new UBO type and clears data.  |
| `CHANGE_PERCENTAGE` | `number`                        | Sets the `percentage` field.        |
| `UPDATE_FIELD`      | `{ field: string, value: any }` | Updates a specific field in `data`. |

---

### 📌 Notes

* The hook is ideal for multi-step forms or dynamically rendered UBO sections.
* Fields are stored in a flexible `data` object to allow varied structures based on UBO type.
* This hook returns an array similar to `useState`, enabling easy destructuring.
