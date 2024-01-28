import React from "react";

function CustomButton({ onClick, className, children, type} ) {
  return (
    <div className="w-3/5">
      
      <button
        type= {type? "submit" : "button"}
        onClick={onClick}
        className={`${className} bg-btnC p-3 rounded-md text-dark font-semibold flex justify-center w-full`}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
