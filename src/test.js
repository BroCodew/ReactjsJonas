// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

// const b = [...initialItems];

// const c = b.map((item) => ({ ...item, description: "b" }));

// console.log(b);
const initialItems = {
  id: 1,
  description: "Passports",
  quantity: 2,
  packed: false,
  network: {
    tab: "facebook",
  },
};

const b = { ...initialItems };
b.quantity = "udemy";
//   const c = b.map((item) => ({ ...item, description: "b" }));

console.log(initialItems);
console.log(b);
