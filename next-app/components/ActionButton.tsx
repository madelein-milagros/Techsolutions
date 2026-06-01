import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default function ActionButton({
  label,
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
}: ActionButtonProps) {
  const base = "font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-sm";

  const styles = {
    primary:
      "bg-[#7c2532] text-[#ffc29e] hover:bg-[#9f353e] border border-[#9f353e]",
    secondary:
      "bg-transparent text-[#7c2532] border border-[#7c2532] hover:bg-[#ffc29e] hover:text-[#7c2532]",
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${styles[variant]} ${
        (disabled || loading) ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-[#ffc29e] border-t-transparent rounded-full animate-spin" />
          Cargando...
        </span>
      ) : (
        label
      )}
    </Button>
  );
}