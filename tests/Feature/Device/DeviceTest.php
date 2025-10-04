<?php

use App\Models\User;
use App\Models\Device;
use App\Models\Category;

test('devices index page is displayed', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get(route('devices.index'));
    $response->assertStatus(200);
});

test('devices are displayed on the index page', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    $devices = Device::factory()->count(3)->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->get(route('devices.index'));

    $response->assertInertia(fn ($page) => $page
        ->component('device/index')
        ->has('devices', 3)
    );
});

test('device create page is displayed', function () {
    $user = User::factory()->withRole('admin')->create();
    $response = $this->actingAs($user)->get(route('devices.create'));
    $response->assertStatus(200);
});

test('a new device can be created', function () {
    $user = User::factory()->withRole('admin')->create();
    $category = Category::factory()->create();

    $response = $this->actingAs($user)->post(route('devices.store'), [
        'name' => 'New Device',
        'description' => 'New Device Description',
        'category_id' => $category->id,
    ]);

    $response->assertRedirect(route('devices.index'));
    $this->assertDatabaseHas('devices', ['name' => 'New Device']);
});

test('device show page is displayed', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->get(route('devices.show', $device));

    $response->assertInertia(fn ($page) => $page
        ->component('device/show')
        ->has('device', fn ($page) => $page
            ->where('id', $device->id)
            ->etc()
        )
    );
});

test('device edit page is displayed', function () {
    $user = User::factory()->withRole('admin')->create();
    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->get(route('devices.edit', $device));

    $response->assertInertia(fn ($page) => $page
        ->component('device/edit')
        ->has('device', fn ($page) => $page
            ->where('id', $device->id)
            ->etc()
        )
    );
});

test('a device can be updated', function () {
    $user = User::factory()->withRole('admin')->create();
    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->put(route('devices.update', $device), [
        'name' => 'Updated Device',
        'description' => 'Updated Device Description',
        'category_id' => $category->id,
    ]);

    $response->assertRedirect(route('devices.index'));
    $this->assertDatabaseHas('devices', ['name' => 'Updated Device']);
});

test('a device can be deleted', function () {
    $user = User::factory()->withRole('admin')->create();
    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->delete(route('devices.destroy', $device));

    $response->assertRedirect(route('devices.index'));
    $this->assertDatabaseMissing('devices', ['id' => $device->id]);
});
