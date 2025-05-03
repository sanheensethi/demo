## 📄 Hook: `useCompanyType`

### 🧩 Description

`useCompanyType` is a custom React hook designed to fetch the available company types for a given country from a backend API. It uses the `fetch` API to send a POST request to retrieve company types, which are then stored in the state and returned.

---

### 🔧 How It Works

* **State Management:** It uses React’s `useState` to manage the list of company types.
* **Effect Hook:** It utilizes the `useEffect` hook to trigger the API call whenever the `country` parameter changes.
* **Authorization:** The hook retrieves an authentication token from `localStorage` and includes it in the `Authorization` header of the request.

---

### 🧑‍💻 Backend Integration

The hook makes an API call to the backend with the following configuration:

* **Endpoint:** `/get_company_types`

* **HTTP Method:** `POST`

* **Request Body:** `{ "country": "COUNTRY_NAME" }`

  * `country`: The name of the country for which the company types are being fetched.

* **Response:** The API returns a list of company types associated with the provided country, in the following format:

  ```json
  [
    { "CompanyType": "Private Limited" },
    { "CompanyType": "Public Limited" },
    { "CompanyType": "LLC" }
  ]
  ```

* **Error Handling:**

  * Logs an error message to the console if the API call fails.
  * If the country is not found, it logs a warning.

---

### 🧱 Example Usage

```javascript
import useCompanyType from "../hooks/useCompanyType";

const MyComponent = () => {
  const country = "India"; // Example country
  const companyTypes = useCompanyType(country);

  return (
    <div>
      <h3>Company Types in {country}</h3>
      <ul>
        {companyTypes.map((type, index) => (
          <li key={index}>{type.CompanyType}</li>
        ))}
      </ul>
    </div>
  );
};
```

### 🛠 Dependencies

* `react`: For using React hooks like `useState` and `useEffect`.
* `config`: To fetch the backend URL configuration.

---

### ⚠️ Notes

* **Authorization:** The hook retrieves the authentication token from `localStorage`, so ensure the user is authenticated before using this hook.
* **Error Handling:** The hook logs any errors that occur during the API call to the console. You may want to handle errors differently in a production environment.

---

### 🧑‍💻 Customization

* **Backend URL:** You can modify the `config["backend-url"]` in the `config.js` file to match your backend service's base URL.
* **Response Handling:** You can extend the hook to support different error handling or data transformation needs based on your requirements.
