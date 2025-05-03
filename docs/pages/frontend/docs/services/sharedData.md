# 📦 SharedData Utility

## 📌 Purpose

`SharedData` is a **singleton helper class** designed to store and manage **shared frontend state across different components** using `localStorage`.

It provides simple methods to `set`, `get`, `delete`, and `clear` key-value pairs while maintaining **session persistence**.

---

## 🌐 Use Case

Useful in scenarios where:
- You want to persist temporary UI/session data across page reloads.
- Need a centralized key-value store shared across components/pages.

---

## 🧬 Singleton Behavior

The class ensures that **only one instance** is used across your application using:

```js
if (!SharedData.instance) {
    this.instance = this;
}
return SharedData.instance;
```

To use it, always import the shared instance:

```js
import { sharedData } from "@/sharedData/sharedData";
```

---

## 🧩 API Methods

### `set(key: string, value: any): void`

Stores the key-value pair in memory and syncs it to `localStorage`.

```js
sharedData.set("userRole", "admin");
```

---

### `get(key: string): any | null`

Retrieves the value for the given key from internal memory. Returns `null` if the key is not found.

```js
const role = sharedData.get("userRole"); // "admin"
```

---

### `delete(key: string): void`

Deletes a specific key from internal data and updates `localStorage`.

```js
sharedData.delete("userRole");
```

---

### `clear(): void`

Clears all stored data and removes `sharedData` from `localStorage`.

```js
sharedData.clear();
```

---

## 📦 Example

```js
// Set some values
sharedData.set("theme", "dark");
sharedData.set("token", "xyz123");

// Retrieve values
const token = sharedData.get("token");

// Remove specific item
sharedData.delete("theme");

// Clear all stored data
sharedData.clear();
```

---

## 🛑 Notes

* All data is serialized as JSON in `localStorage` under the key `sharedData`.
* Avoid storing sensitive or secure data (like passwords or tokens) in plain text.
* Data persists across browser sessions unless cleared manually or via `.clear()`.

---

## ✅ Best Practices

* Use unique and meaningful keys to avoid accidental overwrites.
* Always check for `null` on `get()` before using the value.
* Useful for storing session-level data like filters, UI state, roles, or user preferences.
