/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      owner
      ordersByDate {
        nextToken
      }
      ordersByStatusByDate {
        nextToken
      }
    }
  }
`;
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
      id
      createdAt
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      file {
        bucket
        region
        key
      }
      fileKey
      updatedAt
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
      createdAt
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      file {
        bucket
        region
        key
      }
      fileKey
      updatedAt
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
      createdAt
      drinkName
      drinkStyle
      abv
      breweryName
      breweryLocation
      description
      price
      file {
        bucket
        region
        key
      }
      fileKey
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
      createdAt
      updatedAt
      owner
      ordersByDate {
        nextToken
      }
      ordersByStatusByDate {
        nextToken
      }
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
      createdAt
      updatedAt
      owner
      ordersByDate {
        nextToken
      }
      ordersByStatusByDate {
        nextToken
      }
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
      updatedAt
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
      owner
      orderItems {
        nextToken
      }
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
      updatedAt
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
      owner
      orderItems {
        nextToken
      }
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
      updatedAt
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
      owner
      orderItems {
        nextToken
      }
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
      createdAt
      updatedAt
      drink {
        id
        createdAt
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        fileKey
        updatedAt
      }
      order {
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
      createdAt
      updatedAt
      drink {
        id
        createdAt
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        fileKey
        updatedAt
      }
      order {
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
      createdAt
      updatedAt
      drink {
        id
        createdAt
        drinkName
        drinkStyle
        abv
        breweryName
        breweryLocation
        description
        price
        fileKey
        updatedAt
      }
      order {
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
      owner
    }
  }
`;
