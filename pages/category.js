import Link from "next/link";


function Category() {

  return (
      <div className="category">
        <img src={imageSrc} alt={heading} />
        < h1 >{heading}</h1>
      </div>
  );
}

export default Category;
