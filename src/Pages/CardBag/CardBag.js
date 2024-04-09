import React, { useEffect, useState } from "react";
import "./CardBag.css";
import finalImg from "../../Assets/ImgHome/card6.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useGet from "../../Custom Hooks/useGet";
import config from "../../Constants/enviroment";
import Cookies from "js-cookies"
import {
  handelDecreaseProducts,
  handleRemoveProduct,
} from "../../Redux/counterSlice";
const CardBag = () => {
  const [token, setToken] = useState(Cookies.getItem("token"))
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const buyProduct = useSelector((state) => state.counter.buyProduct);
  const [Products, Loading] = useGet(config.allProducts, {});
  const [ProductsId, Loading2] = useGet(config.carts, {});
  const [data, setData] = useState();
  const [dataCount, setDataCount] = useState(1);
  const [dataItem, setDataItem] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const [filterdArray, setFilteredArray] = useState([])


  useEffect(() => {
    location.state != undefined && setData(location.state.ID);

    location.state != undefined
      ? setDataCount(location.state.COUNT)
      : console.log("err");
    if (location.state != undefined && data != undefined) {
      localStorage.setItem("dataItem", data);
      setDataItem((prev) => [
        ...prev,
        parseInt(localStorage.getItem("dataItem")),
      ]);
    }
  }, [data, location.state]);

  useEffect(() => {
    if (Products && ProductsId) {
      ProductsId.map(item => {
        const final = Products.filter(item1 => item1.id == item.id)
        setFilteredArray(prev=>[...prev, ...final])
      })
      console.log(filterdArray)
    }
  }, [Products , ProductsId && isRealyDark])






  // const Prodcuts2 = ProductsId && ProductsId.filter(product => {
  //   Products && Products.map(item => {
  //     return item.id == product.id
  //   })
  // })
  // useEffect(() => {
  //   if (Products && ProductsId) {
  //     ProductsId.map(item => {
  //       const final = Products.filter(item1 => item1.id == item.id)
  //       setFilteredProducts(prev => [...prev, ...final])
  //     })
  //   }
  // }, [Products, ProductsId])
  // useEffect(() => {
  //   if (x.length === 0) {
  //     Products && Products.forEach(product => {
  //       ProductsId && ProductsId.forEach((item) => {
  //         if (product.id == item.id) {
  //           setX(prevArray => {
  //             const newArray = [...prevArray];
  //             newArray.push(product);
  //             return newArray
  //           })
  //         }
  //       }, [Products, ProductsId])
  //     })
  //   }
  // })
  // console.log('filtered array', x)

  return (
    <>
      <div
        className={
          isRealyDark == true
            ? "container-fliud light2"
            : "conatiner-fliud dark2"
        }
      >
        <div className="row hero-bag">
          <div className="empty-notempty">
            <h2>Your Card Is Empty</h2>
            <hr />
          </div>
          <div className="contianer ">
            <div className="row  final">
              <div className="final-right col-4 order-1">
                <div
                  className={
                    isRealyDark == true
                      ? " final-tax light-tax"
                      : " final-tax dark-tax"
                  }
                >
                  <div className="subtotal">
                    <p>subtotal</p>
                    <p>$330</p>
                  </div>
                  <hr />
                  <div className="shiping">
                    <p>shiping</p>
                    <p>$5</p>
                  </div>
                  <hr />
                  <div className="tax">
                    <p>shiping</p>
                    <p>$36</p>
                  </div>
                  <hr />
                  <div className="order-total">
                    <p>Order Total</p>
                    <p>$400</p>
                  </div>
                </div>
                <div
                  className={
                    isRealyDark == true ? "final-btn light" : "final-btn dark"
                  }
                >
                  {token != null ? "Pay" : <Link to="/login">Please Login</Link>}
                </div>
              </div>
              <div className="col-8 final-left order-0">
                 {
                filterdArray.map(item => (
                  <>
                    <div className="col-3 final-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-3 final-category">
                      <h5>{item.category}</h5>
                      <p>{item.title}</p>
                      <p>Colors :</p>
                    </div>
                    <div className="col-3 final-amount">
                      <label className="mb-1" for="ff">
                        Amount
                      </label>
                      <select
                        className="final-select"
                        id="ff"
                        value={
                          item.id == data
                            ? (item.rating.count = dataCount)
                            : item.rating.count
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                      </select>
                      <p className="final-remove mb-4">
                        <div
                          className={
                            isRealyDark == true ? "remove light-remo" : "remove dark-remo"
                          }
                          onClick={() => {
                            dispatch(handleRemoveProduct(data));
                            dispatch(handelDecreaseProducts(dataCount));
                          }}
                        >
                          remove
                        </div>
                      </p>
                    </div>
                    <div className="col-3 final-price">
                      Price :<p>${item.price}</p>
                    </div>
                  </>
                ))
              } 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBag;
// <>
//   <div className="col-3 final-img">
//     <img src={item.image} alt="" />
//   </div>
//   <div className="col-3 final-category">
//     <h5>{item.category}</h5>
//     <p>{item.title}</p>
//     <p>Colors :</p>
//   </div>
//   <div className="col-3 final-amount">
//     <label className="mb-1" for="ff">
//       Amount
//     </label>
//     <select
//       className="final-select"
//       id="ff"
//       value={
//         item.id == data
//           ? (item.rating.count = dataCount)
//           : item.rating.count
//       }
//     >
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//       <option value="4">4</option>
//       <option value="5">5</option>
//       <option value="6">6</option>
//       <option value="7">7</option>
//       <option value="8">8</option>
//       <option value="9">9</option>
//       <option value="10">10</option>
//       <option value="11">11</option>
//       <option value="12">12</option>
//       <option value="13">13</option>
//       <option value="14">14</option>
//       <option value="15">15</option>
//       <option value="16">16</option>
//       <option value="17">17</option>
//       <option value="18">18</option>
//       <option value="19">19</option>
//       <option value="20">20</option>
//     </select>
//     <p className="final-remove mb-4">
//       <div
//         className={
//           isRealyDark == true ? "remove light-remo" : "remove dark-remo"
//         }
//         onClick={() => {
//           dispatch(handleRemoveProduct(data));
//           dispatch(handelDecreaseProducts(dataCount));
//         }}
//       >
//         remove
//       </div>
//     </p>
//   </div>
//   <div className="col-3 final-price">
//     Price :<p>${item.price}</p>
//   </div>
// </>