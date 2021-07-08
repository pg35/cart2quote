import "./styles.css";
import GlobalSettings from "./components/GlobalSettings";

const initialValues = {
  hidePrice: false,
  priceText: "",
  add2cartText: "",
  revokeCheckout: false,
  allowInquiry: false
};

export default function App() {
  return (
    <div className="App">
      <GlobalSettings initialValues={initialValues} />
    </div>
  );
}
