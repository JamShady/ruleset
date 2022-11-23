# Validator

A light-weight validator, that applies a rule-set against a value, and returns the failures.

The rules are processed in the order of the example:

```typescript
import validate from '@shady/validator'

// returns [] if there are no failing rules
const errors = validate(value, {
    required: boolean,
    min: number,
    max: number,
    gte: number,
    lte: number,
    email: boolean,
    onOrAfter: Date | string | number,
    onOrBefore: Date | string | number,
})
```
