type Props = {
  children: React.ReactNode;
};

export default function PrototypeContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}
