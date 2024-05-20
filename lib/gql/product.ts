import { gql } from "@apollo/client";

export const ProductsQuery = gql`
  query products($input: GetProductsInput!) {
    products(input: $input) {
      statusCode
      pagination {
        page
        totalCount
      }
      products {
        _id
        title
        description
        referencePrice
        salePrice
        images
      }
    }
  }
`;
