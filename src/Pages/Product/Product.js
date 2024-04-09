import React, { useEffect, useRef, useState } from "react";
import "./Product.css";
// import Products from "../../Productss";
import Card from "../../Components/Card/Card";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGet from "../../Custom Hooks/useGet";
import config from "../../Constants/enviroment";
const Product = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  const [Products, Loading] = useGet(config.allProducts, {});
  const [myRange, setMyRange] = useState();
  const [data, setData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [alpah, setAlpha] = useState();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [filterdArray, setFilteredArray] = useState(Products && Products);
  const [search, setSearch] = useState();
  const [sorData,setSortData]=useGet(config.allProducts,null,null,{Sort:alpah})
  useEffect(() => {
    if (Products && dataLoaded != false) {
      const sortedData = [...Products].sort((a, b) => {
        if (isReversed) {
          return b.category.localeCompare(a.category);
        } else {
          return a.category.localeCompare(b.category);
        }
      });
      setData(sortedData);
    }
  }, [isReversed, dataLoaded]);

  useEffect(() => {
    if (alpah == null && myRange == null && search == null && Products) {
      
      setFilteredArray(Products)
    }
    else if(alpah == null && myRange != null && search == null && Products){
    const final =Products.filter(item => item.price<= myRange)
    setFilteredArray(final)
    }
    else if(alpah != null && myRange == null && search == null ){
      setFilteredArray(sorData)
    }
    else if(alpah == null && myRange == null && search != null ){
      // const final=Products&& Products.filter(item=>item.category.startsWith(search))
      const final=Products&& Products.filter(item=>item.category.includes(search))

      setFilteredArray(final)
    }
    else if(alpah != null && myRange != null && search == null)
    {
      const final=sorData&& sorData.filter(item=>item.price <= myRange)
      setFilteredArray(final)

    }
    else if(alpah != null && myRange == null && search != null)
    {
      const final=sorData&& sorData.filter(item=>item.category.includes(search))
      setFilteredArray(final)

    }
    else if(alpah == null && myRange != null && search != null)
    {
      const final=Products&& Products.filter(item=>item.category.includes(search)&& item.price <=myRange)
      setFilteredArray(final)

      
    }
    else if(alpah != null && myRange != null && search != null)
    {
      const final=sorData&& sorData.filter(item=>item.category.includes(search)&& item.price <=myRange)
      setFilteredArray(final)

    }
  }, [alpah, myRange, search, Products,sorData])
  const hanldeShow1 = () => {
    setShow2(false);
    setShow1(true);
  };
  const hanldeShow2 = () => {
    setShow2(true);
    setShow1(false);
  };
  const handleChange = (e) => {
    setMyRange(e.target.value);
    setDataLoaded(true);
  };
  const handleChangeAlpha = (e) => {
    setAlpha((prev) => (prev = e.target.value));
    console.log(alpah);
    setIsReversed(!isReversed);
    setDataLoaded(true);
  };

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/${id}`, {
      state: {
        ID: id,
      },
    });
  };
  return (
    <>
      <div
        className={
          isRealyDark == true
            ? "container-fluid light2"
            : " container-fluid dark2"
        }
      >
        <div
          className={
            isRealyDark == true
              ? "container-fluid light2"
              : " container-fluid dark2"
          }
        >
          <div className="row hero-product">
            <div
              className={
                isRealyDark == true ? "div-from light2" : "div-from dark2"
              }
            >
              <form
                className={
                  isRealyDark == true
                    ? "product-form light-form"
                    : "product-form dark-form"
                }
              >
                <div className="range-div">
                  <label>Select Price ${myRange}</label>
                  <input
                    type="range"
                    min="0"
                    className={
                      isRealyDark == true
                        ? "range-color light-range"
                        : "range-color dark-range"
                    }
                    max="1000"
                    step="10"
                    onChange={handleChange}
                  />
                </div>
                <div className="search-alpha">
                  <label>Sort By</label>
                  <select
                    onChange={handleChangeAlpha}
                    className={
                      isRealyDark == true ? "ss light-input" : "ss dark-input"
                    }
                  >
                    <option value="asc" >a-z</option>
                    <option value="desc">z-a</option>
                  </select>
                </div>
                <div className="search-product">
                  <label>Search Product</label>
                  <input
                    type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Enter Your Product"
                    className={
                      isRealyDark == true
                        ? "search-input light-input"
                        : "search-input dark-input"
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={
            isRealyDark == true
              ? "container-fluid light2"
              : " container-fluid dark2"
          }
        >
          <div className="how-show">
            <h4 className="py-5">{filterdArray && filterdArray.length} Products</h4>
            <div className="small-icon">
              <div onClick={() => hanldeShow1()}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  className="one-svg"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                </svg>
              </div>
              <div onClick={() => hanldeShow2()}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  className={
                    isRealyDark == true
                      ? "two-svg light-svg"
                      : "two-svg dark-svg"
                  }
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="product-card  row">

            {/* (show1 == true && show2 == false ? ( */}
            {filterdArray && filterdArray.map(
              (item) =>

              (
                <div
                  className="col-4"
                  onClick={() => handleNavigate(item.id)}
                  key={item.id}
                >
                  <Card
                    id={item.id}
                    img={item.image}
                    name={item.category}
                    price={item.price}
                  />
                </div>

              ))
            }
            {/* ) : (
                    <div
                      className="col-12"
                      style={{ width: "51%" }}
                      onClick={() => handleNavigate(item.id)}
                      key={item.id}
                    >
                      <Card
                        id={item.id}
                        img={item.image}
                        name={item.category}
                        price={item.price}
                      />
                    </div>
                  )) */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
