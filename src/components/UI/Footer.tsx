const Footer: React.FC = () => {
  return (
    <footer>
      <span className="hover:cursor-pointer transition-all duration-300 hover:underline">
        @ &copy; {new Date().getFullYear()} Moluno Progress
      </span>
    </footer>
  );
};

export default Footer;
