export default function Randombutton({ onHandleClick }) {
  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => onHandleClick()}
      >
        Generate data
      </button>
    </div>
  );
}
