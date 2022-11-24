import validators from './validators';
export type Rule = keyof typeof validators;
export type Rules = Rule[];
export type RuleSet = {
    [p in Rule]?: Parameters<typeof validators[p]> extends [any, infer P] ? P | false : boolean;
};
export type Validator = (value: unknown, ruleSet: RuleSet) => Rules;
declare const validator: Validator;
export default validator;
