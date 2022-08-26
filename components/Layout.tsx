import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  header: {};
  footer: {};
};

const Layout = ({
  children,
  title = "This is the default title",
  header,
  footer,
}: Props) => (
  <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
      ></meta>
      <meta name="robots" content="noindex,nofollow" />
      <link
        rel="canonical"
        href="https://example.com/contact"
        key="canonical"
      />
    </Head>
    <Header data={header} />
    {children}
    <Footer data={footer} />
  </div>
);

export default Layout;
