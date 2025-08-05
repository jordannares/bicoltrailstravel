// import { cn } from "../utils/cn";

import { cn } from "../utils/cn";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={cn(
        "bg-amber-200 rounded-full py-3 px-4 text-md font-bold text-white cursor-pointer ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
