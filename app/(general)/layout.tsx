import { Navbar } from "@/components";

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex flex-col">
        <Navbar></Navbar>
        {children}
      </main>
    </div>
  );
}