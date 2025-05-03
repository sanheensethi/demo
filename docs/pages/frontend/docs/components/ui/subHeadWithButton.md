### 📄 Component: `SubHeadWithButton`

#### 🧩 Description

The `SubHeadWithButton` component displays a subheading (`<h3>`) along with one or more optional action buttons aligned beside it. Ideal for section headers that require user interaction (e.g., “Manage Users” with an "Add" button).

---

#### 🧱 Props

| Name      | Type     | Required | Description                                                                                                        |
| --------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `heading` | `string` | ✅ Yes    | The main text to display as the subheading.                                                                        |
| `buttons` | `array`  | ❌ No     | An array of button objects, each with `buttonText`, `onClick`, `className`, and optional `style`. Default is `[]`. |

##### Each `button` object can have:

| Key          | Type       | Required | Description                           |
| ------------ | ---------- | -------- | ------------------------------------- |
| `buttonText` | `string`   | ✅ Yes    | Text to display on the button.        |
| `onClick`    | `function` | ✅ Yes    | Callback function triggered on click. |
| `className`  | `string`   | ❌ No     | Additional class(es) for styling.     |
| `style`      | `object`   | ❌ No     | Inline styles for the button.         |

---

#### 🧑‍💻 Example Usage

```jsx
<SubHeadWithButton
  heading="Manage Properties"
  buttons={[
    {
      buttonText: "Add Property",
      onClick: () => console.log("Add clicked"),
      className: "btn-primary"
    },
    {
      buttonText: "Export",
      onClick: () => console.log("Export clicked"),
      className: "btn-secondary",
      style: { marginLeft: "10px" }
    }
  ]}
/>
```

---

#### 💡 Features

* Lightweight memoized component for performance.
* Clean layout with heading + flexible button rendering.
* Accepts custom styling through className and inline `style`.
* Useful for reusable section headers with actions.

---

#### 🧷 Styling

* Main wrapper uses the class: `.subhead`
* Button container uses the class: `.subhead-button`
