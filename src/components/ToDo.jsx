import { useParams } from "react-router-dom";

const ToDo = () => {
  const { id } = useParams();

  return (
    <div>
      <p>this is to do</p>
      {/* <p>Id = {id}</p> */}
    </div>
  );
};

export default ToDo;
