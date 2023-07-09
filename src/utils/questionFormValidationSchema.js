import * as Yup from 'yup';

const questionFormValidationSchema = Yup.object().shape({
  'Ваше имя': Yup.string()
    .min(2, 'Должно содержать от 2 до 15 символов')
    .max(15, 'Должно содержать от 2 до 15 символов')
    .required('Пожалуйста, заполните все обязательные поля'),
  'Ваш e-mail': Yup.string()
    .email('Пожалуйста, укажите корректный e-mail')
    .required('Пожалуйста, заполните все обязательные поля'),
}
);

export default questionFormValidationSchema;
