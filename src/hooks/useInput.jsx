import React, {useState} from "react";

export const useInput = (defaultValue) => {
  const [didEdit, setDidEdit] = useState(false);


  const changeHandler = (event) => {
    setCheckoutData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });

    setDidEdit((prevState) => {
      return {
        ...prevState,
        [event.target.name]: true,
      };
    });
  };

  const handleBlur = (e) => {
    setDidEdit((prevState) => {
      return {
        ...prevState,
        [e.target.name]: true,
      };
    });
  };



};
