import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Device } from '@/types';

export default function DeviceShow({ device }: { device: Device }) {
    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>{device.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <h3 className="font-semibold">Description</h3>
                        <p>{device.description}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Category</h3>
                        <p>{device.category.name}</p>
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    );
}
