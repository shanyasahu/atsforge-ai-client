import logo from "../../assets/logo.png";
export default function Logo() {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="w-full h-10 md:h-14 object-contain"
      />
    </div>
  );
}
