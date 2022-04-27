function Links() {
  const arr = [
    { type: "Services", style: "link" },
    { type: "Projects", style: "link" },
    { type: "About", style: "link" },
  ];

  return (
    <div className="Links">
      {arr.map((el) => {
        return <p className={el.style}>{el.type}</p>;
      })}
    </div>
  );
}
export default Links;
