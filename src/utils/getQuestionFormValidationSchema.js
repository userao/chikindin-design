import * as Yup from 'yup';

function getQuestionFormValidationSchema(questions) {
  const schemaShape = questions.reduce((shape, q) => {
    const { schema } = q;
    if (!schema) return shape;

    return { ...shape, [q.title]: schema };
  }, {});

  return Yup.object().shape(schemaShape);
}

export default getQuestionFormValidationSchema;
