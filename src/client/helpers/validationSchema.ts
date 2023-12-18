import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  author: Yup.string().required("Author is required"),
  description: Yup.string().required("Description is required"),
});
