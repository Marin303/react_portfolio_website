import React from 'react'
import ecommerceImg from "../Images/ecommerce-desktop.png";

const Ecommerce = () => {
  return (
    <section className="projects pb-5">
          <img
            className="rounded-top-3"
            src={ecommerceImg}
            alt="password-generator"
            style={{ width: "300px", height: "250px" }}
          />
          <h2 className="text-white">Admin dashboard</h2>
          <p className="text-white">Ecommerce admin dashboard</p>
          <div className="d-flex">
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                GitHub - repository
              </a>
            </div>
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                Project - in progress
              </a>
            </div>
          </div>
        </section>
  )
}

export default Ecommerce