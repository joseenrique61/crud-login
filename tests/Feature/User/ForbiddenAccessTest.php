<?php

use App\Models\Role;
use App\Models\User;

test('a user cannot access user index page', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get(route('users.index'));
    $response->assertStatus(403);
});

test('a user cannot access user show page', function () {
    $user = User::factory()->create();
    $user_test = User::factory()->create();

    $response = $this->actingAs($user)->get(route('users.show', $user_test->id));
    $response->assertStatus(403);
});

test('a user cannot access user creation page', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get(route('users.create'));
    $response->assertStatus(403);
});

test('a user cannot access user edit page', function () {
    $user = User::factory()->create();

    $user_test = User::factory()->create();

    $response = $this->actingAs($user)->get(route('users.edit', $user_test->id));
    $response->assertStatus(403);
});

test('a user cannot create a user', function () {
    $user = User::factory()->create();
    $role = Role::where('role', 'user')->firstOrFail();

    $response = $this->actingAs($user)->post(route('users.store'), [
        'name' => 'Test User',
        'email' => 'test_email@gmail.com',
        'password' => 'TestPassword123',
        'password_confirmation' => 'TestPassword123',
        'role_id' => $role->id
    ]);
    $response->assertStatus(403);
});

test('a user cannot edit a user', function () {
    $user = User::factory()->create();
    $user_test = User::factory()->create();

    $response = $this->actingAs($user)->put(route('users.update', $user_test), [
        'name' => 'Updated Test User',
        'email' => 'test_email@gmail.com',
    ]);
    $response->assertStatus(403);
});

test('a user cannot delete a user', function () {
    $user = User::factory()->create();
    $user_test = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('users.destroy', $user_test->id));
    $response->assertStatus(403);
});