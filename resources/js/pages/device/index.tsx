import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Devices',
        href: route('devices.index') as string,
    },
];

export default function DeviceIndex({ devices }: { devices: Device[] }) {
    const role = usePage().props.auth.user.role.role;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Devices" />
            <Card>
                <CardHeader>
                    <CardTitle>Devices</CardTitle>
                    <CardDescription>
                        A list of all the devices in the system.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex justify-end">
                        {role === 'admin' && (
                            <Button asChild>
                                <Link href={route('devices.create')}>
                                    Create Device
                                </Link>
                            </Button>
                        )}
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
                                    <TableCell>
                                        {device.category.name}
                                    </TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button variant={'outline'} asChild>
                                            <Link
                                                href={route(
                                                    'devices.show',
                                                    device.id,
                                                )}
                                            >
                                                View
                                            </Link>
                                        </Button>
                                        {role === 'admin' && (
                                            <>
                                                <Button
                                                    variant={'outline'}
                                                    asChild
                                                >
                                                    <Link
                                                        href={route(
                                                            'devices.edit',
                                                            device.id,
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </Button>
                                                <Button variant={'destructive'} asChild>
                                                    <Link
                                                        href={route(
                                                            'devices.destroy',
                                                            device.id,
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                    >
                                                        Delete
                                                    </Link>
                                                </Button>
                                            </>
                                        )}
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
