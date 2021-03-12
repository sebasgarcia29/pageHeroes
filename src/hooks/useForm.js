import { useState } from "react"

export const useForm = (initialState = {}) => {

  const [values, setvalues] = useState(initialState);

  const resetValues = () => {
    setvalues(initialState)
  }

  const handleInputChange = (data) => {
    const { name, value } = data.target;
    setvalues(
      {
        ...values,
        [name]: value,
      }
    );
  }
  return [values, handleInputChange, resetValues]
}
