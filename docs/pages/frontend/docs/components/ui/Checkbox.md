### 📄 Component: `CheckboxGroup`

#### 🧩 Description

The `CheckboxGroup` is a reusable form component for handling multiple selections via checkboxes. It supports dynamic options, controlled component state, and integrates well with form data structures. It allows toggling values in a group and supports disabling the entire group.

#### 🧱 Props

| Name       | Type     | Required | Description                                                                                                        |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`    | `string` | Yes      | Label displayed above the checkbox group.                                                                          |
| `name`     | `string` | Yes      | Name for the checkbox group, used in the change event payload.                                                     |
| `value`    | `array`  | Yes      | Current selected values (array of strings).                                                                        |
| `options`  | `array`  | Yes      | Array of options in the form `{ value: string, display_value: string }`.                                           |
| `onChange` | `func`   | Yes      | Callback triggered when any checkbox is toggled. Provides a synthetic event with `target.name` and `target.value`. |
| `disabled` | `bool`   | No       | If `true`, disables all checkboxes in the group.                                                                   |

#### 🧑‍💻 Example Usage

```jsx
<CheckboxGroup
  label="Client Types"
  name="clientTypes"
  value={formData.clientTypes}
  onChange={handleChange}
  options={[
    { value: "corporate", display_value: "Corporate" },
    { value: "individual", display_value: "Individual" },
    { value: "government", display_value: "Government" }
  ]}
/>
```

#### 📤 Emits / Event Structure

The `onChange` callback returns an event-like object:

```js
{
  target: {
    name: 'clientTypes',
    value: ['corporate', 'individual'] // array of selected values
  }
}
```

#### 💡 Features

* Dynamically render any number of checkbox options.
* Easy integration with form state management.
* Supports disabling all checkboxes with a single flag.
