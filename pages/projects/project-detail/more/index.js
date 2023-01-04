import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumbs } from "../../../../components/common/Breadcrumbs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const more = () => {
  return (
    <div className="py-40">
      <Breadcrumbs />
    </div>
  );
};
export default more;
