/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
      id
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      createdAt
      updatedAt
      image {
        id
        name
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
      id
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      createdAt
      updatedAt
      image {
        id
        name
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
      id
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      createdAt
      updatedAt
      image {
        id
        name
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      firstName
      lastName
      phoneNumber
      address {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      ordersByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      ordersByStatusByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      firstName
      lastName
      phoneNumber
      address {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      ordersByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      ordersByStatusByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      userId
      username
      email
      firstName
      lastName
      phoneNumber
      address {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      ordersByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      ordersByStatusByDate {
        items {
          id
          customerId
          userId
          customerEmail
          createdAt
          amount
          status
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      userId
      firstName
      lastName
      address1
      address2
      city
      state
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      userId
      firstName
      lastName
      address1
      address2
      city
      state
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      userId
      firstName
      lastName
      address1
      address2
      city
      state
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      customerId
      userId
      customerEmail
      createdAt
      amount
      status
      customer {
        id
        userId
        username
        email
        firstName
        lastName
        phoneNumber
        address {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
        }
        ordersByStatusByDate {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      orderItems {
        items {
          id
          orderId
          drinkId
          userId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      customerId
      userId
      customerEmail
      createdAt
      amount
      status
      customer {
        id
        userId
        username
        email
        firstName
        lastName
        phoneNumber
        address {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
        }
        ordersByStatusByDate {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      orderItems {
        items {
          id
          orderId
          drinkId
          userId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      customerId
      userId
      customerEmail
      createdAt
      amount
      status
      customer {
        id
        userId
        username
        email
        firstName
        lastName
        phoneNumber
        address {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
        }
        ordersByStatusByDate {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        id
        userId
        firstName
        lastName
        address1
        address2
        city
        state
        postalCode
        createdAt
        updatedAt
        owner
      }
      orderItems {
        items {
          id
          orderId
          drinkId
          userId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      orderId
      drinkId
      userId
      quantity
      order {
        id
        customerId
        userId
        customerEmail
        createdAt
        amount
        status
        customer {
          id
          userId
          username
          email
          firstName
          lastName
          phoneNumber
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        orderItems {
          nextToken
        }
        updatedAt
        owner
      }
      createdAt
      updatedAt
      drink {
        id
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        createdAt
        updatedAt
        image {
          id
          name
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      orderId
      drinkId
      userId
      quantity
      order {
        id
        customerId
        userId
        customerEmail
        createdAt
        amount
        status
        customer {
          id
          userId
          username
          email
          firstName
          lastName
          phoneNumber
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        orderItems {
          nextToken
        }
        updatedAt
        owner
      }
      createdAt
      updatedAt
      drink {
        id
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        createdAt
        updatedAt
        image {
          id
          name
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      orderId
      drinkId
      userId
      quantity
      order {
        id
        customerId
        userId
        customerEmail
        createdAt
        amount
        status
        customer {
          id
          userId
          username
          email
          firstName
          lastName
          phoneNumber
          createdAt
          updatedAt
          owner
        }
        shippingAddress {
          id
          userId
          firstName
          lastName
          address1
          address2
          city
          state
          postalCode
          createdAt
          updatedAt
          owner
        }
        orderItems {
          nextToken
        }
        updatedAt
        owner
      }
      createdAt
      updatedAt
      drink {
        id
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        createdAt
        updatedAt
        image {
          id
          name
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
