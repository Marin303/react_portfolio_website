import React from 'react'
import ecommerceImg from "../Images/ecommerce-desktop.png";

const Ecommerce = () => {
  return (
    <section className="projects pb-5 w-300px">
          <img
            className="rounded-top-3 fixedSize"
            src={ecommerceImg}
            alt="password-generator"
          />
          <h2 className="text-white">Admin dashboard</h2>
          <p className="text-white">Ecommerce admin dashboard</p>
          <div className="d-flex flex-wrap">
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