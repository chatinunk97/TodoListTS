import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //Hooking the Form element to inputRef so we can control its behavior
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        //The HTMLElement.blur() method removes keyboard focus from the current element.
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input__submit">Go</button>
    </form>
  );
};

export default InputField;
