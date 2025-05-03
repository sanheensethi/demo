# 🏭 Factory: API to Frontend Data Mapper

## 📌 Purpose

Factory functions are used to **convert raw API response data into a structured frontend format** that matches the internal data model used across components, forms, and business logic.

This ensures:
- 🔄 Consistent data shape across the app
- 📦 Cleaner and safer data handling in UI components
- 🚫 Avoidance of direct dependency on API response structure

## 🧪 Example Usage

```js
import { ClientCounterpartyFactory } from "@/services/factory/ClientCounterpartyFactory";

const responseFromAPI = await getEntityDetails();
const formattedData = ClientCounterpartyFactory("abc-entity-id", responseFromAPI);

// Use `formattedData` safely in UI forms, tables, etc.
```


## ✅ Best Practices

* Always use factories to handle API responses.
* Avoid directly using API response in components/forms.
