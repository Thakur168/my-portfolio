import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 w-full min-h-screen bg-[#f1f1f7] p-10">{children}</main>
    </div>
  );
}
