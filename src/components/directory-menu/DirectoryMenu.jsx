import { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import "./DirectoryMenu.scss";

export default function DirectoryMenu() {
  const [menuItems, setMenuItems] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "watches",
      imageUrl:
        "https://i0.wp.com/watchessiam.com/wp-content/uploads/2022/01/5-Best-Dress-Watch-Collection-2021-by-WATCHESSIAM.jpg?w=1920&ssl=1",
      size: "large",
      id: 4,
      linkUrl: "shop/watches",
    },
    {
      title: "perfumes",
      imageUrl:
        "https://static7.depositphotos.com/1156423/680/i/600/depositphotos_6808687-stock-photo-perfume-collection.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/perfumes",
    },
  ]);

  return (
    <div className="directory-menu">
      {menuItems.map(({ title, id, imageUrl, size }) => {
        return (
          <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
}
