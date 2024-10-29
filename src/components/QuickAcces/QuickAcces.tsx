import "./QuickAcces.scss";

import imageicon from "../../assets/file_icons/image-document-svgrepo-com.svg";

const QuickAcces = (): JSX.Element => {
  return (
    <div className="QuickAcces">
      <h4>Quick Acces</h4>
      <div className="liste">
        <div className="item">
          <div className="icon">
            <img src={imageicon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>

        <div className="item">
          <div className="icon">
            <img src={imageicon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>

        <div className="item">
          <div className="icon">
            <img src={imageicon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>
      </div>
    </div>
  );
};

export default QuickAcces;
