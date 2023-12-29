import ReactLoading from "react-loading";

type LoadingSpinnerProps = {
  width: number | string;
  height: number | string;
  color: string;
};

const LoadingSpinner = ({ width, height, color }: LoadingSpinnerProps) => {
  return (
    <div className="w-full p-5 flex justify-center items-center">
      <ReactLoading type="spin" width={width} height={height} color={color} />
    </div>
  );
};

export default LoadingSpinner;
