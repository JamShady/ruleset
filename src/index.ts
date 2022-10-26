import validators from './validators'

export type Rule = keyof typeof validators
export type Rules = Rule[]

export type RuleSet = {
    [p in Rule]?: Parameters<typeof validators[p]> extends [any, infer P]
        ? P | false // provide the correct parameter, or false to disable
        : boolean   // true to enable, false to disable
}

export type Validator = (value: unknown, ruleSet: RuleSet) => Rules

const validator: Validator = (value: unknown, ruleSet: RuleSet): Rules => (Object.keys(validators) as Rules)
    .filter(rule => rule in ruleSet
        && ruleSet[rule] !== false
        && ruleSet[rule] != undefined // null | undefined
        && !validators[rule](value, ruleSet[rule] as any)
    )

export default validator
