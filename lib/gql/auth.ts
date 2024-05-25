import { gql } from "@apollo/client";

export const SendCodeMutation = gql`
  mutation sendCode($input: SendCodeInput!) {
    sendCode(input: $input) {
      message
    }
  }
`;

export const VerifyCodeMutation = gql`
  mutation verifyCode($input: VerifyCodeInput!) {
    verifyCode(input: $input) {
      message
      token
      user {
        _id
        name
        admin
      }
    }
  }
`;
