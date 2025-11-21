import React from "react";
import Image from "next/image";
import LOGO from "@/public/cmi_logo.png";

function page() {
  return (
    <>
      {/* <h1 className="text-xl font-bold mb-4">ໜ້າຫຼັກ</h1> */}
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <div className="flex items-center justify-center">
          <Image src={LOGO} width={250} height={250} alt="logo" />
        </div>
        <p className="text-xl font-bold mt-4">
          ສະຖາບັນການເງິນຈູລະພາກທີ່ຮັບເງິນຝາກ ຈຳປາສັກ ຈຳກັດ
        </p>
      </div>
    </>
  );
}

export default page;
