import { useState } from "react";
import LeftSide from "../../components/leftSide/leftSide";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setshareForm } from "../../redux/slices/shareForm";
import MainContent from "../mainContent/mainContent";
import "./userHome.scss";

const UserHome = (): JSX.Element => {
  const shareShow = useAppSelector((state) => state.shareFormSlice.show);
  const activeFileHash = useAppSelector((state) => state.activeFile);
  const [shareId, setShareId] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className="user-home">
      {shareShow && (
        <div className="super">
          <label htmlFor="" onClick={() => dispatch(setshareForm(false))}>
            close X
          </label>
          <div className="share">
            <h3>Share File</h3>
            <input
              type="text"
              name=""
              value={shareId}
              onChange={(e) => setShareId(e.target.value)}
              placeholder="User Identifient"
              id=""
            />
            <button>Share</button>
          </div>
        </div>
      )}

      <LeftSide />
      <MainContent />
    </div>
  );
};

export default UserHome;
