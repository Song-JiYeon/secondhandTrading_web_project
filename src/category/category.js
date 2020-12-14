import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";


class Category extends React.Component {

    render(){
        return(
            <div className="c">
            <h3 className="cat">카테고리</h3>
            <ul className="category">
                <li><Link to={{pathname: "/product/의류", state: {category: "의류"} }}>의류</Link></li>
                <li><Link to={{pathname: "/product/도서", state: {category: "도서"} }}>도서</Link></li>
                <li><Link to={{pathname: "/product/뷰티", state: {category: "뷰티"} }}>뷰티</Link></li>
                <li><Link to={{pathname: "/product/가전디지털", state: {category: "가전디지털"} }}>가전디지털</Link></li>
                <li><Link to={{pathname: "/product/스포츠레저", state: {category: "스포츠레저"} }}>스포츠/레저</Link></li>
                <li><Link to={{pathname: "/product/생활용품", state: {category: "생활용품"} }}>생활용품</Link></li>
                <li><Link to={{pathname: "/product/반려동물용품", state: {category: "반려동물용품"} }}>반려동물용품</Link></li>
            </ul>
            </div>
           

        );
    }
}

export default withRouter(Category);