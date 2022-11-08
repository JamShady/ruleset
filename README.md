# Validator

A simple validation utility, that accepts a set of rules, and returns which of those failed.

```javascript
import validate from '@shady/validator'

// returns [] if there are no failing rules
const errors = validate(value, ruleSet)
```
