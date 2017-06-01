export default class Recipes { }

Recipes.categories = {};
Recipes.recipes = [];
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
    const p = new Promise((resolve,reject) => {
        let res = Recipes.recipes.find((res) => {
            return res.id == id
        });
        if (res) {
            resolve(res);
        } else {
            fetch('http://localhost:3000/recipes/' + id)
                .then(function (response) {
                    if(response.status === 404) {
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
}