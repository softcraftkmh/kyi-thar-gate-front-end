import React from "react";
import Link from "next/link";

import "./styles.scss";

const index = ({ children }) => {
  return (
    <section>
      <header className="layout__header">
        <Link href="/admin/items">
          <button className="waves-effect waves-light btn">ဘောင်ချာ</button>
        </Link>
        <Link href="/admin/items">
          <button className="waves-effect waves-light btn">MAIN</button>
        </Link>
      </header>
      <hr />
      <div className="layout__container">
        <div />
        {children}
        <div />
      </div>
    </section>
  );
};

export default index;
