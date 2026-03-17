import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  style,
  className
}) => {
  return (
    <div className={`space-y-2 text-black ${className}`}>
      <label htmlFor={id} className="block font-medium text-small select-none">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        className={`w-full px-6 py-[0.5rem] text-small rounded-full border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-secondary`}
      />
    </div>
  );
};

export default TextInput;
