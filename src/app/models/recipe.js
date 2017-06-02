export default class Recipe {
    constructor(author,assert,ingredients,picture,description) {
        this.author = author;
        this.assert = assert;
        this.ingredients = ingredients;
        this.picture;
        this.description;
    }
}

Recipe.make = function () {
    return {
        id: -1,
        author: '',
        title: '',
        assert: '',
        ingredients: '',
        picture: '',
        description: ''
    }
}