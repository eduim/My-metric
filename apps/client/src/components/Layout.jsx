import Listitem from "./ListItem";
import Dashboard from "./Dashboard";
import Form from "./Form";
import { useEffect, useState } from "react";
import serverAPI from "../../utils/serverAPI";
import formatMetrics from "../../utils/formatMetrics";

function Layout() {
  const [metrics, setMetrics] = useState([]);
  const [selected, setSelected] = useState(1);

  const getMetrics = async () => {
    const rawMetrics = await serverAPI.getMetrics();
    setMetrics(formatMetrics(rawMetrics, selected));
  };

  useEffect(() => {
    getMetrics();
  }, []);

  useEffect(() => {
    setMetrics(formatMetrics(metrics, selected));
  }, [selected]);

  return (
    <>
      <div>
        <div className="hidden sm:fixed sm:inset-y-0 sm:flex sm:w-64 sm:flex-col">
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-6 gap-2 ">
                <img
                  href="#"
                  className="h-8 w-auto rounded-full"
                  src="/MY.png"
                  alt="Your Company"
                />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h3>
              </div>
              <div className="mt-5 space-y-1 pl-4 bg-white px-4">
                <Form onSetMetrics={setMetrics} selected={selected} />
              </div>
              <ul key="metrics" className="mt-5 flex-1 space-y-1 bg-white px-4">
                {metrics.map((item) => (
                  <Listitem
                    key={item.id}
                    item={item}
                    onSetSelected={setSelected}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col sm:pl-64">
          <Dashboard id={selected} />
        </div>
      </div>
    </>
  );
}

export default Layout;
