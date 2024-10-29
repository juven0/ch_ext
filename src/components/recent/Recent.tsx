import "./Recent.scss";
import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
const Recent = (): JSX.Element => {
  return (
    <div className="Recent">
      <h4>Recent Upload Files</h4>
      <div className="liste">
        <div className="item">
          <div className="icon">
            <img src={fileIcon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>

        <div className="item">
          <div className="icon">
            <img src={fileIcon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>

        <div className="item">
          <div className="icon">
            <img src={fileIcon} alt="" />
          </div>
          <label htmlFor="">my image.png</label>
        </div>
      </div>
    </div>
  );
};

export default Recent;
