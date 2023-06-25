export class ChoiceVariant {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.isChosen = false;
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    isChosen() {
        return this.isChosen;
    }
}