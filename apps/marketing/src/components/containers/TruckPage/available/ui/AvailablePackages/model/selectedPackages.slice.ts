import { rootReducer } from "@/store/redux/redux";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  selected: number[];
  totalQuantitySelected: number;
  totalWeight: number;
};

const initialState: State = {
  selected: [],
  totalQuantitySelected: 0,
  totalWeight: 0,
};

export const selectedPackagesSlice = createSlice({
  name: "selected-packages",
  initialState,
  selectors: {
    selectedPackages: createSelector(
      (state: State) => state.selected,
      (selected) => selected
    ),
    selectedPackageById: createSelector(
      (state: State, id: number) => state.selected.includes(id),
      (isSelected) => isSelected
    ),
    totalWeight: (state) => state.totalWeight,
    totalQuantitySelected: (state) => state.totalQuantitySelected,
  },
  reducers: {
    toggleSelectedPackage: (
      state,
      action: PayloadAction<{ packageId: number; weight: number }>
    ) => {
      const { packageId, weight } = action.payload;
      const isSelected = state.selected.includes(packageId);

      if (isSelected) {
        state.selected = state.selected.filter((id) => id !== packageId);
        state.totalQuantitySelected -= 1;
        state.totalWeight -= weight;
      } else {
        state.selected.push(packageId);
        state.totalQuantitySelected += 1;
        state.totalWeight += weight;
      }
    },
    clearSelectedPackages: (state) => {
      state.selected = [];
      state.totalQuantitySelected = 0;
      state.totalWeight = 0;
    },
  },
}).injectInto(rootReducer);

export const { toggleSelectedPackage, clearSelectedPackages } =
  selectedPackagesSlice.actions;

export const selectSelectedPackages =
  selectedPackagesSlice.selectors.selectedPackages;
export const selectSelectedPackageById =
  selectedPackagesSlice.selectors.selectedPackageById;
export const selectTotalWeight = selectedPackagesSlice.selectors.totalWeight;
export const selectTotalQuantitySelected =
  selectedPackagesSlice.selectors.totalQuantitySelected;
