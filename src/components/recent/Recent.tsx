import FileIteme from "../fileItem/FileItem";
import "./Recent.scss";

const Recent = (): JSX.Element => {
  return (
    <div className="Recent">
      <h4>Recent Upload Files</h4>
      <div className="liste">
        <FileIteme />
      </div>
    </div>
  );
};

export default Recent;
