## 📄 Component: `SelectCountry`

### 🧩 Description

`SelectCountry` is a React component that renders a country selection dropdown using a custom `Select` component. The list of countries is fetched using the `useCountries` custom hook, and the selected country is passed back via the `onChange` callback.

---

### 🔧 How It Works

* **State Management:** The selected country is managed using the `value` prop.
* **Country Data:** The component uses the `useCountries` hook to retrieve a list of countries.
* **Select Component:** It passes the list of countries as options to the `Select` component, which renders the dropdown.
* **Props:**

  * `label`: The label displayed above the select dropdown.
  * `name`: The name of the select element.
  * `value`: The currently selected country.
  * `onChange`: Callback function triggered when the selected country changes.
  * `required`: If true, marks the dropdown as a required field.
  * `disabled`: If true, disables the dropdown.

---

### 🧑‍💻 Example Usage

```javascript
import React, { useState } from "react";
import { SelectCountry } from "../components/ui/SelectCountry";

const MyForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <form>
      <SelectCountry
        label="Select Your Country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        required={true}
      />
    </form>
  );
};
```
---

### ⚙️ Customization

* **Country Data:** The list of countries is fetched via the `useCountries` hook. Customize this hook to fetch data from your desired source (e.g., API, static data).
* **Error Handling:** The component assumes the `useCountries` hook handles errors internally. You may want to add additional error handling or fallback UI for a better user experience.

### Related Docs:

|Doc|Link|
|----|----|
|useCountries|[Link](../../../hooks/useCountries.md)|
|Select|[Link](../../ui/Select.md)|
