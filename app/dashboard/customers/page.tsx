import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { TableRowSkeleton } from '@/app/ui/skeletons';


export const metadata: Metadata = {
    title: 'Customer',
};



export default async function Customers({ searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    const customerList = await fetchFilteredCustomers(query);

    return <div className="w-full">
        
            <CustomersTable customers={customerList} />


    </div>;
}