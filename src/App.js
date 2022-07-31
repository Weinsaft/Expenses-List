import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id:"140",
      title:"shoes",
      price: 242.5,
      date: new Date(2022,5,6),
    },
    {
      id:"120",
      title:"shirt",
      price: 220.5,
      date: new Date(2020,3,6),
    },
    {
      id:"70",
      title:"cigs",
      price: 30,
      date: new Date(2002,2,6),
    },
    {
      id:"30",
      title:"loaker",
      price: 70,
      date: new Date(2012,1,1),
    },
  ];

  

  return (
    <div>
      <h2>ssssssss</h2>
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;
