const FooterLinks = () => {
  return (
    <div className="flex justify-between gap-20 mt-10 md:mt-0">
      {/* Contact Section */}
      <div>
        <p className="text-gray-500 mb-2 text-xs">CONTACT</p>
        <div className="text-lg flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/annuraggg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 duration-300 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/annuraggg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 duration-300 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/annuraggg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 duration-300 transition-all"
          >
            Instagram
          </a>
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 duration-300 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
