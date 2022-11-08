import { useEffect, useState } from "react";
import { useApi } from "./api/useApi";
import "./App.css";
import EditWindow from "./components/EditWindow";
import Table from "./components/Table";
import TableItem from "./components/TableItem";
import { countryModel } from "./models/countryModel";

function App() {
  const [items, setItems] = useState<countryModel[]>([]);
  const [editedItem, setEditedItem] = useState<countryModel | null>(null);
  const { getItems, patchItem } = useApi(setItems);
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Table>
        {items.map((item) => (
          <TableItem
            key={item.Id}
            Id={item.Id}
            Nazwa={item.Nazwa}
            Symbol={item.Symbol}
            setStateFn={setEditedItem}
          />
        ))}
      </Table>
      {editedItem !== null && (
        <EditWindow
          item={editedItem}
          setStateFn={setEditedItem}
          patchFn={patchItem}
        />
      )}
    </div>
  );
}

export default App;
