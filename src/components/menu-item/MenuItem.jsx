import "./MenuItem.scss";

export default function MenuItem({ title, imgUrl, size }) {
  return (
    <section className={`${size} menu-item `}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </section>
  );
}
