import { useEffect, useState } from "react";
import LeftSide from "../../components/leftSide/leftSide";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setshareForm } from "../../redux/slices/shareForm";
import MainContent from "../mainContent/mainContent";
import "./userHome.scss";
import { addSaredFile } from "../../redux/slices/sharedFiles";
import userAvatar from "../../assets/avatar-svgrepo-com.svg"
import axios from "axios";

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import FileImage from "../../assets/file_icons/html-document-svgrepo-com.svg"

const UserHome = (): JSX.Element => {
  const shareShow = useAppSelector((state) => state.shareFormSlice.show);
  const activeFileHash = useAppSelector((state) => state.activeFile);
  const [shareId, setShareId] = useState("");
  const dispatch = useAppDispatch();
  const userfiles = useAppSelector((state) => state.files);
  const user = useAppSelector((state) => state.user);
  const [activeFileData , setActiveFileData] = useState()
  const getFileByBlockHash = (blockHash: string): any | undefined => {
    return userfiles?.files?.find((file) => file.blockHash === blockHash);
  };

  useEffect(()=>{
    setActiveFileData(getFileByBlockHash(activeFileHash.file))
}, [activeFileHash])

  const [storage, setStorage] = useState(null)
  const data = [
    { name: 'Rouge', value: 300 },
    { name: 'Bleu', value: 200 },
  ];
  const fetchStorage = async ()=>{
    await axios
    .get(`http://localhost:3000/peer/staorage`)
    .then((res) => {
        setStorage(res.data.storage)
    });
  }
  useEffect(()=>{
    fetchStorage()
  },[])

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Byte';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const dateFormater = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const COLORS = ['#FF6384', '#36A2EB', ];

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
            <button
              onClick={() => {
                const share = getFileByBlockHash(activeFileHash.file);
                dispatch(addSaredFile(share));
              }}
            >
              Share
            </button>
          </div>
        </div>
      )}

      <LeftSide />
      <MainContent />
      <div className="rigtSide">
            <div className="rigthUser">
                <div className="avatar">
                    <img src={userAvatar} alt=""  />
                </div>
                <div className="info">
                        <h3>{user.username}</h3>
                        <label htmlFor="">{user.userId}</label>
                    </div>
            </div>
            <div className="storage">
                <h2>Storage</h2>
                <div className="chart">
                    <PieChart width={400} height={200}>
                        <Pie
                        data={data}
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                        verticalAlign="bottom"
                        height={36}
                        />
                    </PieChart>
                    <label htmlFor="">{storage}GB</label>
                </div>
            </div>

            <div className="detail">
                <h3>Detail</h3>
                <div className="container">
                <img src={FileImage} alt=""  />
                    <div className="clo">
                        <label htmlFor="" className="tag">
                            Name
                        </label>
                        <label htmlFor="" className="value">
                            {activeFileData!== undefined&& activeFileData?.fileName}
                        </label>
                    </div>
                    <div className="clo">
                        <label htmlFor="" className="tag">
                            Size
                        </label>
                        <label htmlFor="" className="value">
                        {activeFileData!== undefined&& formatFileSize(activeFileData?.size)}
                        </label>
                    </div>
                    <div className="clo">
                        <label htmlFor="" className="tag">
                            Owner
                        </label>
                        <label htmlFor="" className="value">
                            {user.username}
                        </label>
                    </div>
                    <div className="clo">
                        <label htmlFor="" className="tag">
                            Date
                        </label>
                        <label htmlFor="" className="value">
                        {activeFileData!== undefined&& dateFormater(activeFileData?.uploadTimestamp)}
                        </label>

                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default UserHome;
