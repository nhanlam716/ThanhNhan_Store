import React, { useEffect, useState } from "react";
import InputCheckOut from "../../../../components/inputForm/InputCheckOut";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDistricts,
  fetchProvinces,
  fetchWards,
  resetDistrictsAndWards,
  resetWards,
} from "../../../../stores/slices/locationSlices";
import { AppDispatch, RootState } from "../../../../stores/store";

export interface ILocation {
  code: string;
  name: string;
}

const FormProvinces = ({ formik }: { formik: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { provinces, districts, wards } = useSelector(
    (state: RootState) => state.locationState
  );

  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedWard, setSelectedWard] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProvinces());
  }, [dispatch]);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = e.target.value;
    if (provinceId !== selectedProvince) {
      setSelectedProvince(provinceId);
      dispatch(resetDistrictsAndWards());
      if (provinceId) dispatch(fetchDistricts(provinceId));
    }
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = e.target.value;
    if (districtId !== selectedDistrict) {
      setSelectedDistrict(districtId);
      dispatch(resetWards());
      if (districtId) dispatch(fetchWards(districtId));
    }
  };

  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wardId = e.target.value;
    setSelectedWard(wardId);
  };

  return (
    <div>
      <div className="my-4 p-4">
        <div className="flex gap-3 mb-3">
          <select
            value={selectedProvince || ""}
            onChange={handleProvinceChange}
            className="flex-1 border-solid border rounded-md border-[#ccc]"
          >
            <option value="">Chọn Tỉnh/Thành phố</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
          <select
            value={selectedDistrict || ""}
            onChange={handleDistrictChange}
            className="flex-1 border-solid border rounded-md border-[#ccc]"
            disabled={!selectedProvince}
          >
            <option value="">Chọn Quận/Huyện</option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
          <select
            value={selectedWard || ""}
            onChange={handleWardChange}
            className="flex-1 border-solid border rounded-md border-[#ccc]"
            disabled={!selectedDistrict}
          >
            <option value="">Chọn Phường/Xã</option>
            {wards.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </select>
        </div>
        <InputCheckOut
          placeholder="Địa chỉ: Thôn, xóm, đường, số nhà"
          types="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address && (
          <p className="text-red-500">{formik.errors.address}</p>
        )}
      </div>
    </div>
  );
};

export default FormProvinces;
