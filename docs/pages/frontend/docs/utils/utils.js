## 📄 Utility Functions:

### 🧩 Description

This utility module provides two helper functions:

* `createPrivateEvent`: Simulates a React-like event object.
* `formatDataForMessage`: Converts an ISO timestamp into a user-friendly, localized string.

These utilities are useful in form handling and date formatting within UI applications.

---

## 📦 Exports

### 1. 📝 `createPrivateEvent(name, value)`

#### 📋 Description

Creates a synthetic event object similar to what React form elements return. This is useful when manually triggering form state updates via custom components or logic.

#### ✅ Parameters

| Name  | Type   | Description                 |
| ----- | ------ | --------------------------- |
| name  | string | The name of the form field. |
| value | any    | The value of the field.     |

#### 🔁 Returns

```js
{
  target: {
    name: string,
    value: any
  }
}
```

#### 💡 Example

```js
const syntheticEvent = createPrivateEvent("email", "john@example.com");
handleChange(syntheticEvent); // triggers form change handler
```

---

### 2. 🕒 `formatDataForMessage(timestamp)`

#### 📋 Description

Formats a UTC timestamp string into a human-readable format using British English locale (`en-GB`), including the date and time.

#### ✅ Parameters

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| timestamp | string | An ISO timestamp without a timezone. |

> ⚠️ Note: Automatically appends `"Z"` to interpret the timestamp as UTC.

#### 🔁 Returns

A formatted date string like: `03/05/2025, 03:45:12 PM`

#### 💡 Example

```js
const formatted = formatDataForMessage("2025-05-03T10:15:30");
console.log(formatted); // "03/05/2025, 11:15:30 AM" (depending on timezone)
```

---

## ✅ Use Cases

* Triggering synthetic form events for controlled components.
* Displaying server timestamps in a more user-friendly format in messages or logs.
