### 📄 Component: `MultiTextInput`

#### 🧩 Description

`MultiTextInput` is a dynamic, reusable component that allows users to input multiple text values under a single field label. It’s ideal for forms where multiple entries for the same category (e.g., partners, aliases, tags) are needed. Users can click a **"+"** button to add new inputs dynamically.

---

#### 🧱 Props

| Name          | Type       | Required | Description                                                                 |
| ------------- | ---------- | -------- | --------------------------------------------------------------------------- |
| `label`       | `string`   | ✅ Yes    | Label displayed above the inputs.                                           |
| `name`        | `string`   | ✅ Yes    | Field name used in the `onChange` callback to identify the array of values. |
| `values`      | `array`    | ❌ No     | Array of strings representing the current values (default: `[]`).           |
| `placeholder` | `string`   | ❌ No     | Placeholder text for inputs (defaults to `label` if not provided).          |
| `onChange`    | `function` | ✅ Yes    | Callback when any value is added/edited. Returns a synthetic event.         |
| `disabled`    | `boolean`  | ❌ No     | If true, disables input fields and add button.                              |
| `required`    | `boolean`  | ❌ No     | If true, the first input is marked as required.                             |

---

#### 📤 Event Format

On each input addition or change, the `onChange` function is called with a synthetic event:

```js
{
  target: {
    name: "fieldName",
    value: ["value1", "value2", ...]  // updated array of input values
  }
}
```

---

#### 🧑‍💻 Example Usage

```jsx
<MultiTextInput
  label="Partners"
  name="partners"
  values={formData.partners}
  onChange={handleChange}
  required={true}
/>
```

---

#### 💡 Features

* Dynamic input fields managed as a single array in form state.
* Add new entries with a `+` button.
* Controlled via props for full form integration.
* First input can be required; others optional.
* Clean integration with `<Input />` component for consistency.
