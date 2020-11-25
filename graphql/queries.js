/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelDrinkFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDrinks(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getDrink = /* GraphQL */ `
  query GetDrink($id: ID!, $createdAt: AWSDateTime!) {
    getDrink(id: $id, createdAt: $createdAt) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const orderItemByOrderId = /* GraphQL */ `
  query OrderItemByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
