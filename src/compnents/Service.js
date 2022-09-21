import React from "react";
import image2 from "../images/image2.jpg";

const Service = () => {
  return (
    <section className=" text-center mx-auto p-10">
      <h2>Our varius services</h2>

      <div className="container flex flex-wrap justify-center text-center mx-auto">
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md  m-5">
          <img
            src={image2}
            alt="dogimage"
            className="rounded-t-md object-fill h-80 w-96"
          />
          <div className="p-5">
            <h3>Vet Assistance</h3>
            <p>
              Veterinary Assistants provide for the constant cleanliness of the
              hospital, as well as all patient wards, cages, and runs. The
              Veterinary assistants are responsible for the daily care of our
              patients,
            </p>
            <p>Price: </p>
            <p>Book now</p>
          </div>
        </div>
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md  m-5">
        <img
            src={image2}
            alt="dogimage"
            className="rounded-t-md object-fill h-80 w-96"
          />
          <div className="p-5">
            <h3>Pet sitting</h3>
            <p>
              Pet sitters are responsible for all basic animal care while their
              clients are on vacation or traveling for business.
            </p>
            <p>Price: </p>
            <p>Book now</p>
          </div>
        </div>
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md m-5">
        <img
            src={image2}
            alt="dogimage"
            className="rounded-t-md object-fill h-80 w-96"
          />
          <div className="p-5">
            <h3>Pet training</h3>
            <p>
              Border Collie. Prized for its instincts and working ability, the
              Border Collie is thought to be the most intelligent and easy to
              train dog. ...
            </p>
            <p>Price: </p>
            <p>Book now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
