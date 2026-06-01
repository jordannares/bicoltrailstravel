import React, { forwardRef, useState } from "react";
import Button from "../../../components/Button";
import { Minus, Plus, X } from "lucide-react";
import { cn } from "../../../utils/cn";

const trails = [
  { id: 0, name: "Black Lava Trail", price: 1500 },
  { id: 2, name: "2018 Mayon Lava Trail", price: 1800 },
  { id: 3, name: "Green Lava Trail", price: 1200 },
  { id: 4, name: "Combo Trail", price: 2500 },
  { id: 5, name: "Forest Trail", price: 1000 },
  { id: 6, name: "Grassland Trail", price: 900 },
];

const AtvTrailOptions = forwardRef((props, ref) => {
  console.log(ref);
  const [service, setService] = useState("");
  const [count, setCount] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const selectedTrail = trails.find((trail) => trail.name === service);
  const totalPrice = selectedTrail ? selectedTrail.price * count : 0;

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleBooking = () => {
    if (!service) {
      setShowBox("Please select trail first");

      setIsHide(true);

      return;
    }
    const newBooking = {
      id: Date.now(),
      service,
      count,
      pricePerPerson: selectedTrail.price,
      total: totalPrice,
    };

    setBookings((prev) => [...prev, newBooking]);

    setService("");
    setCount(1);
    setShowBox("");
  };

  const bookNow = () => {};
  return (
    <>
      <div
        ref={ref}
        id="atvtrail"
        className="relative w-full scroll-mt-20 mt-10"
      >
        {/* show alert message */}
        {isHide && (
          <div className="fixed flex justify-center items-center shadow-lg  z-10 w-[250px] h-[100px] rounded-xl bg-white border-[1px] border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <X
              className="absolute top-1 right-1 bg-amber-300 rounded-3xl text-white p-1 cursor-pointer
            "
              size={20}
              onClick={() => setIsHide(false)}
            />
            <p>{showBox}</p>
          </div>
        )}

        <div className=" mx-auto max-container mr-10">
          <h3 className="text-left text-lg font-bold mb-8">
            ATV Trail Options
          </h3>
          <div className="bg-gray-100 p-4 rounded-2xl">
            <h3 className="text-left mb-4 font-semibold">Select Options</h3>
            <div className="grid grid-cols-3 gap-3">
              {trails.map((trail) => (
                <div
                  key={trail.id}
                  className={cn(
                    "w-full h-[100px] rounded-xl flex items-center justify-center font-bold text-md border-[1px] border-gray-400 cursor-pointer",
                    service === trail.name && "bg-amber-300",
                  )}
                  onClick={() => setService(trail.name)}
                >
                  {trail.name}
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center py-8 gap-x-4">
                  <button className="bg-gray-600 rounded-full text-white p-1.5 cursor-pointer">
                    <Minus
                      size={20}
                      strokeWidth={1}
                      absoluteStrokeWidth
                      onClick={decrement}
                    />
                  </button>
                  <div className="font-semibold text-md">{count}</div>
                  <button className="bg-gray-600 rounded-full text-white p-1.5 cursor-pointer">
                    <Plus
                      size={20}
                      strokeWidth={1}
                      absoluteStrokeWidth
                      onClick={increment}
                    />
                  </button>
                </div>

                {/* Total Price */}

                <div
                  className="text-center font-semibold text-lg mt-4 text-left
                "
                >
                  Total: ₱{totalPrice.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <Button
                  className="bg-[#FBA518] h-[50px]"
                  onClick={handleBooking}
                >
                  Book now
                </Button>
              </div>

              {/* <h3>Booking List</h3>
              {bookings.length === 0 && <p>No Bookings yet</p>}
              {bookings.map((booking) => (
                <div key={booking.id}>
                  <p>Service: {booking.service}</p>
                  <p>Persons: {booking.count}</p>
                  <p>Price per person: {booking.pricePerPerson}</p>
                  <p>Total: {booking.total}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default AtvTrailOptions;
