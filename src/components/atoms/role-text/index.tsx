interface RoleTextString {
  text: string;
  className?: string;
}

export function RoleText({ text, className }: RoleTextString) {
  return (
    <p className={`uppercase text-xl font-light text-zinc-500 ${className}`}>
      {text}&nbsp;based in Indonesia
    </p>
  );
}
