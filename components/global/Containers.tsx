import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Containers = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto mx-w-6xl xl:max-w-7xl px-4", className)}>
      {children}
    </div>
  );
};

export default Containers;
