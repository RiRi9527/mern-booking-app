import { HotelFormData } from "./ManageHotelForm.tsx";
import { useFormContext } from "react-hook-form";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex bg-gray-300 gap-5 p-6">
        <label className="text-gray-700 text-sm font-semibold flex-1 ">
          Adults
          <input
            type="number"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          ></input>
          {errors.adultCount?.message && (
            <span className="text-red-500">{errors.adultCount.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold flex-1">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("childCount", { required: "This field is required" })}
          ></input>
          {errors.childCount?.message && (
            <span className="text-red-500">{errors.childCount.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
