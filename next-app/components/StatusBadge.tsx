import { Badge } from "@/components/ui/badge";

type Status = "Activo" | "En Progreso" | "Finalizado";

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<Status, string> = {
    Activo:
      "bg-[#7c2532] text-[#ffc29e] border border-[#9f353e] hover:bg-[#9f353e]",
    "En Progreso":
      "bg-[#d95151] text-white border border-[#ff8479] hover:bg-[#ff8479]",
    Finalizado:
      "bg-[#ffc29e] text-[#7c2532] border border-[#ff8479] hover:bg-[#ff8479]",
  };

  return (
    <Badge className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[status]}`}>
      {status}
    </Badge>
  );
}