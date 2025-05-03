# 🏭 API Factory: Frontend to API Data Mapper

## 📌 Purpose

API Factory functions are used to **convert internal frontend data into a clean format expected by the backend APIs**.

This abstraction ensures:
- 🧼 Sanitized and consistent payload structure
- 🔒 Isolation of backend contract logic
- 💡 Easy extension or debugging of request formatting

---

## 🧪 Example Usage

```js
import { TransactionApiFactory } from "@/src/apiFactory/TransactionApiFactory";

const requestId = "req-123";
const formState = {
  transactionType: "Buy",
  salePrice: 100000,
  ...
};

const apiPayload = TransactionApiFactory(requestId, formState);

// Send this to API using axios or fetch
await axios.post("/update_transaction", apiPayload);
```

## ✅ Best Practices

* Always use `apiFactory` to construct API payloads.
* Keep UI logic decoupled from API format expectations.
