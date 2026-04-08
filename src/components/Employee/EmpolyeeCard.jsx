import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EmpolyeeCard = () => {
  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
      </div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        "Remaining Reason" became an instant hit, praised for its haunting sound
        and emotional depth. A viral performance brought it widespread
        recognition, making it one of Dio Lupa’s most iconic tracks.
      </p>
      <button className="btn btn-square btn-ghost">
        <CiEdit className="text-xl" />
      </button>
      <button className="btn btn-square btn-ghost">
        <MdDelete className="text-xl" />
      </button>
      <button className="btn btn-square btn-ghost">
        <FaHeart className="text-xl" />
      </button>
    </li>
  );
};

export default EmpolyeeCard;
