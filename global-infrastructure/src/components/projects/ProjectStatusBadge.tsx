
import { Badge } from "@/components/ui/badge";
import { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  const getStatusClass = () => {
    switch (status) {
      case ProjectStatus.PLANNED:
        return "status-planned";
      case ProjectStatus.ONGOING:
        return "status-ongoing";
      case ProjectStatus.COMPLETED:
        return "status-completed";
      case ProjectStatus.HALTED:
        return "status-halted";
      default:
        return "";
    }
  };

  return (
    <Badge variant="outline" className={cn(getStatusClass(), className)}>
      {status}
    </Badge>
  );
}
