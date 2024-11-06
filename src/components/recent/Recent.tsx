import { FC } from "react";
import FileIteme from "../fileItem/FileItem";
import "./Recent.scss";
import { useAppSelector } from "../../redux/hooks";

interface RecentProps {
  files: [];
}

const Recent = (): JSX.Element => {
  const userfiles = useAppSelector((state) => state.files);

  return (
    <div className="Recent">
      <h4>Recent Upload Files</h4>
      <div className="liste">
        {userfiles.files !== undefined && userfiles.files !== null
          ? Object.entries(userfiles.files).map((el) => {
              console.log(el);
              return (
                <FileIteme
                  name={el[1].fileName}
                  size=""
                  date=""
                  blockHash={el[1].blockHash}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Recent;
