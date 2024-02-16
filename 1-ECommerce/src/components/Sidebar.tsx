interface SidebarProps {
  isMenuVisible: boolean;
  classWhenActive: string;
  children: React.ReactNode;
}

export const Sidebar = ({
  isMenuVisible,
  classWhenActive,
  children,
}: SidebarProps) => (
  <div
    className={`fixed -left-48 top-0 flex h-full w-48 flex-col gap-8 overflow-scroll border
    bg-white px-4 py-20 transition-transform ${isMenuVisible ? classWhenActive : ""}`}
  >
    {children}
  </div>
);
