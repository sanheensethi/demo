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

### 4. 🧱 Pages/Components
| Component/Pages             | Description                                         | Page/Component |
|------------------------|-----------------------------------------------------|----|
| [TransactionDetails](./docs/components/transaction-details.md) | Transaction Details Page | Page |
| [BottomBar](./docs/components/BottomBar.md) | Bottom Bar Component | Reusable Component |

### 5. 🪝 Custom Hooks
| Hook                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [useTransaction](./docs/hooks/useTransaction.md)        | Transaction Details Custom Hook                 |
| [useCountries](./docs/hooks/useCountries.md)        | Fetches country list |                |
| [useCurrency](./docs/hooks/useCurrency.md)        | Fetches currency list based on country                 |
| [useCompanyType](./docs/hooks/useCompanyType.md)        | Fetches company type based on country                 |
| [useExchanges](./docs/hooks/useExchanges.md)        | Fetches exchanges list                |
| [useRegulatoryBody](./docs/hooks/useRegulatoryBody.md)        | Fetches regulatory body list based on country                 |
| [useUBO](./docs/hooks/useUBO.md)        |     UBO Handeling           |


### 6. Utils
| Utility                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [utils](./docs/utils/utils.md)        | Fetches transaction data based on ID                 |
| [validation](./docs/utils/validation.md) | Form Validation Utility that validate the form data |

### 7. Reusable UI Components
| UI Components                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [Input](./docs/components/ui/Input.md)        |   Reusable Input               |
| [Checkbox](./docs/components/ui/Checkbox.md)        |   Reusable Checkbox |
| [MultiTextInput](./docs/components/ui/MultiTextInput.md)        |   Reusable MultiTextInput |
| [RadioGroup](./docs/components/ui/RadioGroup.md)        |   Reusable RadioGroup |
| [Select](./docs/components/ui/Select.md)        |   Reusable Select |
| [Textarea](./docs/components/ui/Textarea.md)        |   Reusable Textarea |
| [subHeadWithButton](./docs/components/ui/subHeadWithButton.md)        |   Reusable subHeadWithButton |

### 8. Reusable Selectors
| Selectors                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [Country](./docs/components/selectors/country/selectCountry.md)        |   Reusable Select Country               |
| [Company Type](./docs/components/selectors/companyType/selectCompanyType)        |   Reusable Select Company Type |
| [Currency](./docs/components/selectors/currency/selectCurrency.md)        |   Reusable Select Currency |

### 9. Reusable Options
| Options                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [options](./docs/components/options/options.md)        |   Reusable Options (e.g. Yes/No)     |

### 10. Forms
| Forms                   | Description                                         |
|------------------------|-----------------------------------------------------|
| [transactionForm](./docs/components/forms/transaction-form/transactionForm.md)        |   Transaction Form used in Transaction Details Page  |

### 11. 🔁 Flow of Execution
| Component              | Description                                         |
|------------------------|-----------------------------------------------------|
| [TransactionDetails Flow](./docs/flows/TransactionDetailsFlow.md) | Step-by-step lifecycle and execution flow           |
