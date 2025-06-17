export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="h-svh w-full flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">{children}</div>
    </div>
  );
}
