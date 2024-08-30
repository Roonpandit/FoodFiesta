// Payment System Code

/**
 * Dummy payment data.
 */
const payments = [
    { paymentId: 1, amount: 50, status: 'Completed' },
    { paymentId: 2, amount: 30, status: 'Pending' }
  ];
  
  /**
   * Function to process a payment.
   * @param {number} paymentId - The ID of the payment.
   * @param {number} amount - The amount to be processed.
   * @returns {object} - An object with the success status and a message.
   */
  function processPayment(paymentId, amount) {
    const payment = payments.find(payment => payment.paymentId === paymentId);
    if (payment) {
      if (payment.amount === amount) {
        payment.status = 'Completed';
        return { success: true, message: 'Payment processed successfully' };
      } else {
        return { success: false, message: 'Incorrect amount' };
      }
    } else {
      return { success: false, message: 'Payment not found' };
    }
  }
  
  /**
   * Function to get the payment status.
   * @param {number} paymentId - The ID of the payment.
   * @returns {object} - An object with the payment status and a message.
   */
  function getPaymentStatus(paymentId) {
    const payment = payments.find(payment => payment.paymentId === paymentId);
    if (payment) {
      return { success: true, status: payment.status };
    } else {
      return { success: false, message: 'Payment not found' };
    }
  }
  
  module.exports = { processPayment, getPaymentStatus };
  