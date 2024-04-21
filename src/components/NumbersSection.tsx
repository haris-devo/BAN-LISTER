const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex p-4 items-center justify-center flex-col gap-2 rounded-lg   text-black">
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl font-normal">{value}</p>
      <p className="uppercase text-lg">{label}</p>
    </div>
  </div>
);

const NumbersSection = () => {
  const stats = [
    {
      value: "287,624",
      label: "Searches",
    },
    {
      value: "2,125",
      label: "users",
    },
    {
      value: "13",
      label: "Partners",
    },
    {
      value: "2,256",
      label: "Records",
    },
  ];

  return (
    <section className=" mx-10 md:mx-40 ">
      <div className="container grid grid-cols-1 gap-2 md:gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
