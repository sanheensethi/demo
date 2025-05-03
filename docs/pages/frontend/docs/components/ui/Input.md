### 📄 Component: `Input`

#### 🧩 Description

The `Input` component is a reusable and memoized wrapper around the native `<input>` element. It supports various input types (`text`, `date`, `number`, etc.), integrates with form state management, handles placeholders intelligently, and allows conditional disabling and requirement. It defaults to `text` type and uses the `label` as the fallback placeholder.

#### 🧱 Props

| Name          | Type     | Required | Default  | Description                                                            |
| ------------- | -------- | -------- | -------- | ---------------------------------------------------------------------- |
| `label`       | `string` | Yes      | —        | Label shown above the input field.                                     |
| `name`        | `string` | Yes      | —        | Name attribute for the input element.                                  |
| `type`        | `string` | No       | `"text"` | Type of input field (e.g., `"text"`, `"date"`, `"number"`).            |
| `value`       | `string` | No       | `""`     | Current value of the input field.                                      |
| `placeholder` | `string` | No       | `label`  | Placeholder text inside the input. Defaults to label if not provided.  |
| `onChange`    | `func`   | No       | —        | Function called on input change.                                       |
| `disabled`    | `bool`   | No       | `false`  | If `true`, disables the input field.                                   |
| `required`    | `bool`   | No       | `false`  | If `true`, marks the field as required and shows a `*` in the label.   |
| `...rest`     | `any`    | No       | —        | Any additional props passed to the input element (e.g., `min`, `max`). |

#### 🔗 Dependencies

* **Libraries:** React (`React.memo` for performance optimization)

#### 📤 Emits / Events

| Event        | Description                                    |
| ------------ | ---------------------------------------------- |
| `onChange()` | Triggered whenever the input value is updated. |

#### 🧑‍💻 Example Usage

```jsx
<Input
  label="User Name"
  name="username"
  value={formData.username}
  onChange={handleChange}
  required
/>

<Input
  label="Date of Birth"
  name="dob"
  type="date"
  value={formData.dob}
  onChange={handleChange}
/>
```
