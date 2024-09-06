import './Shop.css';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Shop(){
    return(
    <>
    <div class="shopwelcome shopitem">
        <h2>Welcome to our shop!</h2>
      </div>
        <div class="shop-container">
            <div class="shop-item">
                <div class="shopitems shopitem1"></div>
                <div class="cont">
                    <div className="name">
                        <h3>Camera</h3>
                    </div>
                    <div className="price">
                        <h5>$5000</h5>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <div class="shopitems shopitem2"></div>
                <div class="cont">
                    <div className="name">
                        <h3>Camera</h3>
                    </div>
                    <div className="price">
                        <h5>$5000</h5>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <div class="shopitems shopitem3"></div>
                <div class="cont">
                    <div className="name">
                        <h3>Camera</h3>
                    </div>
                    <div className="price">
                        <h5>$5000</h5>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <div class="shopitems shopitem4"></div>
                <div class="cont">
                    <div className="name">
                        <h3>Camera</h3>
                    </div>
                    <div className="price">
                        <h5>$5000</h5>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <div class="shopitems shopitem5"></div>
                <div class="cont">
                    <div className="name">
                        <h3>Camera</h3>
                    </div>
                    <div className="price">
                        <h5>$5000</h5>
                    </div>
                </div>
            </div>
    </div>
    </>
    );
    }

export default Shop;