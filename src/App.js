import { createContext } from "react";
import GlobalForm from "./components/GlobalForm";
import ProductForm from "./components/ProductForm";
import "./styles.css";
import InquiryFormFields from "./components/InquiryFormFields";

const initialValues = {
  r: {
    enable: false,
    hidePrice: false,
    priceText: "",
    add2cartText: "",
    revokeCheckout: false,
    allowInquiry: false,
    clearCart: false,
    disableAck: false,
    hideCoupan: false,
    hideShipping: false,
    hideFee: false,
    hideTax: false
  },
  g: {
    enable: false,
    hidePrice: false,
    priceText: "",
    add2cartText: "",
    revokeCheckout: false,
    allowInquiry: false,
    clearCart: false,
    disableAck: false,
    hideCoupan: false,
    hideShipping: false,
    hideFee: false,
    hideTax: false
  }
};
const productInitialValues = {
  p: {
    enable: false,
    hidePrice: false,
    priceText: "",
    add2cartText: "",
    revokeCheckout: false,
    allowInquiry: false
  }
};
export const FormContext = createContext(true);

export default function App() {
  return <InquiryFormFields />;
  return (
    <div className="App">
      <ProductForm initialValues={productInitialValues} context={FormContext} />
      <hr />
      <GlobalForm initialValues={initialValues} context={FormContext} />
    </div>
  );
}
