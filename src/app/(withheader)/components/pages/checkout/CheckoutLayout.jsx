"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCartItems } from '@/app/(withheader)/api-fetching/cartApi/cartApi';
import { saveOrder } from '@/app/(withheader)/api-fetching/order handler/orderHandler';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from 'axios';
import Cookies from 'js-cookie';
import { resolveImageUrl } from '../../../utils/imageUrl';

const CheckoutLayout = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('2'); // 2 for Online, 1 for COD
  const [selectedUpiApp, setSelectedUpiApp] = useState('');
  const [cart, setCart] = useState([]);
  const [cartSummary, setcartSummary] = useState({
    items: cart || [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  })
  useEffect(() => {
    const fetchCart = async () => {
      let res = await getCartItems();
      setCart(res.data);
      setcartSummary({
        items: res.data || [],
        subtotal: res.data.reduce((acc, item) => acc + item.price * item.quantity, 0),
        shipping: 45,
        tax: 0.08 * res.data.reduce((acc, item) => acc + item.price * item.quantity, 0),
        total: res.data.reduce((acc, item) => acc + item.price * item.quantity, 0) + 45 + 0.08 * res.data.reduce((acc, item) => acc + item.price * item.quantity, 0)
      })
    }
    fetchCart();
  }, [])

  // const cartSummary = {
  // items: cart || [],
  // subtotal: 1270,
  // shipping: 45,
  // tax: 101.60,
  // total: 1416.60
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalize = async (e) => {
    e.preventDefault();
    const orderData = {
      orderItems: cart,
      shippingAddess: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        phone: formData.phone,
        email: formData.email
      },
      paymentMethod: paymentMethod, // '1' for COD, '2' for Online
      orderAmount: cartSummary.total,
      orderQty: cart.reduce((acc, item) => acc + item.quantity, 0),
      shippingCharges: cartSummary.shipping,
      orderStatus: 'pending'
    };

    console.log("Submitting Order:", orderData);

    // if (paymentMethod === '2') {
    //   // Here we would normally trigger Razorpay





    //   alert("Redirecting to Razorpay secure gateway...");
    // }

    const response = await saveOrder(orderData);
    console.log(response._status);
    if (paymentMethod == '1') {
      if (response._status || response.status) {
        alert("Order placed successfully!");
      }


    } else if (paymentMethod == '2') {
      const apiBaseUrl = process.env.NEXT_PUBLIC_BASEURL;
      const token = Cookies.get("token");

      if (response._status) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY,
          amount: response.orderRes.amount, // Amount in paise
          currency: "INR",
          name: "MODERN FURNITURE",
          description: "Test Transaction",
          order_id: response.orderRes.id, // Generate order_id on server
          handler: (response) => {
            console.log("Payment Success Handler Response:", response);
            axios.post(`${apiBaseUrl}order/verify-payment`, response, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
              .then((res) => {
                if (res.data._status) {
                  alert("Payment Successful and Verified");
                }
              })
              .catch((error) => {
                console.error(error);
              });

          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();

      }
    }
  };

  const FormInput = ({ label, name, placeholder, type = "text" }) => (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full bg-accent border border-border rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-secondary/20 text-secondary"
      />
    </div>
  );

  return (
    <form action="">
      <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-secondary">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] block">Secure Acquisition</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                Checkout
              </h1>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <span className={step >= 1 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Details</span>
              <span className="w-8 h-[1px] bg-border"></span>
              <span className={step >= 2 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Shipping</span>
              <span className="w-8 h-[1px] bg-border"></span>
              <span className={step >= 3 ? "text-secondary font-bold" : "text-secondary/40 font-bold"}>Payment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            {/* Main Checkout Form */}
            <div className="lg:col-span-7 space-y-12 animate-fadeIn">

              {/* Contact Information */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">01</div>
                  <h2 className="text-2xl font-serif font-bold">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput label="Email Address" name="email" placeholder="curator@monsta.com" type="email" />
                  <FormInput label="Phone Number" name="phone" placeholder="+1 (555) 000-0000" />
                </div>
              </section>

              {/* Shipping Details */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">02</div>
                  <h2 className="text-2xl font-serif font-bold">Shipping Address</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput label="First Name" name="firstName" placeholder="Lumiere" />
                  <FormInput label="Last Name" name="lastName" placeholder="Beaufort" />
                  <div className="md:col-span-2">
                    <FormInput label="Street Address" name="address" placeholder="123 Artisan Way" />
                  </div>
                  <FormInput label="City" name="city" placeholder="Florence" />
                  <FormInput label="Postal Code" name="postalCode" placeholder="50123" />
                </div>
              </section>

              {/* Payment Method */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-background flex items-center justify-center text-xs font-bold">03</div>
                  <h2 className="text-2xl font-serif font-bold">Payment Method</h2>
                </div>

                {/* Payment Tabs */}
                <div className="flex gap-4 p-2 bg-accent rounded-3xl border border-border">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('2')}
                    className={`flex-1 py-4 px-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${paymentMethod === '2'
                      ? 'bg-secondary text-background shadow-xl'
                      : 'text-secondary/40 hover:text-secondary hover:bg-white/50'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Instant Digital (Razorpay)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('1')}
                    className={`flex-1 py-4 px-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${paymentMethod === '1'
                      ? 'bg-secondary text-background shadow-xl'
                      : 'text-secondary/40 hover:text-secondary hover:bg-white/50'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Cash On Delivery (COD)
                  </button>
                </div>

                {paymentMethod === '2' ? (
                  <div className="bg-accent p-8 rounded-[2rem] border border-border space-y-8 animate-fadeInQuick">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center p-4">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                          alt="Razorpay"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-serif font-bold">Secure Online Payment</h3>
                        <p className="text-[10px] text-secondary/60 font-medium max-w-[280px] leading-relaxed">
                          Redirecting to Razorpay's secure vault. Pay via UPI, Cards, NetBanking, or Wallets.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/50 p-4 rounded-2xl border border-border flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" /></svg>
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-tighter">Instant Refund</span>
                      </div>
                      <div className="bg-white/50 p-4 rounded-2xl border border-border flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-tighter">PCI-DSS Secure</span>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-[10px] font-medium text-secondary/60 leading-relaxed">
                        Your transaction is encrypted. You will be redirected to the gateway after clicking finalize.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-accent p-8 rounded-[2rem] border border-border space-y-6 animate-fadeInQuick">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 bg-secondary text-background rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-serif font-bold">Pay Upon Curated Delivery</h3>
                        <p className="text-[10px] text-secondary/60 font-medium max-w-[280px] leading-relaxed">
                          Hand over the investment amount to our white-glove courier upon receiving your artisan pieces.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-white/40 rounded-3xl border border-border/50 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <p className="text-[10px] text-secondary/70 font-bold uppercase tracking-wider">No Advance Payment Required</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <p className="text-[10px] text-secondary/70 font-bold uppercase tracking-wider">Verification Call may follow</p>
                      </div>
                    </div>

                    <div className="bg-warning/5 p-4 rounded-2xl border border-warning/20 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-[9px] font-bold text-secondary/40 uppercase tracking-widest leading-normal">
                        Note: An additional 2% fee might apply for luxury handling items on COD.
                      </p>
                    </div>
                  </div>
                )}
              </section>

              <div className="pt-8">
                <button
                  onClick={handleFinalize}
                  className="w-full h-16 bg-secondary text-background font-bold text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-primary transition-all duration-500 shadow-2xl transform hover:-translate-y-1"
                >
                  Finalize Secure Transaction
                </button>
                <p className="text-center text-[9px] text-secondary/40 mt-6 font-bold uppercase tracking-[0.2em] px-8 leading-relaxed">
                  By clicking "Finalize Secure Transaction", you agree to our Artisan Terms of Service and white-glove delivery protocols.
                </p>
              </div>
            </div>

            {/* Right Column: Order Preview */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="bg-secondary text-background p-10 rounded-[2.5rem] shadow-2xl space-y-8">
                  <h2 className="text-2xl font-serif font-bold">Invested Pieces</h2>

                  <div className="space-y-6">
                    {cartSummary.items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <div className="w-20 h-20 bg-accent rounded-2xl overflow-hidden flex-shrink-0">
                          <img src={resolveImageUrl(item.path, item.image)} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-serif font-bold leading-tight">{item.name}</h4>
                          <p className="text-[10px] text-background/60 font-bold uppercase tracking-widest">Qty: {item.quantity} × ${item.price}</p>
                        </div>
                        <div className="font-serif font-bold text-sm">${(item.price * item.quantity).toLocaleString('en-US')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-background/10 space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                      <span>Subtotal</span>
                      <span className="text-background">${cartSummary.subtotal.toLocaleString('en-US')}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                      <span>White-Glove Shipping</span>
                      <span className="text-background">${cartSummary.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-background/60">
                      <span>Vat / Luxury Tax</span>
                      <span className="text-background">${cartSummary.tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-6 mt-4 border-t border-background/20 flex justify-between items-end">
                      <span className="text-xs font-bold uppercase tracking-[0.3em]">Total Investment</span>
                      <span className="text-4xl font-serif font-bold text-primary">${cartSummary.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="px-8 grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="w-6 h-6 text-primary">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest">Life-Time Artisan Guarantee</h5>
                  </div>
                  <div className="space-y-2">
                    <div className="w-6 h-6 text-primary">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest">End-to-End Encryption</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutLayout;
