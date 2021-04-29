import React from "react";
import { defaultModalComponentProps } from "../../../types/types";
import { ModalLayout } from "../../../layouts/ModalLayout";

interface SignUpProps extends defaultModalComponentProps {}

const SignUp: React.FC<SignUpProps> = ({ url }) => {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        beatae commodi corporis, cum dicta eum exercitationem fugit in inventore
        laborum laudantium magni maiores natus nihil nobis obcaecati quod sequi
        totam.
      </div>
      <div>
        A animi culpa debitis deleniti dignissimos eum exercitationem harum, hic
        id libero magni minima nam nihil odio officiis optio perferendis porro
        possimus quaerat, quisquam quos sapiente sed vel vero voluptatibus!
      </div>
      <div>
        Ad atque explicabo minima. Architecto autem commodi debitis deserunt
        dignissimos distinctio dolor dolorem enim explicabo illum laborum modi
        molestias necessitatibus nulla officiis possimus quae quia,
        reprehenderit sit tenetur ut voluptatibus!
      </div>
    </>
  );
};

SignUp.defaultProps = {};

export default SignUp;
