/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String!) {
    onCreateOrderItem(owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String!) {
    onUpdateOrderItem(owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String!) {
    onDeleteOrderItem(owner: $owner) {
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
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink {
    onUpdateDrink {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink {
    onDeleteDrink {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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