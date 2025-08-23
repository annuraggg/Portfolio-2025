import { CiCoffeeCup } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";

const links = [
  {
    name: "Buy Me a Coffee",
    url: "https://www.buymeacoffee.com/annuraggg",
    icon: <CiCoffeeCup size={25} />,
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/564130664643952690",
    icon: <RiDiscordLine size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/annuraggg",
    icon: <LuLinkedin size={20} />,
  },
  {
    name: "GitHub",
    url: "https://www.github.com/annuraggg",
    icon: <LuGithub size={20} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/annuraggg",
    icon: <LuInstagram size={20} />,
  },
  {
    name: "Resume",
    url: "/documents/resume.pdf", // resume goes in /public
  },
  {
    name: "Blog",
    url: "https://blog.anuragsawant.in",
  },
];

const NavbarLinks = () => {
  return (
    <div className="gap-1 md:gap-5 hidden md:flex">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center cursor-pointer bg-white/0 hover:bg-white/10 transition-all ease-linear duration-200 p-1.5 px-2 rounded-full"
        >
          {link.icon ? (
            link.icon
          ) : (
            <>
              {link.name}
              <RxArrowTopRight size={15} />
            </>
          )}
        </a>
      ))}
    </div>
  );
};

export default NavbarLinks;
