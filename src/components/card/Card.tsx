import Image from "next/image";
import Link from "next/link";

export interface ICardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const Card = ({ image, title, description, href }: ICardProps) => {
  return (
    <Link href={href}>
      <article className="flex flex-col gap-2 p-2 rounded-xl sm:hover:bg-primary">
        <Image
          src={image}
          width={1000}
          height={0}
          draggable={false}
          className="aspect-video object-cover rounded-xl sm:rounded-2xl md:rounded-xl"
          alt={title}
        />
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p className="line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
          {description}
        </p>
      </article>
    </Link>
  );
};
