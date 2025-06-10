const Pricings = [
    {
        id: 1,
        tile: "Normal",
        price: "50$",
        featuresone: "hgfrv",
        featuretwo: "hgeufy",
        featurethree: "rfhrb",
        },
    {
        id: 2,
        title: "Pro",
        price: "50$",
        generale:"All normal plan features",
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
]
export const Pricing = () => {
    return (
        <section className="py-24">

        <div className="px-4 lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center gap-14">
        <div className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
    Chose the plan you need.        </div>
        </div>
        </section>
    )
}
export default Pricing;