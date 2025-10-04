import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Category, Device } from '@/types';
import { useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Devices',
        href: route('devices.index') as string,
    },
];

export default function DeviceEdit({ device, categories }: { device: Device; categories: Category[] }) {
    const { data, setData, put, errors } = useForm<Omit<Device, 'id' | 'category'>>({
        name: device.name,
        description: device.description,
        category_id: device.category_id,
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('devices.update', device.id));
    }

    breadcrumbs.push({
        title: 'Edit',
        href: route('devices.edit', device.id),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Device</CardTitle>
                    <CardDescription>Update the details of the device.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Enter device name"
                            />
                            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Enter device description"
                            />
                            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category_id">Category</Label>
                            <Select
                                name="category_id"
                                value={data.category_id.toString()}
                                onValueChange={(value) => setData('category_id', parseInt(value))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id.toString()}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.category_id && <p className="text-sm text-destructive">{errors.category_id}</p>}
                        </div>
                        <Button type="submit">Update</Button>
                    </form>
                </CardContent>
            </Card>
        </AppLayout>
    );
}
