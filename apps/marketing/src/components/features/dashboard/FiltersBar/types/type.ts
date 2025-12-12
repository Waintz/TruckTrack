export type ISearchFilter = {
  isActive: boolean;
  placeholder?: string;
};

export type ICityFilter = {
  isActive: boolean;
};

export type IDepartmentFilter = {
  isActive: boolean;
};

export interface IFiltersBarProps {
  options: {
    search?: ISearchFilter;
    city?: ICityFilter;
    department?: IDepartmentFilter;
    date?: boolean;
  };
}
