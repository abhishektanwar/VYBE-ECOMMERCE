import React from "react";

const InputField = ({parentClass,type,name,id,placeholder,labelText,onChange,value,labelClass}) => {
  return (
    <div class={`flex-column form-field-container ${parentClass}`}>
      <label class={`input-label ${labelClass}`}>{labelText}</label>
      <input
        class="form-field"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
