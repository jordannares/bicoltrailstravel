const Booking = () => {
  return (
    <>
      <section className="relative">
        <div className=" w-full min-h-auto absolute z-[0] bottom-0 md:-bottom-20">
          <img src="/src/assets/atv-adventure.png" className="w-full" alt="" />
        </div>
        <div className="relative w-full pt-10 px-4">
          <div className="mx-auto max-container relative py-10">
            <div className="w-sreen md:w-150 bg-[#FF5652] p-10 md:p-15 rounded-4xl my-10 shadow-2xl">
              <h2 className="uppercase text-3xl font-bold">Ready to Book?</h2>
              <p className="w-80 text-center mx-auto py-2">
                Plan your ATV adventure now and get exclusive deals.
              </p>

              <form className="mx-auto w-ful mt-4 space-y-4" action="">
                <div>
                  <input
                    className="w-full outline-0 bg-gray-300 px-4 py-4"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="w-full outline-0 bg-gray-300 px-4 py-4"
                    type="email"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="w-full outline-0 bg-gray-300 px-4 py-4"
                    type="date"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <button className="uppecase w-full bg-gray-900 text-white py-4 cursor-pointer">
                    Book Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
