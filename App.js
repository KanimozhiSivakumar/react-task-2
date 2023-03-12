import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Price name="Free" dollor="$0" price="/month" />
      <Price name="Plus" dollor="$9" price="/month" />
      <Price name="Plus" dollor="$49" price="/month" />
    </div>
  );
}

function Price(props) {
  const arr = [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Acess"
  ];
  const arr1 = [
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Report"
  ];

  const list1 = [
    "5G User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Acess",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain"
  ];
  const list11 = ["Monthly Status Report"];
  const plus = [
    "Unlimited Users",
    "150GB Storage",
    "Unlimited Public Projects",
    "Community Acess",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Report"
  ];
  return (
    <div class="cart_price">
      <h3>{props.name}</h3>
      <span>
        <h1>{props.dollor}</h1>
      </span>
      <label>
        <h6>{props.price}</h6>
      </label>

      {arr.map((value, idx) => (
        <h3 key={idx}>
          <span>✔️</span>
          {value}
        </h3>
      ))}

      {arr1.map((value1, idx) => (
        <h3 key={idx}>
          <span>❌</span>
          {value1}
        </h3>
      ))}
      <button class="btn btn-primary" type="submit">
        Button
      </button>
    </div>
  );
}
