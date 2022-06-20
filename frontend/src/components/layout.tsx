import Nav from "./nav";

interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
}
export default function ({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
