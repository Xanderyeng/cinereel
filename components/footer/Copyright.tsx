"use client"
import { Fragment, useState, useEffect } from "react";

const CopyrightYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
        {`© ${year}. All Rights Reserved.`}
    </Fragment>
  );
};

export default CopyrightYear;