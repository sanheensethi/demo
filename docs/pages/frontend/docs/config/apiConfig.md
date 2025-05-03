# 🌐 API Configuration: `apiConfig.js`

This file contains centralized definitions for all backend API endpoint paths grouped by domain. These keys are used throughout the application to make backend calls in a consistent and maintainable manner.

---


---

## 📌 Purpose

- To define and organize all API endpoint routes.
- To ensure maintainability by avoiding hardcoded URL paths throughout the codebase.
- To facilitate clear grouping of API actions by feature/module (e.g., property, transaction, client).

---

## 🗂️ Structure

The configuration is structured as a nested object grouped by module/feature name. Each key maps to a route provided by the backend server.

---

## 🧱 API Modules and Routes

### 🔑 `property`
| Action                          | Endpoint             |
|---------------------------------|----------------------|
| `getPropertyDetailsByRequestId` | `/get_properties`    |
| `getPropertyDetailsByPropertyId`| `/get_property_details` |
| `updateProperty`                | `/update_property`   |

---

### 🔁 `transaction`
| Action                              | Endpoint                   |
|-------------------------------------|----------------------------|
| `getTransactionDetailsByRequestId`  | `/get_transaction`         |
| `getTransactionDetailsByTransactionId` | `/get_transaction_details` |
| `updateTransaction`                 | `/update_transaction`      |

---

### 📋 `requestTable`
| Action         | Endpoint          |
|----------------|-------------------|
| `updateRequest`| `/update-request` |

---

### 🧍‍♂️ `clientCounterparty`
| Action                      | Endpoint              |
|-----------------------------|-----------------------|
| `getEntityByRequestId`      | `/get_entity`         |
| `getDeligenceType`          | `/get_deligence_type` |
| `getEntityDetailsByEntityId`| `/get_entity_details` |
| `addEntity`                 | `/add_entity`         |

---

### 🏢 `corporateStructure`
| Action                | Endpoint                 |
|-----------------------|--------------------------|
| `saveCorporateStructure` | `/save_corporate_structure` |
| `getCorporateStructure`  | `/get_corporate_structure`  |

---

### 🧑‍💼 `managementStructure`
| Action                   | Endpoint              |
|--------------------------|-----------------------|
| `saveManagementStructure`| `/save-management-data` |
| `getManagementStructure` | `/get-management-data`  |

---

### ✉️ Miscellaneous
| Action             | Endpoint              |
|--------------------|-----------------------|
| `sendMail`         | `/send_mail`          |
| `update_diligence` | `/update_deligence_status` |

---

## ✅ Usage Example

```js
import { apiConfig } from "@/config/apiConfig";
import config from "@/config/config";

const url = `${config["backend-url"]}${apiConfig.transaction.getTransactionDetailsByTransactionId}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

