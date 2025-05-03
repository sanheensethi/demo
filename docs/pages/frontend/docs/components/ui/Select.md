### 📄 Component: `Select`

#### 🧩 Description

The `Select` component renders a styled HTML `<select>` dropdown, allowing users to pick one option from a list. It supports labels, controlled values, disabled state, and dynamic options.

---

#### 🧱 Props

| Name        | Type       | Required | Description                                                                 |
|-------------|------------|----------|-----------------------------------------------------------------------------|
| `label`     | `string`   | ✅ Yes   | The label shown above the select dropdown.                                 |
| `name`      | `string`   | ✅ Yes   | The `name` attribute used in form submission and event handling.           |
| `value`     | `string`   | ❌ No    | The currently selected value (default is `"None"`).                         |
| `options`   | `array`    | ✅ Yes   | Array of option objects `{ value, display_value }` to render as dropdown items. |
| `onChange`  | `function` | ✅ Yes   | Callback when user selects an option.                                      |
| `disabled`  | `boolean`  | ❌ No    | Disables the dropdown when set to `true`.                                  |
| `required`  | `boolean`  | ❌ No    | Makes the field required for form submission.                              |

---

#### ⚠️ Note
- The first option is always `"Select an option"` with value `"None"`.
- There is a redundant use of the `selected` attribute inside `<option>`; React manages `value` via the `select` tag. It can be removed safely for cleaner React behavior.

---

#### 🧑‍💻 Example Usage

```jsx
<Select
  label="Choose Currency"
  name="currency"
  value={formData.currency}
  onChange={handleChange}
  options={[
    { value: "USD", display_value: "US Dollar" },
    { value: "EUR", display_value: "Euro" },
    { value: "INR", display_value: "Indian Rupee" }
  ]}
  required={true}
/>
```

---

#### 💡 Features

- Fully controlled component with `value` and `onChange`.
- Gracefully handles `disabled` and `required` props.
- Simple and reusable across forms and modules.
- Styled with `form-group` class for easy integration with custom CSS.
