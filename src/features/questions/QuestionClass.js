export class Question {
    constructor(id, title, additionalInfo = null) {
        this.id = id;
        this.title = title;
        this.additionalInfo = additionalInfo;
        this.isAnswered = false;
        this.type = null;
    }

    getTitle() {
        return this.title;
    }

    getAdditionalInfo() {
        return this.additionalInfo;
    }

    getType() {
        return this.type;
    }

    getId() {
        return this.id;
    }

    isAnswered() {
        return this.isAnswered;
    }
}

export class QuestionWithChoice extends Question {
    constructor(id, title, answerVariants, additionalInfo = null) {
        super(id, title, additionalInfo);
        this.answerVariants = answerVariants;
    }
}

export class QuestionRadio extends QuestionWithChoice {
    constructor(id, title, answerVariants, additionalInfo = null) {
        super(id, title, answerVariants, additionalInfo);
        this.type = 'radio';
    }
    
    checkVariant(variantId) {
        // функция снимает признак выбора со всех ответов кроме того, который выбран
    }
}

export class QuestionCheckbox extends QuestionWithChoice {
    constructor(id, title, answerVariants, additionalInfo = null) {
        super(id, title, answerVariants, additionalInfo);
        this.type = 'checkbox';
    }

    checkVariant(variantId) {
        // функция тогглит признак выбора у ответа с переданным id
    }
}

export class QuestionInput extends Question {
    constructor(id, title, additionalInfo = null) {
        super(id, title, additionalInfo);
        this.type = 'input';
    }
}