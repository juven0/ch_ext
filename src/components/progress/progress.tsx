const CustomRangeProgress = ({ value, color }) => {
    console.log(value)
    return(<div className="progress">
      <style >{`
        input[type="range"] {
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 5px;
          background: #d0e8f0;
          outline: none;
          pointer-events: none;
           position: absolute;
           left:0;
           z-index: -1;
             margin: 0;
        padding: 0;

        }

        input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 8px;
          border-radius: 5px;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 0;
          height: 0;
        }

        input[type="range"]::-moz-range-track {
          width: 100%;
          height: 8px;
          border-radius: 5px;
        }

        input[type="range"]::-moz-range-thumb {
          width: 0;
          height: 0;
          border: none;
        }

        .range-progress {
          position: relative;
          height: 8px;
          z-index: 100;
        }

        .range-progress::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: ${value}%;
          background: ${color};
          border-radius: 5px;
          transition: width 0.3s ease;
        }
      `}</style>
      <div className="range-progress">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          readOnly
        />
      </div>
    </div>)
};

export default CustomRangeProgress
