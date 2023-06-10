import { MagnifyingGlass } from 'react-loader-spinner';
import css from "./Loader.module.css"
export const Loader = () => {
  return (

    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
        color="#1d31df"
          />
  );
};
