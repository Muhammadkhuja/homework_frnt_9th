import React, { useState } from "react";
import Cart from "./Cart";

const Search = ({ product }) => {
  const [search, setSearch] = useState("");

  const filtered = product?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  return (
    <div>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Mahsulot nomini "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row mt-3">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div className="col-md-4" key={item.id}>
              <Cart item={item} />
            </div>
          ))
        ) : (
          <div className="text-center w-100 mt-5">
            <img
              alt="Mahsulot yo'q"
            />
            <h4 className="mt-3 text-muted">Hech qanday mahsulot topilmadi</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
