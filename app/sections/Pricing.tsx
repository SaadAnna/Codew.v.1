const Pricings = [
  {
    id: 1,
    title: "Basic",
    price: "159$",
    featureone: "✔ 5 Custom Pages (Home, About, Services, Portfolio, Contact)",
    featuretwo: "✔  Mobile-Friendly Design (Responsive on all devices)",
    featurethree: "✔ Basic SEO Setup (Meta tags, keywords, sitemap)",
    featurefour: " ✔ Contact Form Integration",
    featurefive: "✔ 1 Month Free Support",
  },
  {
    id: 2,
    title: "Standard ",
    price: "499$",
    featureone: "✔ 10 Custom Pages (Extra pages like Blog, Testimonials, FAQ)",
    featuretwo: "✔ Mobile-Optimized & Fast Loading",
    featurethree: "✔ Advanced SEO Optimization (On-page SEO, speed optimization)",
    featurefour: "✔ Social Media Integration",
    featurefive: "✔ Basic CMS (WordPress) Setup",
    featuresix: "✔ 3 Months Free Support",
  },
  {
    id: 1,
    title: "Premium",
    price: "999$",
    featureone: "✔ 15+ Pages with E-Commerce Functionality (Shop, Cart, Checkout)",
    featuretwo: "✔ SEO + Speed Optimization (Rank higher on Google)",
    featurethree: "✔ Payment Gateway Integration (Stripe, PayPal, etc.)",
    featurefour: "✔ Product Management System",
    featurefive: "✔ 6 Months Free Support & Maintenance",
  },
];
export const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="px-4 lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center gap-14">
        <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Chose the plan you need.{" "}
       
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Pricings.map((pricing) => (
  <div
  key={pricing.id}
  className="flex flex-col relative  text-start justify-start gap-3.5 p-3.5 bg-neutral-950 border border-white/5 rounded-xl cursor-pointer ease-in-out transition-all hover:border-white/20"
>
<div className="flex justify-between items-center">

<div className="text-3xl text-white font-medium">
    {pricing.title}
</div>
<div className="text-xl text-white font-medium">
    {pricing.price}
</div>
</div>
<div className="flex flex-col mt-5 gap-3">
    
<div className="text-base text-white/30 font-medium">
  {pricing.featureone}
</div>
<div className="text-base text-white/30 font-medium">
  {pricing.featuretwo}
</div>
<div className="text-base text-white/30 font-medium">
  {pricing.featurethree}
</div>
<div className="text-base text-white/30 font-medium">
  {pricing.featurefour}
</div>
<div className="text-base text-white/30 font-medium">
  {pricing.featurefive}
</div>
</div>
</div>
 ))}
      </div>
      <div className="text-xl text-white/50 font-medium max-w-xl text-center">
      Please note that all of these are preliminary. You can choose any one of them at the same price or request another project by contacting us.
      </div>
      </div>
    </section>
  );
};
export default Pricing;
