## 📄 Custom Hook: `useCurrency`

### 🧩 Description

`useCurrency` is a custom React hook that fetches a list of available currencies from the backend API and returns the data. It first checks if the data is available in the local storage for optimized access. If the data is not in the local storage, it fetches the currencies from the API, stores them in local storage for subsequent uses, and returns the data.

---

### 🔧 How It Works

1. **Local Storage Check:**
   Upon component mount, `useCurrency` checks if the currencies are already cached in the browser's local storage. If the data is found, it directly uses the cached data.

2. **API Call:**
   If the currencies are not found in local storage, an API call is made to retrieve the list of currencies from the backend.

3. **Caching Data:**
   Once the data is successfully fetched, it is stored in the local storage to avoid redundant API requests in the future.

4. **State Management:**
   The hook uses `useState` to manage the currencies state and `useEffect` to fetch data and perform side effects.

---

### ⚙️ Usage

You can use the `useCurrency` hook in your React components to retrieve the available currencies.

#### Example:

```javascript
import React from "react";
import useCurrency from "./hooks/useCurrency";

const CurrencySelector = () => {
  const currencies = useCurrency();  // Get currencies from the custom hook

  return (
    <div>
      <h2>Select Currency</h2>
      <select>
        {currencies.map((currency, index) => (
          <option key={index} value={currency.CurrencyCode}>
            {currency.CurrencyCode}
          </option>
        ))}
      </select>
    </div>
  );
};
```

#### Steps:

1. **Install the hook:**

   * The `useCurrency` hook can be imported and used in any React component.
2. **Retrieve Currencies:**

   * The hook returns an array of currencies, each containing currency details like `CurrencyCode`.

---

### 📦 Dependencies

* **LocalStorage:** The currencies are cached in `localStorage` to reduce network calls on subsequent loads.
* **Backend API:** The backend API should provide a `/currencies` endpoint to fetch the list of currencies.

---

### 🛠️ Error Handling

The hook includes basic error handling:

* If the API request fails, the error is logged in the console.
* If currencies are not available in the local storage and the API call fails, no currencies will be returned, but the app will still function.

---

### ⚡ Performance Optimizations

* **Caching:** Data is cached in local storage for better performance, reducing the need for repetitive API calls.
* **Use of `useEffect`:** The hook ensures that the data is fetched once when the component mounts, preventing unnecessary requests.

---

### ⚠️ Notes

* **API Response Format:** Ensure that the backend provides a response in the expected format.
* **Error Logging:** For better UX, consider adding user-friendly error messages for failed API requests.
* **Customizable:** You can adjust the backend URL in the `config.js` file based on your backend setup.
