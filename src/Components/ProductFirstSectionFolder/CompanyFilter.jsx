import { useState } from "react";
import "./CompanyFilter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  useProductContext,
  useProductDispatch,
} from "../ContextFolder/ProductContext";
import { useProductItemContext } from "../ContextFolder/ProductItemContext";

const CompanyFilter = () => {
  const [hideShow, setHideShow] = useState(false);
  const { companyInputValue } = useProductContext();
  const dispatch = useProductDispatch();
  const { allProducts } = useProductItemContext();
  const CompanyName = [
    "samsung",
    "apple",
    "rolex",
    "dell",
    "nokia",
    "asus",
    "lenova",
  ];
  const handleHideShow = () => {
    if (hideShow === false) {
      setHideShow(true);
    } else if (hideShow === true) {
      setHideShow(false);
    }
  };
  const handleCompanyName = (company) => {
    dispatch({
      type: "Set_Company_Filter",
      payload: { AllProducts: allProducts, companys: company },
    });
  };
  return (
    <>
      <div className="Company_Filter_container">
        <h3>Company</h3>
        <div className="Company_Filters_box" onClick={handleHideShow} >  
        <div className="company_input_box">
          <input
            type="text"
            className="companyInput"
            value={companyInputValue}
            readOnly
          />
          <RiArrowDropDownLine className="company_icon" />
        </div>
        {hideShow ? (
          <div className="companys_Option">
            {CompanyName.map((company, index) => {
              return (
                <p key={index} onClick={() => handleCompanyName(company)}>
                  {company}
                </p>
              );
            })}
          </div>
        ) : (
          ""
        )}
        </div>
      </div>
    </>
  );
};

export default CompanyFilter;
