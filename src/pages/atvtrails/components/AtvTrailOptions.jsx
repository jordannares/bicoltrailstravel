import React from "react";
import Button from "../../../components/Button";
import { Minus, Plus } from "lucide-react";

const trails = [
  { id: 0, title: "Black Lava Trail" },
  { id: 1, title: "2018 Mayon Lava Trail" },
  { id: 2, title: "Green Lava Trail" },
  { id: 3, title: "Combo Trail" },
  { id: 4, title: "Forest Trail" },
  { id: 5, title: "Grassland Trail" },
];

const AtvTrailOptions = ({ ref }) => {
  // const handleClick = (id) => {};

  const bookNow = () => {
    // alert(id);
  };
  return (
    <>
      <div
        ref={ref}
        id="atvtrail"
        className="relative w-full scroll-mt-20 mt-10"
      >
        <div className=" mx-auto max-container mr-10">
          <h3 className="text-left text-lg font-bold mb-8">
            ATV Trail Options
          </h3>
          <div className="bg-gray-100 p-4 rounded-2xl">
            <h3 className="text-left mb-4 font-semibold">Select Options</h3>
            <div className="grid grid-cols-3 gap-3">
              {trails.map((trail) => (
                <div
                  className={`w-full h-[100px] rounded-xl flex items-center justify-center font-bold text-md border-[1px] border-gray-400 cursor-pointer`}
                  key={trail.id}
                  onClick={() => handleClick(trail.id)}
                >
                  {trail.title}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center py-8 gap-x-4">
                <button className="bg-gray-600 rounded-full text-white p-1.5 cursor-pointer">
                  <Minus size={20} strokeWidth={1} absoluteStrokeWidth />
                </button>
                <div className="font-semibold text-md">0</div>
                <button className="bg-gray-600 rounded-full text-white p-1.5 cursor-pointer">
                  <Plus size={20} strokeWidth={1} absoluteStrokeWidth />
                </button>
              </div>

              <Button className="bg-[#FBA518]" onClick={() => bookNow()}>
                Book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtvTrailOptions;
