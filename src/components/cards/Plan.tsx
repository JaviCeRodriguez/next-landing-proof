"use client";

type Props = {
  title: string;
  price: number;
  description: string;
  features: string[];
  isMain: boolean;
};

const Plan = (props: Props) => {
  if (props.isMain) {
    return (
      <div className="bg-primary-01 p-5 rounded-[10px] border border-primary-01 text-left">
        <h4 className="text-2xl text-secondary-03 font-semibold mb-6">
          {props.title}
        </h4>
        <h3 className="text-4xl text-secondary-03 font-bold mb-6">
          {props.price}
        </h3>
        <p className="text-base text-secondary-03 font-normal mb-6">
          {props.description}
        </p>
        <ul className="flex flex-col gap-7 mb-6">
          {props.features.map((feature, index) => (
            <li
              className="text-base text-secondary-03 font-normal"
              key={`${props.title}-${index + 1 - 1}`}
            >
              ✅ {feature}
            </li>
          ))}
        </ul>
        <button
          className="bg-primary-02 text-base text-secondary-03 font-normal px-10 py-5 rounded-lg"
          onClick={() => console.log("hola")}
        >
          Get Started
        </button>
      </div>
    );
  }

  return (
    <div className="bg-secondary-03 p-5 rounded-[10px] border border-secondary-01 text-left">
      <h4>{props.title}</h4>
      <h3>{props.price}</h3>
      <p>{props.description}</p>
      <ul>
        {props.features.map((feature, index) => (
          <li key={`${props.title}-${index + 1 - 1}`}>✅ {feature}</li>
        ))}
      </ul>
      <button onClick={() => console.log("hola")}>Get Started</button>
    </div>
  );
};

export default Plan;
