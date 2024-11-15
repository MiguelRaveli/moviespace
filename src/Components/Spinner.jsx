import { PacmanLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "auto",
    height: "100vh",
  };
  return (
    <>
      <div className="bg-[#202020]">
        <PacmanLoader
          color="#FF9800"
          loading={loading}
          cssOverride={override}
          size={100}
        />
      </div>
    </>
  );
};

export default Spinner;
