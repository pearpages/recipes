import Recipe from './recipe';

export default class Recipes { }

Recipes.categories = {};
Recipes.recipes = [];

Recipes.getCategories = function () {
    if(Recipes.categoriesList) {
        return new Promise((resolve) => resolve(Recipes.categoriesList));
    }
    return fetch('http://localhost:3000/categories')
        .then(function (response) {
            const json = response.json();
            Recipes.categoriesList = json;
            return json;
        });
};

Recipes.getCategory = function (slug) {

    const p = new Promise((resolve) => {
        let res = Recipes.categories[slug];
        if (res) {
            resolve(res);
        } else {
            fetch('http://localhost:3000/' + slug)
                .then(function (response) {
                    return response.json();
                })
                .then((data) => {
                    Object.assign(Recipes.categories, { [slug]: data });
                    Recipes.recipes = Recipes.recipes.concat(...data);
                    resolve(data);
                });
        }
    });
    return p;
};

Recipes.get = function (id) {
    const p = new Promise((resolve, reject) => {
        if (id === 'new') {
            resolve(Recipe.make());
        }

        let res = Recipes.recipes.find((res) => {
            return res.id == id
        });
        if (res) {
            resolve(res);
        } else {
            fetch('http://localhost:3000/recipes/' + id)
                .then(function (response) {
                    if (response.status === 404) {
                        throw (Error(response.status));
                    }
                    return response.json();
                })
                .catch((err) => {
                    reject(err);
                })
                .then((data) => {
                    Recipes.recipes.concat(data);
                    resolve(data);
                })
                .catch((err) => reject(err));

        }
    });
    return p;
};

Recipes.save = function (type, data) {
    switch (type) {
        case 'post':
            return Recipes.post(data);
        case 'put':
            return Recipes.put(data);
    }
    throw (new Error('Wrong type'));
};

Recipes.post = function (data) {
    data.id = Math.floor(Math.random() * 9999);
    return fetch('http://localhost:3000/carnes', {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(data)
    });
};

Recipes.put = function (data) {
    return fetch('http://localhost:3000/carnes/' + data.id, {
        method: "put",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(data)
    });
};