type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
  return (
    <div className="flex flex-col justify-between items-center h-screen font-inter bg-[#1B1B1B]">
      {children}
    </div>
  );
}
