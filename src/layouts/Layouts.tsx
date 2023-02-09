import React from "react";
import { ToastContainer } from "react-toastify";
import { Header, Footer, Menu } from "../components";

interface Props {
  children: React.ReactNode;
}

const Layouts: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <section className="flex w-[1320px] mx-auto px-2 lg:px-4 ">
        <div className="flex w-full">
          <Menu />
          <div className="w-full">{props.children}</div>
        </div>
      </section>
      <Footer />
      <ToastContainer
        toastClassName={() =>
          "flex text-black bg-white shadow-sm p-3 border rounded-xl overflow-hidden my-2 relative"
        }
        progressStyle={{ background: "#3b82f6" }}
      />
    </>
  );
};

export default Layouts;
