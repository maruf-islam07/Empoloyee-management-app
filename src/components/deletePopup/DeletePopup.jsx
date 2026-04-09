import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../store/Features/popup/popupSlice";

const DeletePopup = () => {
  const popup = useSelector((state) => state.popup.deletePopup);
  const dispatch = useDispatch();

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80"
    >
      <div 
        onClick={(e)=>e.stopPropagation()}
      className="card w-96 bg-base-100 card-md shadow-sm"
      >
        <div className="card-body">
          <h2 className="card-title">Medium Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
