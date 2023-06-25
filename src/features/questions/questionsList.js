import { ChoiceVariant } from "./ChoiceVariantClass";
import { QuestionInput, QuestionRadio, QuestionCheckbox } from "./QuestionClass";

const questionList = [
    new QuestionInput(1, 'Ваше имя', 'Дополнительная информация'),
    new QuestionInput(2, 'Ваш почтовый адрес'),
    new QuestionRadio(3,
        'Согласование перепланировки',
        [
            new ChoiceVariant(1, 'С согласованием'),
            new ChoiceVariant(2, 'Без согласования')
        ]
    ),
    new QuestionCheckbox(4,
        'Мебель для гостиной',
        [
            new ChoiceVariant(1, 'Диван'),
            new ChoiceVariant(2, 'Кофейный столик'),
            new ChoiceVariant(3, 'Шкаф'),
        ]
    ),
];

export default questionList;