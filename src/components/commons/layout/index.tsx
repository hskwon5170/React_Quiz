import { ReactNode } from "react";
import LayoutHeader from "./header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <LayoutHeader />
      <main>{props.children}</main>
    </>
  );
}
