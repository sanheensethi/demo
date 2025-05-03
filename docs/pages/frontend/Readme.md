# 🧾 Frontend Documentation Booklet

## 📚 Table of Contents

### 1. Config
| **Config**             | **Description**                                     |
|------------------------|-----------------------------------------------------|
| [config](./docs/config/config.md) | Config for url's backend or 3rd party used accross the application |
| [apiConfig](.docs/config/apiConfig.md) | Config for api endpoints of backend or 3rd party |

### 2. Factory
| Factory             | Description                                         |
|------------------------|-----------------------------------------------------|
| [factory/*](./docs/services/factory.md)                    | Mapping from API Response to Local form Data              |
| [apiFactory/*](./docs/services/apiFactory.md)              | Mapping from Local form Data to API Request Data          |

### 3. 🗃️ Shared Data
| Service                | Description                                         |
|------------------------|-----------------------------------------------------|
| [sharedData](./docs/services/sharedData.md)              | Global reactive state using |

### 3. 🗃️ Observables
| Observers                | Description                                         |
|------------------------|-----------------------------------------------------|
| [deligenceObservable](./docs/observers/deligenceObservable.md)              | The Observer Pattern is used across the application to enable components to react and update dynamically in response to data changes |
| [riskAssesContObservable](./docs/observers/riskAssesContObservable.md)      | The application leverages the Observer Pattern to coordinate behavior between components by subscribing to shared data streams, ensuring real-time updates and consistent state across the UI. |

### 4. 🧱 Components
| Component              | Description                                         |
|------------------------|-----------------------------------------------------|
| [TransactionDetails](./docs/components/TransactionDetails.md) | Displays transaction detail using `useTransaction` |

### 5. 🪝 Custom Hooks
| Hook                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [useTransaction](./docs/hooks/useTransaction.md)        | Fetches transaction data based on ID                 |


### 6. 🔁 Flow of Execution
| Component              | Description                                         |
|------------------------|-----------------------------------------------------|
| [TransactionDetails Flow](./docs/flows/TransactionDetailsFlow.md) | Step-by-step lifecycle and execution flow           |
