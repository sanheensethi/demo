## 📄 Validation Utility: `createValidator` & `validationRules`

### 🧩 Description

This utility provides a flexible and reusable way to perform form validations in React or any JavaScript project using a schema-based approach. It includes:

* `createValidator`: A function to generate a form validator from a schema.
* `validationRules`: A set of common validation rule factories.

---

### ⚙️ Features

* Define validations in a declarative schema.
* Reuse rules like `required`, `minLength`, `equals`, `dateAfter`, etc.
* Pass contextual message transformers for localization or formatting.
* Easily extend with custom validation rules.

---

## 🧪 `createValidator(schema, context?)`

### ✅ Parameters

* **`schema`**: An object where keys are field names and values are arrays of rule objects.
* **`context`** *(optional)*: Object that may contain a `messageTransformer` function for translating/formatting error messages.

### 🔁 Returns

A function `(formData) => errors | null`, which:

* Returns `null` if all validations pass.
* Returns an object of field-wise error messages if validation fails.

---

## 🔧 `validationRules`

Factory functions for commonly used rules.

### 📚 Built-in Rules

| Rule Name                      | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `required(message)`            | Checks if value is non-empty and not `"None"`.     |
| `numeric(message)`             | Ensures value is a number.                         |
| `minLength(n, message)`        | Minimum number of characters.                      |
| `maxLength(n, message)`        | Maximum number of characters.                      |
| `equals(field, message)`       | Compares value to another field's value.           |
| `inRange(min, max, msg)`       | Checks numeric range.                              |
| `isBoolean(message)`           | Value must be `true` or `false`.                   |
| `notEmpty(message)`            | Value should not be empty string.                  |
| `dateAfter(field, msg)`        | Checks if date is after another date field.        |
| `atLeastOneValueNotEmpty(msg)` | For arrays — ensures at least one non-empty value. |

---

## 🚀 Example Usage

### Step 1: Define Validation Schema

```js
import { createValidator, validationRules } from "../utils/validator";

const schema = {
  username: [
    validationRules.required("Username is required"),
    validationRules.minLength(3, "Username must be at least 3 characters")
  ],
  password: [
    validationRules.required("Password is required"),
    validationRules.minLength(6, "Password must be at least 6 characters")
  ],
  confirmPassword: [
    validationRules.equals("password", "Passwords must match")
  ],
  age: [
    validationRules.numeric("Age must be a number"),
    validationRules.inRange(18, 99, "Age must be between 18 and 99")
  ],
  isActive: [
    validationRules.isBoolean("Must be true or false")
  ]
};
```

### Step 2: Create Validator

```js
const validateForm = createValidator(schema);
```

### Step 3: Validate Form Data

```js
const formData = {
  username: "jsmith",
  password: "123456",
  confirmPassword: "123456",
  age: "25",
  isActive: true
};

const errors = validateForm(formData);

if (errors) {
  console.log("Validation errors:", errors);
} else {
  console.log("Form is valid");
}
```

---

## 🧩 Extending With Custom Rules

You can create and use your own rule:

```js
const customRule = (message) => ({
  validator: (value) => value.startsWith("A"),
  message
});

const schema = {
  name: [customRule("Name must start with A")]
};
```
