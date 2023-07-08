import React from "react";
import { Formik, Form } from "formik";
import Question from "./Question";

const QuestionList = ({ questions }) => {
//   const formInitialValues = questions.reduce((acc, q) => {
//     return { ...acc, [q.title]: "" };
//   }, {});
  const formInitialValues = {};

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik initialValues={formInitialValues} onSubmit={(values) => handleSubmit(values)}>
      <Form className="question-list">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default QuestionList;
