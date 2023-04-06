import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return { setValue, value, onChange: handleInputChange };
};
