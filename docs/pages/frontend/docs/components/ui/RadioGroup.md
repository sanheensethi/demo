### 📄 Component: `RadioGroup`

#### 🧩 Description

`RadioGroup` is a reusable form component that renders a group of radio buttons based on provided options. It allows users to select a single value from multiple predefined choices.

---

#### 🧱 Props

| Name       | Type       | Required | Description                                                                 |
|------------|------------|----------|-----------------------------------------------------------------------------|
| `label`    | `string`   | ✅ Yes   | The label displayed above the radio button group.                          |
| `name`     | `string`   | ✅ Yes   | The `name` attribute shared by all radio inputs for grouping.              |
| `value`    | `string`   | ✅ Yes   | The currently selected value in the group.                                 |
| `options`  | `array`    | ✅ Yes   | Array of option objects `{ value, display_value }` to render.              |
| `onChange` | `function` | ✅ Yes   | Callback function called when the selected radio button changes.           |
| `disabled` | `boolean`  | ❌ No    | Disables all radio inputs when `true`.                                     |
| `required` | `boolean`  | ❌ No    | Marks the group as required, requiring one option to be selected.          |

---

#### 🧑‍💻 Example Usage

```jsx
<RadioGroup
  label="Transaction Type"
  name="transactionType"
  value={formData.transactionType}
  onChange={handleChange}
  required={true}
  options={[
    { value: "Sale", display_value: "Sale" },
    { value: "Purchase", display_value: "Purchase" },
    { value: "Letting", display_value: "Letting" }
  ]}
/>
```

---

#### 💡 Features

- Dynamically renders radio buttons from options array.
- Fully controlled component using `value` and `onChange`.
- Accessible and form-ready with support for `required` and `disabled`.
- Custom styling support via class names like `custom-checkbox`, `checkmark`, etc.
