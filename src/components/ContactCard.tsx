import { ContactCardProps } from "@/app/types/contactCard";

export default function ContactCard({
  icon: Icon,
  title,
  description,
  className,
}: ContactCardProps) {
  return (
    <div
      className={`bg-card rounded-xl flex flex-col p-8 justify-between items-center ${className} gap-2 hover:bg-secondary-btn-hover hover:cursor-pointer group transition duration-300  1sn`}>
      <Icon className="w-8 h-8 text-secondary-btn-hover group-hover:text-card" />
      <h2 className="text-secondary-btn-hover font-semibold group-hover:text-card">
        {title}
      </h2>
      <p
        className={`text-secondary-btn-hover group-hover:text-card ${
          title === "Address" && "text-sm"
        }`}>
        {description}
      </p>
    </div>
  );
}
