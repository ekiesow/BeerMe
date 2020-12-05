import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {API} from 'aws-amplify';
import {listOrders} from '../../graphql/queries';

const initialState = [
  {
    id: '',
    customerId: '',
    userId: '',
    customerEmail: '',
    createdAt: '',
    amount: '',
    status: '',
    customer: '',
    shippingAddress: '',
    orderItems: [],
  },
];

const OrdersScreen = () => {
  const [orders, setOrders] = useState(initialState);
  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const orderData = await API.graphql({
        query: listOrders,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      const orderList = orderData.data.listOrders.items;
      if (orderList.length) setOrders(orderList);
    } catch (err) {
      console.log('error fetching orders', err);
    }
  }

  return (
    <View style={styles.center}>
      {orders[0].id == '' ? (
        <>
          <Text>You have no orders yet! :(</Text>
        </>
      ) : (
        <Text> Orders:</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default OrdersScreen;
