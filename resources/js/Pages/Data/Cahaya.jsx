import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Cahaya({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Cahaya" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-20 lg:px-20">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Data Cahaya!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
