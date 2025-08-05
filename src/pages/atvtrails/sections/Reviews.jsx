import { User } from "lucide-react";
import Ratings from "../components/Ratings";

const reviews = [
  {
    id: 0,
    name: "John Doe",
    location: "USA",
    rating: "4",
    comment:
      "We had a great overnight stay. Camille’s place is very accessible to everything, restaurants, pharmacy, different stalls and most especially to NAIA Terminal 3.",
    date: "July 10, 2025",
  },
  {
    id: 0,
    name: "MJ N",
    location: "Daraga",
    rating: "5",
    comment: "Fun trail! exceed my expectations. will be back next year.",
    date: "July 17, 2025",
  },
];

const Reviews = ({ ref }) => {
  return (
    <>
      <div
        ref={ref}
        id="reviews"
        className="relative w-full scroll-mt-20 mt-10"
      >
        <div className="">
          {/* <hr className=" border-gray-400" /> */}
          <h3 className="text-left mt-10 font-semibold text-lg">Reviews</h3>
          {reviews.map((r) => (
            <div className="flex flex-col items-left justify-start text-left mt-10">
              <div className="flex items-center justify-start">
                <div className="p-2 bg-emerald-700 rounded-full text-white">
                  <User size={24} strokeWidth={1} absoluteStrokeWidth />
                </div>
                <div className="ml-3">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-sm text-gray-600">{r.location}</div>
                </div>
              </div>
              <div className="ml-13 mt-4">
                {/* <div className="py-1.5">{r.rating}</div> */}
                <div className="flex items-center">
                  <Ratings stars={r.rating} />
                  <div className="ml-4 text-sm font-semibold">{r.date}</div>
                </div>
                <div className="w-full bg-gray-100 p-4 rounded-xl">
                  <p className="text-gray-600">{r.comment}</p>
                </div>
                <div className="flex items-center gap-x-4 mt-3">
                  <div>
                    <img
                      src="/ratings/black-lava-trail.png"
                      className="w-20"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="/ratings/green-lava-trail.png"
                      className="w-20"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="/ratings/short-trail.png"
                      className="w-20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
