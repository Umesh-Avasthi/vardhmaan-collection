import Card from "./Card";

export default function InventoryList({ items }) {
  if (items.length === 0) {
    return <p className="text-gray-500">No results found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
