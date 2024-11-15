import { FC, useEffect, useState } from "react";
import FileIteme from "../fileItem/FileItem";
import "./Recent.scss";
import { useAppSelector } from "../../redux/hooks";

interface RecentProps {
  files: [];
}

const Recent = (): JSX.Element => {
  const userfiles = useAppSelector((state) => state.files);
  const [sort, setSort] = useState([])
  useEffect(()=>{
    if(userfiles.files !== undefined && userfiles.files !== null){
        const sortedFile = Object.values(userfiles.files).sort((a,b)=> b.uploadTimestamp - a.uploadTimestamp)
        //  console.log(sortedFile)
        setSort(sortedFile.slice(0, 3))
        console.log(sort)
    }
  },[userfiles])
//      const sortedFiles = userfiles.files.sort((a, b) => b.uploadTimestamp - a.uploadTimestamp);
// const recentFiles = sortedFiles.slice(0, 3);



  return (
    <div className="Recent">
      <h4>Recent Upload Files</h4>
      <div className="liste">
        {userfiles.files !== undefined && userfiles.files !== null
          ? sort.map((el) => {
              return (
                <FileIteme
                  name={el.fileName}
                  size=""
                  date={el.uploadTimestamp}
                  blockHash={el.blockHash}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Recent;
