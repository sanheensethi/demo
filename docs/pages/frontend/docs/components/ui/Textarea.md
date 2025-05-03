### 📄 Component: `Textarea`

#### 🧩 Description

The `Textarea` component is a reusable, memoized text area input field built using React. It provides a consistent form group layout with a label and support for props like `required`, `disabled`, and `placeholder`.

---

#### 🧱 Props

| Name          | Type     | Required | Description                                                                 |
| ------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `label`       | `string` | ✅ Yes    | The label text shown above the textarea.                                    |
| `name`        | `string` | ✅ Yes    | The `name` attribute for the `<textarea>`, used for form handling.          |
| `type`        | `string` | ❌ No     | Input type (default: `"text"`). Though not required for `<textarea>`.       |
| `value`       | `string` | ❌ No     | The current value of the textarea. Defaults to an empty string `""`.        |
| `placeholder` | `string` | ❌ No     | Placeholder text shown inside the textarea. Defaults to `label` if omitted. |
| `onChange`    | `func`   | ✅ Yes    | Function to call when the value changes.                                    |
| `disabled`    | `bool`   | ❌ No     | Whether the textarea is disabled.                                           |
| `required`    | `bool`   | ❌ No     | Whether the field is required in the form.                                  |

---

#### 🧑‍💻 Example Usage

```jsx
<Textarea
  label="Description"
  name="description"
  value={formData.description}
  placeholder="Enter details here..."
  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
  required
/>
```

---

#### 💡 Features

* Memoized with `React.memo` for performance optimization.
* Automatically appends an asterisk (`*`) to the label if the field is required.
* Graceful fallback for `placeholder` if not explicitly provided.
* Fully supports controlled form handling.

---

#### 🧷 Styling

* Wrapper class: `.form-group`
* You should define `.form-group` and any other custom styles in your stylesheet for consistent layout and spacing.
