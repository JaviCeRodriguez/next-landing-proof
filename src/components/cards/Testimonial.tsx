"use client";

import Image from "next/image";

type Props = {
  description: string;
  avatar: string;
  title: string;
  subtitle: string;
};

const ClientTestimonial = (props: Props) => {
  return (
    <div className="group bg-secondary-03 hover:bg-primary-02 hover: px-5 py-[60px] rounded-lg max-w-72 shadow-lg">
      <p className="text-lg text-secondary-04 group-hover:text-secondary-03 font-normal text-left mb-10">
        {props.description}
      </p>
      <hr className="border border-secondary-04 w-full mb-10" />
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <div>
          <Image
            src={props.avatar}
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full min-w-[50px] min-h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-3 text-left">
          <h4 className="text-2xl text-secondary-04 group-hover:text-secondary-03 font-semibold">
            {props.title}
          </h4>
          <h3 className="text-lg text-secondary-04 group-hover:text-secondary-03 font-normal">
            {props.subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
