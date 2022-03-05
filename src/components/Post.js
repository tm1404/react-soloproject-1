import React from "react";
import iconlokasi from "../img/iconlokasi.png";

const Post = (props) => {
  return (
    <section className="flex flex-col gap-[1.25rem]">
      <div className="mt-8 flex gap-8 w-[100ch]">
        <img
          src={props.imageUrl}
          loading="lazy"
          className="w-[10rem] h-[13rem] rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <div className="flex pb-2 w-[20rem]">
            <img src={iconlokasi} className="mr-2 w-[1rem]" />
            <p className="uppercase tracking-[.2rem] mr-auto">
              {props.location}
            </p>
            <a href={props.googleMapsUrl} className="underline text-gray-400">
              View on Google Maps
            </a>
          </div>
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p className="font-bold pt-[1.25rem] pb-3">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
