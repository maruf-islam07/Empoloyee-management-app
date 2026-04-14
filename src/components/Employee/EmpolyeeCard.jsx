import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/Features/popup/popupSlice";

const EmpolyeeCard = ({details}) => {
  const dispatch = useDispatch();

  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={details.profileUrl}
        />
      </div>
      <div>
        <div>{details.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {details.email}
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        {details.bio}
      </p>
      <button
        onClick={() => dispatch(openEmployeePopup(details.id))}
        className="btn btn-square btn-ghost"
      >
        <CiEdit className="text-xl" />
      </button>
      <button
        onClick={() => dispatch(openDeletePopup(details.id))}
        className="btn btn-square btn-ghost"
      >
        <MdDelete className="text-xl" />
      </button>
      <button className="btn btn-square btn-ghost">
        <FaHeart className="text-xl" />
      </button>
    </li>
  );
};

export default EmpolyeeCard;
