## 📄 Custom Hook: `useRegulatoryBody`

### 🧩 Description

`useRegulatoryBody` is a custom React hook that retrieves a list of regulatory bodies based on the selected country. It handles data fetching, error logging, and manages state internally, allowing developers to easily use the data within their components without worrying about request logic.

---

### ⚙️ Features

* Dynamically fetches regulatory bodies using the selected country.
* Automatically updates the list when the `country` dependency changes.
* Handles API errors gracefully with console warnings and logs.
* Retrieves authentication token from `localStorage`.
* Returns a list of regulatory bodies for easy use in dropdowns or other UI components.

---

### 🚀 Usage

#### Import & Call

```js
import useRegulatoryBody from "../hooks/useRegulatoryBody";

const Component = ({ country }) => {
  const regulatoryBodies = useRegulatoryBody(country);

  return (
    <select>
      {regulatoryBodies.map((body, index) => (
        <option key={index} value={body.id}>{body.name}</option>
      ))}
    </select>
  );
};
```

#### Props

* `country` (string): The country code or name to fetch regulatory bodies for.

---

### 🔁 Dependencies

* **React**: Uses `useState` and `useEffect` for state management and side effects.
* **localStorage**: Used to retrieve the token for authenticated requests.
* **config**: Uses an external config file for the backend URL.

---

### 📦 Hook Return Value

* **Array**: Returns an array of regulatory body objects, each containing properties as returned by the backend (e.g., `id`, `name`, etc.).

---

### 📌 Notes

* The hook only runs when a valid `country` value is provided.
* The hook is self-contained and abstracts away fetch logic for clean and reusable code.
* Intended to be used inside React components for populating dropdowns or forms dynamically.
