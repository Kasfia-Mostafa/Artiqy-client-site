import { useState } from "react";

const InfoCard = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 bg-blue-100 p-4 rounded-md mt-6 h-80">
      <div className="flex justify-between">
        <h4 >Your Info</h4>
        <div className="">
        <lord-icon
          src="https://cdn.lordicon.com/ylvuooxd.json"
          trigger="hover"
          colors="primary:#ebe6ef,secondary:#d1f3fa,tertiary:#66d7ee,quaternary:#3a3347"
          style={{ width: "30px", height: "30px" }}
        ></lord-icon>
        </div>
        <div>
          <infoIcon onClick={() => setModalOpen(true)} />
          {/* <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
        </div>
      </div>
      <div>
        <span>
          <b>Staus </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div>
        <span>
          <b>Lives </b>
        </span>
        <span>Dhaka</span>
      </div>
      <div>
        <span>
          <b>Works At </b>
        </span>
        <span>Artiqy.co</span>
      </div>

      <button>Logout</button>
    </div>
  );
};

export default InfoCard;
