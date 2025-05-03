## 📄 Component: `SelectCurrency`

### 🧩 Description

`SelectCurrency` is a React component that integrates the `useCurrency` custom hook to fetch a list of available currencies and display them in a dropdown list using a `Select` component. This component allows users to select a currency from the available options and automatically updates the parent component with the selected value.

---

### 🔧 How It Works

* **Integration with `useCurrency`:** The `SelectCurrency` component uses the `useCurrency` custom hook to fetch currency data (such as currency codes).
* **Form Handling:** The component receives several props (e.g., `label`, `name`, `value`, `onChange`, etc.) to handle the form input behavior and customizations.
* **Conditional Rendering:** The `SelectCurrency` component conditionally disables the dropdown if the `disabled` prop is passed.

---

### 🧑‍💻 Example Usage

```javascript
import React, { useState } from "react";
import { SelectCurrency } from "./components/SelectCurrency";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <SelectCurrency
        label="Select Currency"
        name="currency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        required={true}
      />
      <p>Selected Currency: {selectedCurrency}</p>
    </div>
  );
};
```

### 🧱 Dependencies

* **`useCurrency`:** This component relies on the `useCurrency` custom hook to fetch currency data from the backend API.
* **`Select`:** It uses a reusable `Select` component to render the dropdown list for currency selection.

---

### ⚙️ Customization

* **Backend Integration:** The `useCurrency` hook fetches currency data from the backend URL configured in `config["backend-url"]`. Update the configuration file to match your actual backend endpoint.
* **Value Handling:** The selected currency code is passed back to the parent component via the `onChange` prop.
* **Caching:** Currency data may be cached using `localStorage` or any caching strategy of your choice.

### Related Docs

|Doc|Link|
|----|----|
|useCurrency|[Link](../../../hooks/useCurrency.md)|
|Select|[Link](../../ui/Select.md)|
