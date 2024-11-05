import { useNavigate } from "react-router-dom";

export default function Card({ recipe }) {
  const { additional_text, name, listing_date, issue_price } = recipe;

  const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`/recipe/${issue_price}/instructions`);
  };

  return (
    <div
      className="card bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 sm:p-6 md:flex md:items-center md:space-x-4"
      onClick={navigateToRecipePage}
    >
      {/* Uncomment if you have a thumbnail URL
      <img src={thumbnail_url} alt="" className="w-full h-48 object-cover rounded-t-lg md:w-1/3 md:rounded-lg" />
      */}
      <div className="card-content flex flex-col justify-between md:w-2/3">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:text-xl md:text-2xl lg:text-3xl">{name}</h3>
        
        <div className="card-info flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="tag bg-gray-100 rounded-md p-2 text-sm text-gray-600 sm:text-base md:text-lg">
            <p>{additional_text}</p>
          </div>
          <p className="time-text text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl">{listing_date}</p>
        </div>
      </div>
    </div>
  );
}

