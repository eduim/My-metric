import classNames from "../../utils/classNames";

export default function Listitem({ item, onSetSelected }) {
  return (
    <li
      href={`/${item.id}`}
      className={classNames(
        item.current
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
      )}
      onClick={() => onSetSelected(item.id)}
    >
      {item.name}
    </li>
  );
}
