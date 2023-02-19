import Input from "..";
import { InputClassName, InputList } from "../input.type";

interface InputBoxProps {
  inputList: InputList[];
  className?: Omit<InputClassName, "inputContainerClassName">;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const InputBox = ({
  inputList,
  className,
  onChange,
  maxLength,
}: InputBoxProps) => {
  return (
    <div className={`input-box ${className?.inputBoxClassName}`}>
      {inputList.map(({ value, type, id, placeholder }) => (
        <Input
          key={id}
          value={value}
          type={type}
          id={id}
          placeholder={placeholder}
          className={className?.inputClassName}
          onChange={onChange}
          maxLength={maxLength}
        />
      ))}
    </div>
  );
};

export default InputBox;
