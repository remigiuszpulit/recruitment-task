import { countryModel } from "../models/countryModel";
import { useReducer } from "react";

interface actionModel {
  type: string;
  payload: string;
}

interface EditWindowProps {
  item: countryModel;
  setStateFn: React.Dispatch<React.SetStateAction<countryModel | null>>;
  patchFn: (item: countryModel) => Promise<void>;
}

function reducer(state: countryModel, action: actionModel): countryModel {
  switch (action.type) {
    case "nameChange":
      return { ...state, Nazwa: action.payload };
    case "symbolChange":
      return { ...state, Symbol: action.payload };
    default:
      return state;
  }
}

export default function EditWindow({
  item,
  setStateFn,
  patchFn,
}: EditWindowProps) {
  const { Id, Nazwa, Symbol } = item;
  const initialState: countryModel = { Id, Nazwa, Symbol };
  const [currentItem, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        value={currentItem.Symbol}
        onChange={(e) =>
          dispatch({ type: "symbolChange", payload: e.target.value })
        }
      />

      <input
        type="text"
        value={currentItem.Nazwa}
        onChange={(e) =>
          dispatch({ type: "nameChange", payload: e.target.value })
        }
      />

      <div>
        <button
          onClick={() => {
            patchFn(currentItem);
            setStateFn(null);
          }}
        >
          Zapisz
        </button>
        <button onClick={() => setStateFn(null)}>Anuluj</button>
      </div>
    </div>
  );
}
