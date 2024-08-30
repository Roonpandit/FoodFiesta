// Order Tracking Code

/**
 * Dummy order data.
 */
const orders = [
    { orderId: 1, status: 'Preparing' },
    { orderId: 2, status: 'Delivered' }
  ];
  
  /**
   * Function to get the status of an order.
   * @param {number} orderId - The ID of the order.
   * @returns {object} - An object with the order status and a message.
   */
  function getOrderStatus(orderId) {
    const order = orders.find(order => order.orderId === orderId);
    if (order) {
      return { success: true, status: order.status };
    } else {
      return { success: false, message: 'Order not found' };
    }
  }
  
  /**
   * Function to update the status of an order.
   * @param {number} orderId - The ID of the order.
   * @param {string} status - The new status of the order.
   * @returns {object} - An object with the success status and a message.
   */
  function updateOrderStatus(orderId, status) {
    const order = orders.find(order => order.orderId === orderId);
    if (order) {
      order.status = status;
      return { success: true, message: 'Order status updated' };
    } else {
      return { success: false, message: 'Order not found' };
    }
  }
  
  module.exports = { getOrderStatus, updateOrderStatus };
  