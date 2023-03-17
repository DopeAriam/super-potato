import React from "react";
import { useForm, Controller } from "react-hook-form";
import WYSIWYGEditor from "./WYSIWYG";

const Hook = () => {
  /**
   * react-hook-form library
   */
  const { handleSubmit, control } = useForm({
    mode: "onChange"
  });

  // Handle Data Submit to APi for SignUp
  const handleSubmitOnClick = ({ editor_content }) => {
    console.log("editor_content ==> ", editor_content);
  };

  return (
    <section>
      <h1>CODE SANDBOX EXAMPLE</h1>
      <form onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Controller
          as={<WYSIWYGEditor />}
          name="editor_content"
          control={control}
        />

        <button type="submit" className="signup-button">
          Next
        </button>
      </form>
    </section>
  );
};
export default Hook;