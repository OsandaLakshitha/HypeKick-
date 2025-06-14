const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg p-6 m-4 text-gray-100 border border-gray-300 border-opacity-30">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg mb-4 object-cover w-full h-48"
        />
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default Card;
