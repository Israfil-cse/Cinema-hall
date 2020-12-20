import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = (props) => {
    const allItems = props.items;
    const {original_title, poster_path} = allItems;
    return (
        <div className="col-md-4 col-sm-6">
            <Link to='/booking'>
            <Card className="my-5">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                <Card.Footer style={{background: props.color, 'color':"black"}}>
                  {new Date().toDateString()}
                  <h3>{original_title}</h3>
                </Card.Footer>
            </Card>
            </Link>
        </div>
    );
};

export default Category;