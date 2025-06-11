const Pricings = [
  {
    id: 1,
    title: "Normal",
    price: "50$",
    featuresone: "hgfrv",
    featuretwo: "hgeufy",
    featurethree: "rfhrb",
  },
  {
    id: 2,
    title: "Pro",
    price: "50$",
    generale: "All normal plan features",
    featuresone: "hgfrv",
    featuretwo: "hgeufy",
    featurethree: "rfhrb",
    featurefour: "rfhrb",
    featurefive: "rfhrb",
    featuresix: "rfhrb",
  },
  {
    id: 1,
    title: "Pro Plus",
    price: "50$",
    general: "All normal and pro plans features",
    featuresone: "hgfrv",
    featuretwo: "hgeufy",
    featurethree: "rfhrb",
    featurefour: "rfhrb",
    featurefive: "rfhrb",
    featuresix: "rfhrb",
    featureseven: "rfhrb",
  },
];
export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="px-4 lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center gap-14">
        <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Chose the plan you need.{" "}
       
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Pricings.map((pricing) => (
  <div
  key={pricing.id}
  className="flex flex-col relative  text-start justify-start gap-3.5 p-3.5 bg-neutral-950 border border-white/5 rounded-xl cursor-pointer transition-300 hover:bg-white/4"
>

<div className="text-2xl text-white font-medium">
    {pricing.title}
</div>
<div className="text-lg text-white font-medium">
    {pricing.price}
</div>
<div className="flex flex-col mt-5 gap-3">
    
<div className="text-lg text-whit/20 font-medium">
  {pricing.featuresone}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featuretwo}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featurethree}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featurefour}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featurefive}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featuresix}
</div>
<div className="text-lg text-whit/20 font-medium">
  {pricing.featureseven}
</div>
</div>
</div>
 ))}
      </div>
      </div>
    </section>
  );
};
export default Pricing;
