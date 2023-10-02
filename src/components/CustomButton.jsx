import React from "react";

function CustomButton({ onClick, className, children }) {
  return (
    <div className="w-3/5">
      <button
        type="submit"
        onClick={onClick}
        className={`${className} bg-btnC p-3 rounded-md text-dark font-semibold flex justify-center w-full`}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
