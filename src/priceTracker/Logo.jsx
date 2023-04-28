import React from "react";

const Logo = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-color-primary text-white my-4 fs-3">
            <img
              src={
                "https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-File.png"
              }
              alt="Logo"
              className="logo"
            />
            <span>Crypto App</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
