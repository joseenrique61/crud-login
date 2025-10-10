<?php

use App\Models\Role;
use App\Models\User;

test('users index page is rendered', function () {
    $admin = User::factory()->withRole('admin')->create();
    $response = $this->actingAs($admin)->get(route('users.index'));
    $response->assertStatus(200);
});

test('users show page is rendered', function () {
    $admin = User::factory()->withRole('admin')->create();
    $user = User::factory()->create();

    $response = $this->actingAs($admin)->get(route('users.show', $user->id));
    $response->assertStatus(200);
});

test('users create page is rendered', function () {
    $admin = User::factory()->withRole('admin')->create();
    $response = $this->actingAs($admin)->get(route('users.create'));
    $response->assertStatus(200);
});

test('a new user can be created', function () {
    $admin = User::factory()->withRole('admin')->create();
    $role = Role::where('role', 'user')->firstOrFail();
    
    $response = $this->actingAs($admin)->post(route('users.store'), [
        'name' => 'Test User',
        'email' => 'test_email@gmail.com',
        'password' => 'TestPassword123',
        'password_confirmation' => 'TestPassword123',
        'role_id' => $role->id
    ]);

    $response->assertRedirect(route('users.index'));
    $this->assertDatabaseHas('users', ['email' => 'test_email@gmail.com']);
});

test('users edit page is rendered', function () {
    $admin = User::factory()->withRole('admin')->create();
    $user = User::factory()->create();
    
    $response = $this->actingAs($admin)->get(route('users.edit', $user->id));
    $response->assertStatus(200);
});

test('a user can be edited', function () {
    $admin = User::factory()->withRole('admin')->create();
    $user = User::factory()->create(['name' => 'Test User']);
    
    $response = $this->actingAs($admin)->put(route('users.update', $user), [
        'name' => 'Updated Test User',
        'email' => 'test_email@gmail.com',
    ]);

    $response->assertRedirect(route('users.index'));
    $this->assertDatabaseHas('users', ['name' => 'Updated Test User']);
});

test('a user can be deleted', function () {
    $admin = User::factory()->withRole('admin')->create();
    $user = User::factory()->create();

    $response = $this->actingAs($admin)->delete(route('users.destroy', $user));

    $response->assertRedirect(route('users.index'));
    $this->assertDatabaseMissing('users', ['id' => $user->id]);
});