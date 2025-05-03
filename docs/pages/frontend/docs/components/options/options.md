## ✅ `yesNoOption`

### 📋 Description

The `yesNoOption` constant provides a standardized array of options for binary "Yes" or "No" selection inputs. It is typically used in dropdowns, radio buttons, or any UI component that requires a simple boolean choice.

---

### 🧾 Structure

```js
[
  { value: "Yes", display_value: "Yes" },
  { value: "No", display_value: "No" }
]
```

* `value`: The actual value submitted or processed.
* `display_value`: The text shown to the user.

---

### 🧪 Example Usage

#### With a `Select` Component

```jsx
import { yesNoOption } from "./constants/options";
import { Select } from "../components/ui/Select";

<Select
  label="Do you agree?"
  name="agreement"
  value={formState.agreement}
  onChange={handleChange}
  options={yesNoOption}
/>
```

#### You can use it with RadioGroup also.

---

### 🚀 Use Cases

* Consent forms ("Do you agree?")
* Configuration toggles ("Enable feature?")
* Binary questions in forms or surveys
