/* eslint-disable react/no-unescaped-entities */


const TestimonialCard = ({ image, text, name, title, borderColor }) => (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center bg-gray-500 border border-gray-700 rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <img
                alt={`${name} testimonial`}
                className={`w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 ${borderColor} bg-gray-300 transition-transform duration-500 hover:scale-110`}
                src={image}
            />
            <p className="leading-relaxed text-white transition-opacity duration-500 hover:opacity-75">{text}</p>
            <span className="inline-block h-1 w-10 rounded bg-gray-700 mt-6 mb-4 transition-width duration-500 hover:w-12" />
            <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">{name}</h2>
            <p className="text-gray-300">{title}</p>
        </div>
    </div>
);

const Testimonial = () => {
    return (
        <div>
            <section className="text-blue-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className="text-center text-3xl font-bold text-black">Testimonial</h1>
                    <h2 className="text-center text-2xl font-semibold mb-10">
                        What our <span className="text-blue-700">customers</span> are saying
                    </h2>
                    <div className="flex flex-wrap -m-4">
                        <TestimonialCard
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W7l5DnhgQfAlgtz6F23qb1xdYjrL69HwqA&s"
                            name="James Bond"
                            title="Reactjs Developer"
                            text="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                            borderColor="border-blue-500"
                        />
                        <TestimonialCard
                            image="https://www.devknus.com/img/gawri.png"
                            text="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                            name="Allse Helly"
                            title="MernStack Developer"
                            borderColor="border-blue-500"
                        />
                        <TestimonialCard
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYr7FCquosHd3uYYnMf4w0G3LXK2e3bpLrA&s"
                            text="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                            name="Charly Pierre "
                            title="Android  Developer"
                            borderColor="border-blue-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
