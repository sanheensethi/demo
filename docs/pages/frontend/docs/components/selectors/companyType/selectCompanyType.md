## 📄 Component: `SelectCompanyType`

### 🧩 Description

`SelectCompanyType` is a React component that renders a dropdown (`<select>`) element to choose a company type based on the selected country. It utilizes the `useCompanyType` custom hook to fetch the company types dynamically from the backend.

---

### 🧱 Props

| Name       | Type     | Required | Description                                                                 |
|------------|----------|----------|-----------------------------------------------------------------------------|
| `label`    | `string` | ✅ Yes   | The label for the dropdown field.                                           |
| `name`     | `string` | ✅ Yes   | The name attribute for the dropdown field.                                   |
| `value`    | `string` | ✅ Yes   | The currently selected value in the dropdown.                                |
| `country`  | `string` | ✅ Yes   | The country used to fetch corresponding company types from the backend.     |
| `onChange` | `func`   | ✅ Yes   | Callback function triggered when the value of the dropdown changes.         |
| `required` | `bool`   | ❌ No    | Marks the dropdown as required.                                             |
| `disabled` | `bool`   | ❌ No    | Disables the dropdown when `true`.                                          |

---

### 💻 Example Usage

```jsx
<SelectCompanyType
  label="Company Type"
  name="companyType"
  value={formData.companyType}
  country={formData.country}
  onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
  required
/>
```

---

### 🔧 How It Works

- **Fetching Data:** `useCompanyType` hook is used to fetch company types from the backend based on the provided country.
- **Rendering Options:** The options are dynamically generated from the company types returned by the API. Each company type is displayed in the dropdown.
- **On Change:** When a selection is made, the `onChange` callback is called with the updated value, allowing you to handle the change in the parent component.

Related Docs:

|Doc|Link|
|----|----|
|useCompanyType|[Link](../../../../hooks/useCompanyType.md)|
|Select|[Link](../../../ui/Select.md)|
