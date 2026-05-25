import NavHeader from './nav';

const navOptions = ['Home', 'About', 'Blog', 'Help'];

const services = [
  {
    title: 'Pet friendly',
    description: 'Designed spaces and services for your pets comfort and happiness.',
    icon: '🐾',
  },
  {
    title: 'Care',
    description: 'Trusted care plans with experienced professionals and vets.',
    icon: '🏠',
  },
  {
    title: 'Veterinarians',
    description: 'Certified vets ready to support your pets health every step.',
    icon: '👨‍⚕️',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fff5ee] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <NavHeader logo="WAG!" options={navOptions} />

        <section className="mt-10 overflow-hidden bg-[#d7ebff] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.12)] sm:p-12">
          <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div className="space-y-6">
              <div className="inline-flex bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200">
                Pet friendly web
              </div>
              <div className="space-y-5">
                <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Your pet friendly web
                </h1>
                <p className="max-w-lg text-base leading-8 text-slate-700 sm:text-lg">
                  A modern pet platform to connect owners with care, booking and expert support for every furry friend.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-[#fa824c] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#fa824c]/20 transition hover:bg-[#f96b30]">
                  Log in
                </button>
                <a href="#services" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                  Discover services
                </a>
              </div>
            </div>

            <div className="relative grid gap-4">
              <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#ffe8d1] blur-3xl"></div>
              <div className="absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-[#9accff]/30 blur-3xl"></div>
              <div className="relative bg-slate-200 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
                <div className="h-[360px] bg-slate-300"></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-40 bg-slate-200"></div>
                <div className="h-40 bg-slate-200"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-12">
            <div className="inline-flex bg-[#fff6ea] px-4 py-2 text-sm font-semibold text-[#fa824c] ring-1 ring-[#fa824c]/10">
              Why pet owners choose us
            </div>
            <h2 className="mt-8 text-3xl font-bold text-slate-950">Why pet owners choose us</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
              Trusted service for every type of pet, from playful puppies to calm birds. WAG makes it easy to find care, support and peace of mind.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-slate-200 p-6"></div>
            <div className="bg-slate-200 p-6"></div>
            <div className="bg-slate-200 p-6"></div>
            <div className="bg-slate-200 p-6"></div>
          </div>
        </section>

        <section id="services" className="bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-12">
          <div className="mb-10 grid gap-6 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#fff6ea] px-4 py-2 text-sm font-semibold text-[#fa824c] ring-1 ring-[#fa824c]/10">
              Our services
            </span>
            <h2 className="text-3xl font-bold text-slate-950">Our services</h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-700">
              Pet-friendly services, care planning, and veterinary support designed for happy owners and healthy pets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="space-y-6 border border-slate-200 bg-[#fffbf6] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                <button className="mx-auto inline-flex items-center rounded-full bg-[#fa824c] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#f96b30]">
                  Go there
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-6 border border-slate-200 bg-white/90 px-6 py-8 text-sm text-slate-600 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="font-semibold text-slate-900">WAG!</div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="cursor-pointer transition hover:text-slate-900">Home</span>
            <span className="cursor-pointer transition hover:text-slate-900">About</span>
            <span className="cursor-pointer transition hover:text-slate-900">Blog</span>
            <span className="cursor-pointer transition hover:text-slate-900">Help</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
