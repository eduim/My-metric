import { useState } from "react";
import serverAPI from "../../utils/serverAPI";
import formatMetrics from "../../utils/formatMetrics";

export default function Form({ onSetMetrics, selected }) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await serverAPI.pushMetrics(input);
    const metrics = await serverAPI.getMetrics();
    onSetMetrics(formatMetrics(metrics, selected));
    setInput("");
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-xs font-medium pl-2 leading-6 text-gray-900"
      >
        Insert a new metric
      </label>
      <form className="mt-2 flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={input}
          placeholder="Ex: Leads per day"
          onChange={handleInput}
        />
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-fuchsia-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500"
        >
          +
        </button>
      </form>
    </div>
  );
}
