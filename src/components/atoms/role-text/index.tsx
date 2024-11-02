interface RoleTextString {
  text: string;
  className?: string;
}

export function RoleText({ text, className }: RoleTextString) {
  return (
    <div className={className}>
      <h1 className="text-4xl uppercase font-semibold">{text}</h1>
      <div className="my-3 border-[1px] border-galaxy_core w-16" />
    </div>
  );
}
