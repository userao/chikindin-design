import React from "react";
import CheckboxTypeQuestion from "./CheckboxTypeQuestion";
import RadioTypeQuestion from "./RadioTypeQuestion";
import InputTypeQuestion from "./InputTypeQuestion";

const Question = ({ question }) => {
    const getQuestionElementsByType = (type) => {
        const mapping = {
            input: () => <InputTypeQuestion question={question} />,
            radio: () => <RadioTypeQuestion question={question} />,
            checkbox: () => <CheckboxTypeQuestion question={question} />,
        }

        return mapping[type];
    }

    
    const QuestionElement = getQuestionElementsByType(question.getType());
    
    return (
        <>
            <QuestionElement />
        </>
    );
};

export default Question;
