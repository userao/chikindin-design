import React from "react";
import Question from "./Question";
import { Formik, Field, Form } from "formik";

const QuestionList = ({ questions }) => {
  const formInitialValues = questions.reduce((acc, q) => {
    return { ...acc, [q.title]: "" };
  }, {});

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
