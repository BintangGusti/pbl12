import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
NavLink;

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <section className="flex justify-between items-center">
                <h2 className="mt-10 pb-px font-bold text-right w-40">
                    Terbaru
                </h2>
            </section>
            <div className="flex flex-wrap justify-center">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/6 ">
                    <h2 className="mt-10 pb-px font-medium text-center">Suhu</h2>
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl border-green-200 p-7  drop-shadow-md  rounded-2xl ">
                        <h1 className="flex-auto p-4 text-center">30°C</h1>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/6">
                    <h2 className="mt-10 pb-px font-medium text-center">
                        Kelembapan
                    </h2>
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl border-green-200 p-7  drop-shadow-md  rounded-2xl ">
                        <h1 className="flex-auto p-4 text-center ">20Rh</h1>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/6">
                    <h2 className="mt-10 pb-px font-medium text-center">
                        Kelembapan Udara
                    </h2>
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl border-green-200 p-7  drop-shadow-md  rounded-2xl   ">
                        <h1 className="flex-auto p-4 text-center">100%</h1>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/6">
                    <h2 className="mt-10 pb-px font-medium text-center">
                        Intensitas Cahaya
                    </h2>
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl border-green-200 p-7  drop-shadow-md  rounded-2xl ">
                        <h1 className="flex-auto p-4 text-center">4000 Cd</h1>
                    </div>
                </div>

                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/6">
                    <h2 className="mt-10 pb-px font-medium text-center ">
                        Kebutuhan Air Tanaman
                    </h2>
                    <div className="relative flex flex-col min-w-0 border-black bg-white shadow-xl drop-shadow-md p-7 rounded-2xl">
                        <h1 className="flex-auto p-4 text-center">
                            0,2liter/Tanaman
                        </h1>
                    </div>
                    <div className="mt-7 flex justify-end">
                        <div
                            style={{ backgroundColor: "#D3F8C9" }}
                            className="rounded-2xl py-2 px-7 text-black"
                        >
                            <NavLink
                                href={route("tabledata")}
                                className="text-black"
                            >
                                Lihat Perjam
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
