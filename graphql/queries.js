/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
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
      nextToken
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
        }
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $filter: ModelDrinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDrink = /* GraphQL */ `
  query GetDrink($id: ID!) {
    getDrink(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
