import "./styles.css";
import GlobalSettings from "./components/GlobalSettings";

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

export default function App() {
  return (
    <div className="App">
      <GlobalSettings initialValues={initialValues} />
    </div>
  );
}
