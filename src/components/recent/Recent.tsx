import { FC } from "react";
import FileIteme from "../fileItem/FileItem";
import "./Recent.scss";
import { useAppSelector } from "../../redux/hooks";

interface RecentProps {
  files: [];
}

const Recent: FC<RecentProps> = ({ files }): JSX.Element => {
  const userfiles = useAppSelector((state) => state.files);

  return (
    <div className="Recent">
      <h4>Recent Upload Files</h4>
      <div className="liste">
        {userfiles.files !== undefined && userfiles.files !== null
          ? Object.entries(userfiles.files).map((el) => {
              return <FileIteme />;
            })
          : ""}
      </div>
    </div>
  );
};

export default Recent;
