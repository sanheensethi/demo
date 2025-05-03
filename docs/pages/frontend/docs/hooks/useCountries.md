## 📄 Custom Hook: `useCountries`

### 🧩 Description

`useCountries` is a custom React hook that fetches a list of countries from a backend API and caches the data in `localStorage` for future use. It first checks for cached country data in `localStorage` before making an API request to avoid unnecessary network requests. This improves performance by using cached data if available.

---

### 🔧 How It Works

* **State Management:** The list of countries is stored in the `countries` state.
* **Data Fetching:** The hook fetches country data from the backend API endpoint `/get_country`. If the data has already been cached in `localStorage`, it is used directly, avoiding a new API call.
* **Data Caching:** After successfully fetching the country data from the API, it is stored in `localStorage` to cache the results.
* **Error Handling:** The hook includes basic error handling, logging any errors that occur during the fetching process.

---

### 🧑‍💻 Example Usage

```javascript
import React, { useState } from "react";
import useCountries from "../hooks/useCountries";

const CountrySelector = () => {
  const countries = useCountries();

  return (
    <select>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};
```

---

### ⚙️ Customization

* **Backend Endpoint:** The hook uses the backend URL configured in `config["backend-url"]`. Modify this configuration to match your actual backend endpoint.
* **Error Handling:** Currently, the hook only logs errors to the console. You may want to improve this by showing an error message to users if the data fetching fails.
* **Caching Logic:** The hook caches the country data in `localStorage`. This caching mechanism ensures that the data is not refetched every time the component mounts, improving performance. You can modify this caching mechanism or implement a more advanced one based on your needs.

---

### 🧑‍💻 Dependencies

* `config`: A configuration file containing the backend API URL (can be customized).
