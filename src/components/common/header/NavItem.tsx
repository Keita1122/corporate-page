type Props = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: Props) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}