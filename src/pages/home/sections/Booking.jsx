const Booking = () => {
  return (
    <>
      <section className="relative">
        <div className=" w-full min-h-auto absolute z-[0] bottom-0 md:-bottom-20">
          <img src="/src/assets/atv-adventure.png" className="w-full" alt="" />
        </div>
        <div className="relative w-full pt-10 px-4">
          <div className="mx-auto max-container relative py-10">
            <div className="w-sreen md:w-150 bg-[#CBC39A] p-10 md:p-15 rounded-4xl my-10 shadow-2xl">
              <h2 className="uppercase text-4xl font-bold ">Ready to Book?</h2>
              <p className="w-80 text-center mx-auto py-2 font-semibold ">
                Plan your ATV adventure now and get exclusive deals.
              </p>

              <form className="mx-auto w-ful mt-4 space-y-6" action="">
                <div>
                  <input
                    className="w-full outline-0 bg-[#B5A68C] px-4 py-4 placeholder-gray-700 rounded-xl"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="w-full outline-0 bg-[#B5A68C] px-4 py-4 placeholder-gray-700 rounded-xl"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    className="w-full outline-0 bg-[#B5A68C] px-4 py-4 placeholder-gray-700 rounded-xl"
                    type="date"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <button className="uppecase w-full bg-[#FBA518] text-gray-800 font-semibold py-4 cursor-pointer hover:bg-[#1E1E1E] hover:text-white transition-all shadow rounded-xl">
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
