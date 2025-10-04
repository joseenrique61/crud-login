<?php

use App\Models\Category;
use App\Models\Device;
use App\Models\User;

test('a user cannot access device creation page', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get(route('devices.create'));
    $response->assertStatus(403);
});

test('a user cannot access device edit page', function () {
    $user = User::factory()->create();

    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->get(route('devices.edit', $device->id));
    $response->assertStatus(403);
});

test('a user cannot create a device', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->post(route('devices.store'), [
        'name' => 'New Device',
        'description' => 'New Device Description',
        'category_id' => 0,
    ]);
    $response->assertStatus(403);
});

test('a user cannot edit a device', function () {
    $user = User::factory()->create();

    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->put(route('devices.update', $device->id), [
        'name' => 'New Device',
        'description' => 'New Device Description',
        'category_id' => 0,
    ]);
    $response->assertStatus(403);
});

test('a user cannot delete a device', function () {
    $user = User::factory()->create();

    $category = Category::factory()->create();
    $device = Device::factory()->create(['category_id' => $category->id]);

    $response = $this->actingAs($user)->delete(route('devices.destroy', $device->id));
    $response->assertStatus(403);
});