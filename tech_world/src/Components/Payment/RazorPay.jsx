import axios from "axios";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OrderedProducts } from "../../Redux/AddItemCart/action";

function RazorPay({ details, totalprice }) {
    const dispatch=useDispatch()
  const toast = useToast();
  const navigate = useNavigate();
  
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay(details) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      "https://razorpay-43ea.onrender.com/payment/orders",
      { totalprice }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_8DHk41YB81t2Ja",
      amount: amount.toString(),
      currency: currency,
      name: "tech_World",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://razorpay-43ea.onrender.com/payment/success",
          data
        );
              toast({
                title: "Payment successfull.",
                description: "We've Placed Your Order.",
                status: "success",
                position: "top",
                duration: 2000,
                isClosable: true,
            });
            
            navigate("/");
            
      },
      prefill: {
        name: details.name,
        email: details.email,
        contact: details.mobile,
      },
      notes: {
        address: `${details.address}`,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Button
      display={"block"}
      borderRadius={"100px"}
      width="200px"
      margin="auto"
      marginTop={"20px"}
      _hover={{ bgColor: "red" }}
      color={"white"}
      colorScheme="teal"
      onClick={() => (displayRazorpay(details), dispatch( OrderedProducts(details)))}
      isDisabled={totalprice === 0 || details.address == ""}
    >
      Checkout
    </Button>
  );
}

export default RazorPay;
