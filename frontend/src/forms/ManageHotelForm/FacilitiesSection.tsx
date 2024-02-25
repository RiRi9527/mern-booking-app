import { hotelFacilities } from "../../config/hotel-options-config.ts";

import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm.tsx";

const FacilitiesSection = () => {
  const {
    register,

    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelFacilities.map((facilitie) => (
          <label key={facilitie} className="text-sm flex gap-1  text-gray-700">
            <input
              type="checkbox"
              value={facilitie}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facilitie is required";
                  }
                },
              })}
            />
            <span>{facilitie}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};
export default FacilitiesSection;
