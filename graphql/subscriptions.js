/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink {
    onUpdateDrink {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink {
    onDeleteDrink {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String!) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String!) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String!) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String!) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String!) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String!) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String!) {
    onCreateOrderItem(owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String!) {
    onUpdateOrderItem(owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String!) {
    onDeleteOrderItem(owner: $owner) {
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
