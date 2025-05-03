### 📄 Component: `TransactionDetail`

#### 🧩 Description

The `TransactionDetail` component serves as the main container for managing transaction creation or editing. It integrates tab-based navigation, form management, modal alerts, and bottom-bar actions for submission. It uses the `useTransactionData` hook to manage all transaction-related state and logic.

#### 🧱 Props

| Name   | Type | Required | Default | Description                                                                          |
| ------ | ---- | -------- | ------- | ------------------------------------------------------------------------------------ |
| *None* | —    | —        | —       | This component does not accept any props; all logic is internally handled via hooks. |

#### 🔗 Dependencies

* **Child components:**

  * `RightSidebar` – Displays the transaction status.
  * `StepTabs` – Handles tab-based navigation across transaction steps.
  * `TransactionForm` – A dynamic form to view/edit transaction data.
  * `BottomBar` – Provides fixed bottom buttons (`Save`, `Validate`, `Next`).
  * `FloatingMessageCenter` – Displays floating messages or alerts.

* **Hooks:**

  * `useTransactionData` – Custom hook that encapsulates transaction-related state, form handlers, validation, and submission.

#### 📤 Emits / Events

| Event                  | Description                            |
| ---------------------- | -------------------------------------- |
| `handleSubmit("save")` | Triggers transaction save logic.       |
| `validatePage()`       | Triggers form validation.              |
| `handleNext()`         | Moves to the next form step.           |

#### 🧑‍💻 Example Usage

```jsx
import TransactionDetail from "./components/TransactionDetail";

function App() {
  return (
    <div>
      <TransactionDetail />
    </div>
  );
}
```

### Related Docs:
|Doc|Link|
|----|----|
|TransactionForm|[Link](./forms/transaction-form/transactionForm.md)|
|useTransaction|[Link](../hooks/useTransaction.js)|
|RightSideBar|[Link](./RightSideBar.md)|
|StepTabs|[Link](./StepTabs.md)|
|BottomBar|[Link](./BottomBar.md)|
|FloatingMessageCenter|[Link](./FloatingMessageCenter.md)|
