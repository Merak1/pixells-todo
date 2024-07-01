import { useParams } from "react-router-dom";
import Button from "./inputs/button";
import Input from "./inputs/Input";

const ToDo = () => {
  const { id } = useParams();

  return (
    <div className="mt-8 border-2 rounded-md w-1/2 m-auto text-2xl">
      <p>
        this is to do : <span className="ml-5 ">{id}</span>
      </p>

      <div>
        {/* <form onSubmit={handleSubmitEdit}> */}
        <form>
          <Input
            type={"text"}
            // value={value}
            placeholder={"Add a new tasks"}
            // onChange={(e) => setValue(e.target.value)}
          />
          <Button type={"submit"} text={"Create tasks!"} />
        </form>
      </div>
    </div>
  );
};

export default ToDo;
