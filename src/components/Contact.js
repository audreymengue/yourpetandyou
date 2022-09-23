import React from "react";

const Contact = () => {
  return (
    <section className=" bg-gray-200 mx-auto w-full ">
      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-col md:flex-row md:space-x-10 justify-center p-8 w-full  text-white">
          <div className="flex flex-col text-center text-gray-600">
            <h2 className="font-bold text-4xl tracking-wide mb-2 text-center">
              Find us here
            </h2>
            <iframe
              className="rounded-xl md:w-96 "
              title="My unique map"
              height="450px"
              frameborder="0"
              allowfullscreen
              src="//umap.openstreetmap.fr/en/map/untitled-map_784763?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
            ></iframe>
          </div>
          <div className="text-gray-600 rounded-md mb-2">
            <h2 className="font-bold text-4xl tracking-wide mb-2 text-center">
              Contact us
            </h2>
            <form className="flex flex-col md:w-96 space-y-4 rounded-xl bg-white p-8">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  placeholder="Email"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2"
                  rows="4"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-gray-500 text-white p-2 rounded-md font-bold">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
