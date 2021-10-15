/* eslint-disable no-unused-vars */
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name for order required!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extra_large'], 'We need to know how big this thing needs to be!'),
    sauce: yup
        .string()
        .oneOf(['marinara', 'alfredo', 'bbq'], 'Sauce choice must be made!'),
    banana_peppers: yup
        .boolean(),
    green_olives: yup
        .boolean(),
    onions: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    special_text: yup
        .string().trim().max(100, 'Any longer, just call and tell us.')
})

export default formSchema;