import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch , withRouter } from "react-router";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import Home  from './pages/home';
import Join from './pages/join';
import Login from './pages/login';
import Category from './category/category';
import Review  from './pages/review';
import WishList from './pages/wishList';
import WriteReview from './pages/writeReview';
import ProductWrite from './product/write';
import ProductDetail from './product/productdetail';
import ProductEdit from './product/productedit';
import Clothing from './category/cloth';
import Book from './category/book';
import Cosmetic from './category/cosmetic';
import HomeDigital from './category/digital';
import SportLeisure from './category/sportLeisure';
import LivingProduct from './category/living';
import PetProduct from './category/pet';

class App extends React.Component {
  
  render(){
  return (
    <Router>
    <div className="App">
      <div className="top"></div>
      <div className="logo"><img className="img0" src="/images/hello.png" />헬로중고월드</div>
      <ul className="bar">
        <li><Link to="/" className="l">Home</Link></li>
        <li><Link to="/review" className="l0">Review</Link></li>
        <li><Link to="/wishList" className="l1">WishList <img className="cart" src="/images/cart.png" /></Link></li>
        <li><Link to="/join" className="l2">회원가입</Link></li>
        <li><Link to="/login" className="l2">로그인/로그아웃</Link></li>
       
      </ul>
      
      <Category></Category>
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/review' component={Review}/>
        <Route exact path='/wishList' component={WishList}/>
        <Route exact path='/review/write' component={WriteReview}/>
        <Route exact path='/product/write' component={ProductWrite}/>
        <Route exact path='/product/detail/:id' component={ProductDetail}/>
        <Route exact path='/product/edit/:id' component={ProductEdit}/>

        <Route exact path='/product/의류' component={Clothing}/>
        <Route exact path='/product/도서' component={Book}/>
        <Route exact path='/product/뷰티' component={Cosmetic}/>
        <Route exact path='/product/가전디지털' component={HomeDigital}/>
        <Route exact path='/product/스포츠레저' component={SportLeisure}/>
        <Route exact path='/product/생활용품' component={LivingProduct}/>
        <Route exact path='/product/반려동물용품' component={PetProduct}/>

        <Route exact path='/join' component={Join}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
      
      
    </div>
    </Router>
  );
}
}

export default App;
