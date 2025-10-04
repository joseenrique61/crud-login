import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Device } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Devices',
        href: route('devices.index') as string,
    },
];

export default function DeviceIndex({ devices }: { devices: Device[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Devices'/>
            <Card>
                <CardHeader>
                    <CardTitle>Devices</CardTitle>
                    <CardDescription>A list of all the devices in the system.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-end mb-4">
                        <Link href={route('devices.create')}>
                            <Button>Create Device</Button>
                        </Link>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {devices.map((device) => (
                                <TableRow key={device.id}>
                                    <TableCell>{device.name}</TableCell>
                                    <TableCell>{device.description}</TableCell>
                                    <TableCell>{device.category.name}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Link href={route('devices.show', device.id)}>
                                            <Button variant={'outline'}>View</Button>
                                        </Link>
                                        <Link href={route('devices.edit', device.id)}>
                                            <Button variant={'outline'}>Edit</Button>
                                        </Link>
                                        <Link
                                            href={route('devices.destroy', device.id)}
                                            method="delete"
                                            as="button"
                                        >
                                            <Button variant={'destructive'}>Delete</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AppLayout>
    );
}
