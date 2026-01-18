export default function Card({ item }) {
  return (
    <div className="border rounded p-4">
      <h2 className="font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.category}</p>
      <p className="font-bold">${item.price}</p>
      <img src={item.src} alt={item.name} className="mt-2 w-full h-48 object-cover" />
    </div>
  );
}
