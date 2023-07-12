import * as Yup from 'yup';

const questions = [
  {
    id: 0,
    type: 'input',
    title: 'Ваше имя',
    additiveInfo: 'Дополнительная информация',
    schema: Yup.string()
      .min(2, 'Должно содержать от 2 до 15 символов')
      .max(15, 'Должно содержать от 2 до 15 символов')
      .required('Пожалуйста, заполните все обязательные поля'),
  },
  {
    id: 1,
    type: 'input',
    title: 'Ваш e-mail',
    additiveInfo: null,
    schema: Yup.string()
      .email('Пожалуйста, укажите корректный e-mail')
      .required('Пожалуйста, заполните все обязательные поля'),
  },
  {
    id: 2,
    type: 'radio',
    title: 'Согласование перепланировки',
    additiveInfo: null,
    schema: null,
  },
  {
    id: 3,
    type: 'checkbox',
    title: 'Мебель для гостиной',
    additiveInfo: null,
    schema: null,
  }
];

export default questions;
