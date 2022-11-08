import { countryModel } from "../models/countryModel";

interface TableItemProps extends countryModel {
  setStateFn: React.Dispatch<React.SetStateAction<countryModel | null>>;
}

export default function TableItem({
  Id,
  Symbol,
  Nazwa,
  setStateFn,
}: TableItemProps) {
  return (
    <div className="flexContainer">
      <div>{Id}</div>
      <div>{Symbol}</div>
      <div>{Nazwa}</div>
      <div>
        <button onClick={() => setStateFn({ Id, Nazwa, Symbol })}>
          Edycja
        </button>
      </div>
    </div>
  );
}
