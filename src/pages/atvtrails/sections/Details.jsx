import {
  Clock,
  History,
  Languages,
  Smartphone,
  Ticket,
  Users,
} from "lucide-react";
import React from "react";

function Details({ ref }) {
  return (
    <>
      <div
        ref={ref}
        id="details"
        className="relative w-full scroll-mt-20 mt-10"
      >
        <div className=" mx-auto max-container mr-10">
          <h3 className="text-left text-lg font-semibold mb-8">Details</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <div>
              <Users size={20} strokeWidth={1.5} />
            </div>
            <div className="ml-2 text-md">Ages 11-60</div>
          </div>
          <div className="flex items-center">
            <div>
              <History size={20} strokeWidth={1.5} />
            </div>
            <div className="ml-2 text-md">Durations</div>
          </div>
          <div className="flex items-center">
            <div>
              <Clock size={20} strokeWidth={1.5} />
            </div>
            <div className="ml-2 text-md">Start time: Check availability</div>
          </div>
          <div className="flex items-center">
            <div>
              <Ticket size={20} strokeWidth={1.5} />
            </div>
            <div className="ml-2 text-md">Mobile ticket</div>
          </div>
          <div className="flex items-center">
            <div>
              <Languages size={20} strokeWidth={1.5} />
            </div>
            <div className="ml-2 text-md">Live guide: English</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
