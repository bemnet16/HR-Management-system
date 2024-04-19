import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

interface sidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: sidebarItemProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(href);
  };

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname.startsWith(`${href}/`);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex w-full items-center gap-x-2 text-slate-500 text-[16px] font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          " text-[#1570EF]  hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-3">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
