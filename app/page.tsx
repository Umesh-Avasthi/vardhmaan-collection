"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import InventoryList from "@/components/InventoryList";
import inventory from "@/data/inventory.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredItems = inventory.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-5xl mx-auto p-4">
      <Header />

      <div className="my-6">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <InventoryList items={filteredItems} />
    </main>
  );
}
