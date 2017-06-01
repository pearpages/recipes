import ReactDOM from 'react-dom';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './components/category-card';
import Category from './models/category';

const categories = [
    new Category(3, 'Carnes', 'carnes.jpg'),
    new Category(4, 'Pescados y mariscos', 'pescados-y-mariscos.jpg'),
    new Category(5, 'Ensaladas y verduras', 'ensaladas-y-verduras.jpg'),
    new Category(6, 'Pastas y pizzas', 'pastas-y-pizzas.jpg'),
    new Category(7, 'Legumbres', 'legumbres.jpg'),
    new Category(8, 'Arroces y cereales', 'arroces-y-cereales.jpg'),
    new Category(9, 'Sopas y cremas', 'sopas-y-cremas.jpg'),
    new Category(10, 'Salsas', 'salsas.jpg'),
    new Category(11, 'Huevos', 'huevos.jpg'),
    new Category(12, 'Setas y hongos', 'setas-y-hongos.jpg'),
    new Category(13, 'Cócteles', 'cocteles.jpg'),
    new Category(14, 'Aperitivos', 'aperitivos.jpg')
]

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            {
                                categories.map((cat, i) => <li>{cat.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {
                            categories.map((cat, i) => <CategoryCard key={i} category={cat} />)
                        }
                    </div>
                </div>
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));