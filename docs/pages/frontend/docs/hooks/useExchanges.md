## 📄 Custom Hook: `useExchanges`

### 🧩 Description

`useExchanges` is a custom React hook that fetches a list of recognized exchanges from the backend API and returns the data. It first checks if the data is available in the local storage for optimized access. If the data is not in local storage, it fetches the exchanges from the API, stores them in local storage for future use, and returns the data.

---

### 🔧 How It Works

1. **Local Storage Check:**
   Upon component mount, `useExchanges` checks if the exchange data is cached in the browser's local storage. If the data is found, it directly uses the cached data.

2. **API Call:**
   If the exchange data is not found in local storage, an API call is made to retrieve the list of exchanges from the backend.

3. **Caching Data:**
   After the data is successfully fetched, it is stored in the local storage to avoid making redundant API requests in future renders.

4. **State Management:**
   The hook uses `useState` to manage the exchanges state and `useEffect` to perform side effects such as fetching data when the component is mounted.

---

### ⚙️ Usage

You can use the `useExchanges` hook in your React components to retrieve the list of recognized exchanges.

#### Example:

```javascript
import React from "react";
import useExchanges from "./hooks/useExchanges";

const ExchangesList = () => {
  const exchanges = useExchanges();  // Get exchanges from the custom hook

  return (
    <div>
      <h2>Recognized Exchanges</h2>
      <ul>
        {exchanges.map((exchange, index) => (
          <li key={index}>{exchange.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

#### Steps:

1. **Install the hook:**

   * The `useExchanges` hook can be imported and used in any React component to fetch exchange data.
2. **Retrieve Exchanges:**

   * The hook returns an array of exchanges.

---

### 📦 Dependencies

* **LocalStorage:** The exchanges are cached in `localStorage` to reduce network calls on subsequent loads.
* **Backend API:** The backend API should provide a `/recognised_exchange` endpoint to fetch the list of exchanges.

---

### 🛠️ Error Handling

The hook includes basic error handling:

* If the API request fails, the error is logged to the console.
* If exchanges are not available in local storage and the API call fails, no exchanges will be returned, but the app will still function.

---

### ⚡ Performance Optimizations

* **Caching:** Data is cached in local storage for better performance, reducing the need for repeated API calls.
* **Use of `useEffect`:** The hook ensures that the data is fetched only once when the component mounts, preventing unnecessary requests.

---

### ⚠️ Notes

* **API Response Format:** Ensure that the backend provides a response in the expected format (an array of exchange objects).
* **Error Logging:** Consider adding user-friendly error messages for failed API requests.
* **Customizable:** You can adjust the backend URL in the `config.js` file based on your backend setup.
