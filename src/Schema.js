import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is Required"),
  phone: yup
    .string()
    .min(7, "Must be a valid number"),
 size: yup
    .string(),
 toppings: yup
    .boolean().oneOf([true], 'Must select one'),
 sauce: yup
    .boolean().oneOf([true], 'Must select one'),
instructions: yup
    .string()
});

export default schema;