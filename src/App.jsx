import Header from "./components/Header";
import avatarPixelArt from "../public/image/profile-pixel-art.png";

const App = () => {
  const buttons = [
    { button: 1, label: "home", section: '' },
    { button: 1, label: "abount", section: '' },
    { button: 1, label: "contact", section: '' },
  ];
  return <Header urlAvatarImage={avatarPixelArt} listButtons={buttons} />;
};

export default App;
