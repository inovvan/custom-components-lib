interface MenuItemProps {
  value: string;
  children: React.ReactNode;
}

const MenuItem = ({ children }: MenuItemProps) => {
  return <>{children}</>;
};

export default MenuItem;
