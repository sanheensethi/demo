# 📡 EnhancedObservable - Shared Diligence Observer Utility

## 🧠 Overview

`EnhancedObservable` is a **singleton class** used to manage and observe changes to a shared `diligenceStatus` value in the frontend application.  
It maintains a **subscriber list** for reactivity and syncs data with `localStorage` via `sharedData`, allowing **multiple users/components to contribute** to a final diligence state (e.g., `Enhanced`, `Standard`, `Simplified`).

It also syncs with the server using `requestService.updateRequest`.

---

## 📌 Use Case

* When multiple components contribute to the same request’s `Diligence_Status`.
* To create a **real-time-like observable system** in the frontend without using external state management libraries.
* Ideal for collaborative systems.

---

## 🔧 Initialization

The singleton is initialized with a key, but practically always used via the default export:

```js
import { diligenceObservable } from "@/observers/diligenceObservable";
```

---

## 🧬 Internal Structure

### Shared Storage Keys

* `diligenceStatus`: Holds the final resolved value.
* `diligenceObservable`: List of all contributions from different observers (users/components).

Each list entry format:

```ts
{
  value: "Enhanced" | "Standard" | "Simplified",
  by: "observerId",
  isEnhanced: boolean
}
```

---

## 📚 API Reference


| Method                   | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| `isEnhanced()`           | Checks if any entry is enhanced                           |
| `isEnhancedButNotBy(id)` | Checks if someone *else* set Enhanced                     |
| `isEnhancedBy()`         | Returns who set Enhanced                                  |
| `removeByPrefix(prefix)` | Removes all entries where `by` starts with a given prefix |
| `getValue(ownerId)`      | Returns the value submitted by specific observer          |
| `saveValueToServer()`    | Pushes final status to server via `requestService.updateRequest`. |

### `setValue(value: string, ownerId: string): void`

Adds a new entry to the observable list and triggers:

* Subscriber callbacks
* Server update (debounced)

```js
diligenceObservable.setValue("Enhanced", "ComponentA");
```

---

### `getValue(ownerId: string): object | undefined`

Retrieves the value submitted by a specific owner.

```js
const obj = diligenceObservable.getValue("ComponentA");
```

---

### `remove(ownerId: string): void`

Removes the entry from the list for the given owner.

```js
diligenceObservable.remove("ComponentA");
```

---

### `removeByPrefix(prefix: string): void`

Removes all entries where the `by` value starts with a specific prefix.

```js
diligenceObservable.removeByPrefix("Component_");
```

---

### `subscribe(callback: () => void): { unsubscribe: () => void }`

Registers a subscriber callback. Returns an unsubscribe method.

```js
const sub = diligenceObservable.subscribe(() => {
  console.log("Diligence value changed!");
});

// Later...
sub.unsubscribe();
```

---

### `finalDiligence(): string`

Calculates the final status using the following priority:

1. If any user set `Enhanced` → return `Enhanced`.
2. Else, if any user set `Standard` → return `Standard`.
3. Else, if any user set `Simplified` → return `Simplified`.

---

## 📘 Example: Multiple Observer Usage

```js
// UserA sets a value
diligenceObservable.setValue("Standard", "UserA");

// UserB sets another value
diligenceObservable.setValue("Enhanced", "UserB");

// Final value resolves to "Enhanced"
console.log(diligenceObservable.finalDiligence()); // "Enhanced"

// Remove UserA’s input
diligenceObservable.remove("UserA");

// Subscribe to changes
const sub = diligenceObservable.subscribe(() => {
  console.log("🔄 Status changed:", diligenceObservable.finalDiligence());
});
```

---

## ⚠️ Notes

* All state is persisted via `localStorage`, so changes persist across reloads.
* Designed for team-based decision contributions in forms or workflows.

---

## 🔗 Related Files

* [`sharedData.js`](../sharedData/SharedData.js) – Core key-value store
* [`requestService.js`](../requests/requestService.js) – Handles API calls

---

## ✅ Best Practices

* Always use meaningful `ownerId`s (like `TransactionDetails`, `PropertyInfo`, etc.)
* Call `removeByPrefix` when cleaning up temporary or session-specific observers.
* Use `.subscribe()` in UI components to respond to changes reactively. (Example in StepsTab)
