import { useEffect, useState } from "react";
import serverAPI from "../../utils/serverAPI";
import Table from "./Table";
import Randombutton from "./RandomButton";

export default function Dashboard({ id }) {
  const [metric, setMetric] = useState("");
  const [loadingState, setLoadingState] = useState("not_loaded");

  useEffect(() => {
    setLoadingState("loading");
    serverAPI
      .getMetric(id)
      .then((data) => {
        setLoadingState("loaded");
        setMetric(data);
      })
      .catch((error) => {
        setLoadingState("error");
        console.log(error);
      });
  }, [id]);

  const handleGenerateData = async () => {
    setLoadingState("loading");
    serverAPI.updateMetric(id).then((data) => {
      setLoadingState("loaded");
      setMetric(data);
    });
  };

  if (loadingState === "not_loaded" || loadingState === "loading") {
    return (
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Loading...</h1>
          </div>
        </div>
      </main>
    );
  }

  if (metric.values.length === 0) {
    return (
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              You don't have data, randomize it!
            </h1>
          </div>
        </div>
        <div className="mx-auto px-4 px-8 flex">
          <Randombutton onHandleClick={handleGenerateData} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            {metric.name}
          </h1>
        </div>
        <div className="mx-auto px-4 px-8 flex">
          {metric.values.map((avg) => (
            <Table values={avg} />
          ))}
        </div>
      </div>
    </main>
  );
}
