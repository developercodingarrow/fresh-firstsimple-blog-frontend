// GENERIC HANDLER FOR SEND ONLY DATA
export const genericDataHandler = (sendDataFunction) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const genericOnlyImageUplodHandler = (uploadFunction) => {
  return async (selectedFile, imageFor, id = null) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);

      // Add the id to the FormData
      if (id) {
        formDataToSend.append("_id", id);
      }

      const result = await uploadFunction(formDataToSend);

      return result;
    } catch (error) {}
  };
};

// This GENERIC HANDLER FOR Update SINGLE IMAGE with form data BY ID
export const genericSingleImageWithFormDataHandler = (uploadFunction) => {
  return async (selectedFile, formData, imageFor, id = null) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);
      // Append additional fields from formData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      const result = await uploadFunction(formDataToSend, id);

      return result;
    } catch (error) {}
  };
};
