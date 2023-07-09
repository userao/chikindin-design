import React from "react";
import { Formik, Form } from "formik";
import Question from "./Question";
import questionFormValidationSchema from "../utils/questionFormValidationSchema";

const QuestionList = ({ questions }) => {
  const formInitialValues = {};

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={questionFormValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}>
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
